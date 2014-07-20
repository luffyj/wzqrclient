Ext.define('wzqr.controller.ManageApplication', {
    extend: 'wzqr.controller.BaseController',
    views: ['app.Add', 'app.ContextManager', 'app.ContextOrg', 'app.ContextUser'],
    models: ['Application', 'User'],
    stores: ['UnderApplication', 'AllApplication', 'MyApplication'],
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
                    this.getUnderApplicationStore().reload();
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
                                            people:'true',
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
                    var context = view.down('xappcontext');
                    var xappcontextmanager = context.down('xappcontextmanager');
                    var xappcontextuser = context.down('xappcontextuser');
                    var xappcontextorg = context.down('xappcontextorg');
                    if (xappcontextmanager) {
                        context.remove(xappcontextmanager);
                    }
                    if (xappcontextuser) {
                        context.remove(xappcontextuser);
                    }
                    if (xappcontextorg) {
                        context.remove(xappcontextorg);
                    }

                    //根据权限分配页面和store
                    var tstore;
                    if (this.isPeople()) {
                        debug('申报人');
                        this.getMyApplicationStore().proxy.extraParams = {
                            userid: this.getUserId()
                        };
                        tstore = this.getMyApplicationStore();
                        context.add(this.getView('app.ContextUser').create());
                    } else if (this.isCross()) {
                        debug('管理者');
                        tstore = this.getAllApplicationStore();
                        context.add(this.getView('app.ContextManager').create());
                    } else {
                        debug('组织和机构');
                        this.getUnderApplicationStore().proxy.extraParams = {
                            superid: this.getMyorg()
                        };
                        tstore = this.getUnderApplicationStore();
                        context.add(this.getView('app.ContextOrg').create());
                    }

                    tstore.reload();
                    debug('app', this.getApplication());//orgModel
                },
                render: function(view) {
                    if (this.isPeople()) {
                        //removes
                        view.remove(view.down('xappreport'));
                        view.remove(view.down('xappselect'));

                        var xappcontext = view.down('xappcontext');
                        xappcontext.remove(xappcontext.down('button[name=export]'));
                    }

                    var buttonsPanel = view.down('panel[name=buttons]');
                    debug('buttonsPanel:', buttonsPanel);

                    if (this.isManagePeople()) {
                        buttonsPanel.add({
                            xtype: 'button',
                            margin: 5,
                            name: 'addapp',
                            text: '增加'
                        });
                    }
                }
            }
        });
    }
});
