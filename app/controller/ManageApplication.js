Ext.define('wzqr.controller.ManageApplication', {
    extend: 'wzqr.controller.BaseController',
    requires: [
        'Ext.layout.container.Accordion',
        'Ext.util.Filter'
//        'wzqr.view.app.UnitAction'
    ],
    views: ['app.Add', 'app.ContextManager',
        'app.ReportType',
        'app.ContextRoot',
        'app.ContextSub',
        'app.ContextUnit',
        'app.ContextUser'],
    models: ['Application', 'User'],
    stores: [
        'UnderUnitApplication',
        'UnderApplication', 'AllApplication', 'MyApplication'
    ],
    refs: [
        {
            ref: 'appSelect',
            selector: 'xappselect'
        }
    ],
    reloadCount: function() {
        var view = Ext.getCmp('xmanageappidid');
        if (view.down('xappreport')) {
            var me = this;
            Ext.Ajax.request({
                scope: view.down('xappreport'),
                method: 'GET',
                url: Utils.toApi('countapplication'),
                callback: function(options, success, response) {
                    if (success) {
                        var data = Utils.extraResponseData(response);
                        data = data.data;
                        if (data) {
                            this.down('label[name=count]').setText(data.count);
                            var root = this.down('panel[name=subroot]');
                            root.removeAll();
                            var toadds = [];
                            var orderTypes = [
                                'status',
                                'specialty',
                                'type',
                                'myorg.superOrg.type',
                                'batch',
                                'myorg.name',
                                'myorg.superOrg.name'
                            ];

                            for (var i = 0; i < orderTypes.length; i++) {
                                var groupType = orderTypes[i];
                                if (data.hasOwnProperty(groupType) && groupType !== 'count') {
                                    var dataList = data[groupType];
                                    toadds.push(me.getView('app.ReportType').create(groupType, dataList));
                                }
                            }
                            root.add(toadds);
                        }
                    }
                }
            });
        }
    },
    /**
     * 创建app
     * 如果失败 将用户也删除
     * */
    createApp: function(ui, data, user) {
        var app = this.getModel('Application').create(data);
        app.set('myorg', this.getMyorgModel().getLink('self'));
        if (user) {
            app.set('owner', user.getLink('self'));
        } else
            app.set('owner', null);

        app.set('status', '未上报');

        app.save({
            scope: this,
            callback: function(record, operation, success) {
                if (success) {
                    Utils.stopLoading();
                    Ext.Msg.alert('成功', '成功增加！');
                    ui.up('window').close();
                    this.currentStore.reload();
                    this.getApplication().fireEvent('reloadCount');
                } else {
                    if (user) {
                        user.destroy();
                    }
                    Utils.stopLoading();
                    Ext.Msg.alert('错误', operation.error.result.message);
                }
            }});
    },
    init: function(app) {
        this.control({
            'xappadd textfield[name=appOrgName]': {
                //自动填写当前单位名字
                render: function(field) {
                    var org = this.getApplication().orgModel;
                    if (org) {
                        field.setValue(org.get('name'));
                    }
                }
            },
            'xappadd button[name=save]': {
                click: function(button) {
                    Utils.startLoading();
                    var form = button.up('window').down('form');
                    // conver fields into object
                    var obj = Utils.fieldsToObject(form.form.getFields());

                    var user = null;
                    if (Utils.isValidString(obj.loginName) && Utils.isValidString(obj.password)) {
                        user = this.getModel('User').create(obj);
                        user.set('role', null);
                        user.set('org', this.getMyorgModel().getLink('self'));
                        user.set('enabled', true);
                        user.save({
                            scope: this,
                            callback: function(record, operation, success) {
                                if (success) {
                                    //设置密码 根据已经设置的部门自动设置好角色                                                                                        
                                    Ext.Ajax.request({
                                        scope: this,
                                        url: Utils.toApi('initUserPassword'),
                                        params: {
                                            people: 'true',
                                            userid: record.getId(),
                                            password: obj.password
                                        },
                                        callback: function(options, success, response) {
                                            debug('initUserPassword response:', response);
                                            if (success) {
                                                this.createApp(button, obj, record);
                                            } else {
                                                record.destroy();
                                                Utils.stopLoading();
                                                var data = Utils.extraResponseData(response);
                                                var message = data.message;
                                                Ext.Msg.alert('错误', message);
                                            }
                                        }});
                                } else {
                                    Utils.stopLoading();
                                    Ext.Msg.alert('错误', operation.error.result.message);
                                }
                            }});
                    } else {
                        this.createApp(button, obj);
                    }

                }
            },
            'xmanageapp button[name=addapp]': {
                //打开新增审批界面
                click: function(button) {
                    var window = this.getView('app.Add').create();
                    window.show();
                }
            },
            'xmanageapp': {
                activate: function(view) {
                    debug('激活了 开始梳理store', view);
                    //xappcontextorg                    
                    var context = view.down('xappcontext');
                    var xappcontextmanager = context.down('xappcontextmanager');
                    var xappcontextroot = context.down('xappcontextroot');
                    var xappcontextuser = context.down('xappcontextuser');
                    var xappcontextsub = context.down('xappcontextsub');
                    var xappcontextunit = context.down('xappcontextunit');
                    if (xappcontextroot) {
                        context.remove(xappcontextroot);
                    }
                    if (xappcontextmanager) {
                        context.remove(xappcontextmanager);
                    }
                    if (xappcontextuser) {
                        context.remove(xappcontextuser);
                    }
                    if (xappcontextsub) {
                        context.remove(xappcontextsub);
                    }
                    if (xappcontextunit) {
                        context.remove(xappcontextunit);
                    }

                    var baseParams = {
                        batch: '',
                        realName: '',
                        appOrgName: '',
                        type: '',
                        specialty: '',
                        appOrgType: '',
                        subName: '', //主管单位
                        status: ''
                    };

                    //根据权限分配页面和store
                    var tstore;
                    if (this.isPeople()) {
                        debug('申报人');
                        this.getMyApplicationStore().proxy.extraParams = Ext.apply({
                            userid: this.getUserId()
                        }, baseParams);
                        tstore = this.getMyApplicationStore();
                        context.add(this.getView('app.ContextUser').create());
                    } else if (this.isManageOrg(true)) {
                        //市委
                        debug('市委管理');
                        tstore = this.getAllApplicationStore();
                        tstore.proxy.extraParams = Ext.apply({}, baseParams);
                        context.add(this.getView('app.ContextRoot').create());
                    } else if (this.isCross()) {
                        debug('部门管理');
                        tstore = this.getAllApplicationStore();
                        tstore.proxy.extraParams = Ext.apply({}, baseParams);
                        context.add(this.getView('app.ContextManager').create());
                    } else {
                        if (this.isManageOrg()) {
                            debug('组织和机构:次级管理');
                            this.getUnderApplicationStore().proxy.extraParams = Ext.apply({
                                superid: this.getMyorg()
                            }, baseParams);
                            tstore = this.getUnderApplicationStore();
                            context.add(this.getView('app.ContextSub').create());
                        } else {
                            debug('组织和机构:申报单位');
                            this.getUnderUnitApplicationStore().proxy.extraParams = Ext.apply({
                                superid: this.getMyorg()
                            }, baseParams);
                            tstore = this.getUnderUnitApplicationStore();
                            context.add(this.getView('app.ContextUnit').create());
                        }
                    }

                    tstore.reload();
                    this.currentStore = tstore;
                    debug('app', this.getApplication());//orgModel

                    //移除申报人的搜索和查询功能
                    if (this.isPeople()) {
                        //removes
                        debug('申报人 意图移除xappselect', view.down('xappselect'));
                        if (view.down('xappselect')) {
                            view.remove(view.down('xappselect').up('container'));
                        }
                        if (view.down('xappreport')) {
                            view.remove(view.down('xappreport'));
                        }

                        var xappcontext = view.down('xappcontext');
                        if (xappcontext.down('button[name=export]')) {
                            xappcontext.down('button[name=export]').up('panel').remove(xappcontext.down('button[name=export]'));
                        }
                    } else if (view.down('xappreport')) {
                        this.getApplication().fireEvent('reloadCount');
                    }

                    var buttonsPanel = view.down('panel[name=buttons]');
                    debug('buttonsPanel:', buttonsPanel);

                    //添加申报单位的申报添加功能
                    if (this.isManagePeople() && !buttonsPanel.down('button[name=addapp]')) {
                        buttonsPanel.add({
                            xtype: 'button',
                            margin: 5,
                            name: 'addapp',
                            text: '增加'
                        });
                    }
                },
                render: function(view) {
                }
            },
            'xappselect field': {
                change: function(field, newValue, oldValue, eOpts) {
                    if (this.currentStore) {
                        var toapply = {};
                        toapply[field.getName()] = newValue;
                        Ext.apply(this.currentStore.proxy.extraParams, toapply);
                    }
                }
            },
            'xappselect': {
                query: function(view, form, fields) {
                    this.currentStore.reload();
//                    var obj = form.getForm().getValues();
//                    debug('查询', view, form, fields, obj);
//                    this.currentStore.clearFilter();
//                    this.currentStore.addFilter(new Ext.util.Filter({
//                        filterFn: function(item) {
//                            for (var pname in obj) {
//                                if (obj.hasOwnProperty(pname)) {
//                                    var pvalue = obj[pname];
//                                    if (pvalue && pvalue.length > 0) {
//                                        var value = item.get(pname);
//                                        if (!value)
//                                            return false;
//                                        if (value.indexOf(pvalue) === -1)
//                                            return false;
//                                    }
//                                }
//                            }
//                            return true;
//                        }
//                    }));
                }
            },
            'xappreport': {
                query: function(view, type, value) {
                    // covter type 2 type
                    debug('doquery', type, value);
                    //myorg.name
                    //myorg.superOrg.name

                    //subName
                    //appOrgName                    
                    if (type === 'myorg.name') {
                        type = 'appOrgName';
                    } else if (type === 'myorg.superOrg.name') {
                        type = 'subName';
                    } else if (type === 'myorg.superOrg.type') {
                        type = 'appOrgType';
                    }

                    var field = this.getAppSelect().down('field[name=' + type + ']');
                    this.getAppSelect().down('form').getForm().getFields().each(function(f) {
                        f.reset();
                    });
                    field.setValue(value);
                    this.getAppSelect().fireEvent('query');
                }
            }
        });

        app.on('reloadCount', this.reloadCount, this);
    }
});
