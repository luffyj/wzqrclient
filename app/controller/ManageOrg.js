Ext.define('wzqr.controller.ManageOrg', {
    extend: 'wzqr.controller.BaseController',
    views: ['org.Add', 'org.AddUnit', 'SetPassword'],
    models: ['Org', 'User'],
    stores: ['UnderOrg', 'Org', 'User', 'SubOrg'],
    onViewActivate: function(view) {
        debug('activate me', view);
        this.getUnderOrgStore().proxy.extraParams = {
            superid: this.getMyorg()
        };
        this.getUnderOrgStore().load();
    },
    onToAddOrg: function(button) {
        Utils.startLoading();
        var form = button.up('window').down('form');
        // conver fields into object
        var obj = Utils.fieldsToObject(form.form.getFields());

        if (!obj.type) {
            //没有输入类型 说明是一个单位
            obj.type = '申报单位';
        }

        var org = this.getModel('Org').create(obj);
        org.set('superOrg', this.getMyorgModel().getLink('self'));
        org.set('manager', null);
        org.save({
            scope: this,
            callback: function(record, operation, success) {
                if (success) {
                    org = record;
                    //创建 用户 关联部门
                    var user = this.getModel('User').create(obj);
                    user.set('loginName',Ext.String.trim(user.get('loginName')));
                    user.set('role', null);
                    user.set('org', org.getLink('self'));
                    user.set('enabled', true);
                    user.set('realName', obj.contact.people);
                    user.save({
                        scope: this,
                        callback: function(record, operation, success) {
                            if (success) {
                                //设置密码 根据已经设置的部门自动设置好角色                                                                                        
                                Ext.Ajax.request({
                                    scope: this,
                                    url: Utils.toApi('initUserPassword'),
                                    params: {
                                        people: 'false',
                                        userid: record.getId(),
                                        password: obj.password
                                    },
                                    callback: function(options, success, response) {
                                        debug('initUserPassword response:', response);
                                        if (success) {
                                            org.set('manager', record.getLink('self'));
                                            org.save({
                                                scope: this,
                                                callback: function() {
                                                    Utils.stopLoading();
                                                    Ext.Msg.alert('完成', '成功添加！');
                                                    button.up('window').close();
                                                    this.getUnderOrgStore().reload();
                                                    this.getSubOrgStore().reload();
                                                }
                                            });

                                        } else {
                                            org.destroy({
                                                success: function() {
                                                    debug('将用户也删除');
                                                    user.destroy();
                                                }
                                            });
                                            Utils.stopLoading();
                                            var data = Utils.extraResponseData(response);
                                            var message = data.message;
                                            Ext.Msg.alert('错误', message);
                                        }
                                    }
                                });
                                Utils.stopLoading();
                            } else {
                                org.destroy();
                                Utils.stopLoading();
                                Ext.Msg.alert('错误', operation.error.result.message);
                            }
                        }
                    });
                } else {
                    //无需删除
                    Utils.stopLoading();
                    Ext.Msg.alert('错误', operation.error.result.message);
                }
            }
        });
    },
    init: function(app) {

        this.getUnderOrgStore().on('load', function(store) {
            //放入几个空数据 以保证视觉效果
            var records = new Array();
            for (var i = store.pageSize - store.getCount(); i > 0; i--) {
                records.push(new store.model(/*you might need to provide default data here*/))
            }
            store.add(records);
        });

        this.control({
            'xsetpassword button[name=save]': {
                click: function(button) {
                    Utils.startLoading();
                    var win = button.up('window');
                    Ext.Ajax.request({
                        scope: this,
                        url: Utils.toApi('setPassword'),
                        params: win.down('form').getForm().getValues(),
                        callback: function(options, success, response) {
                            Utils.stopLoading();
                            var data = Utils.extraResponseData(response);
                            data.alert();
                            if (data.success) {
                                win.close();
                                this.getUnderOrgStore().reload();
                                this.getSubOrgStore().reload();
                            }
                        }
                    });
                }
            },
            'jcgridview': {
                itemdblclick: function(grid, record, item, index, e, eOpts) {
                    if (grid.up('xmanageorg') || grid.up('xmanageunit')) {
                        var managerLoginName = record.get('managerLoginName');
                        debug(managerLoginName);
                        if (managerLoginName && managerLoginName.length > 0) {
                            var window = this.getView('SetPassword').create(managerLoginName);
                            window.show();
                        }
                    }
                }
            },
            'xmanageunit': {
                activate: 'onViewActivate'
            },
            'xmanageorg': {
                //render不够用
                activate: 'onViewActivate'
            },
            'xmanageorg button[text=test]': {
                click: function(button) {
                    //看下org的数据而已
                    this.getOrgStore().on('load', function(store, records) {
                        Ext.Array.each(records, function(item) {
                            debug(item);
                        });
//                        debug(records[0],records[0].getLink('self'));
                    });
                    this.getOrgStore().reload();
//
//                    var testaddorg = this.getModel('Org').create(
//                            {
//                                name: 'testadd3',
//                                description: 'desc',
//                                contact:{
//                                    fax:'fax?'
//                                },
//                                manager:null,
//                                superOrg:'http://localhost:8084/wzqrserver/api/org/7'
//                            }
//                    );
//                    testaddorg.save();
                }
            },
            'xmanageunit button[name=add]': {
                click: function(button) {
                    var window = this.getView('org.AddUnit').create();
                    window.show();
                }
            },
            'xmanageorg button[name=add]': {
                click: function(button) {
                    var window = this.getView('org.Add').create();
                    window.show();
                }
            },
            //申报单位
            'xorgaddunit button[name=save]': {
                click: 'onToAddOrg'
            },
            'xorgadd button[name=save]': {
                click: 'onToAddOrg'
            }
        });
    }
});
