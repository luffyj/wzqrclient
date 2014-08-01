/**
 * 权限说明
 * 点击申报人 名字 一般都是打开预览window 包括 申报信息 个人信息 汇总信息
 * 
 * 申报人 可以编辑和删除 未上报 自己的申报
 * 
 * 申报单位 可以上报 编辑 删除 未上报 和各种退回  以及修改申报个人账号
 * 
 * 次级机构管理员 可以 编辑 形审（重审） （形审通过，等待形审，形审未过） 导出所有的
 * 
 * 部门管理 可以复审 形审通过 的 导出所有的
 * 
 * 市管理员 可以编辑 复审 形审通过 的 也可以编辑 评审（重审） 复审通过 复审  还编辑可以评审通过的
 * */
Ext.define('wzqr.controller.EditApplication', {
    extend: 'wzqr.controller.BaseController',
    views: [
        'app.edit.window.ChangeOwner',
        'app.edit.window.Xingshen',
        'app.edit.window.Fushen',
        'app.edit.window.Fushen2',
        'app.edit.window.Pingshen',
        'app.Edit'
    ],
    models: ['Application', 'User'],
    refs: [
        {
            ref:'editWindow',
            selector:'xappedit'
        },
        {
            ref: 'editForm',
            selector: 'xappedit form'
        }, {
            ref: 'appGrid',
            selector: 'xappcontext jcgrid'
        }
    ],
    /**
     * 执行审批
     * 众多情况都会发生
     * */
    doApproval: function(window, button) {
        Utils.startLoading();
        window.down('form').updateRecord();

        var reason = window.toReason();
        var result = 0;
        if (button.text.indexOf('退回') !== -1) {
            result = -1;
        } else if (button.text.indexOf('通过') !== -1) {
            result = 1;
        }

        var app = window.down('form').getRecord();
        app.save({
            scope: this,
            callback: function(record, operation, success) {
                if (success) {

                    Ext.Ajax.request({
                        scope: this,
                        url: Utils.toApi('approvalapp'),
                        params: {
                            appid: record.getId(),
                            reason: reason,
                            result: result
                        },
                        callback: function(options, success, response) {
                            Utils.stopLoading();
                            var data = Utils.extraResponseData(response);
                            data.alert();
                            this.getAppGrid().store.reload();
                            window.close();
                        }
                    });

                } else {
                    Utils.stopLoading();
                    Ext.Msg.alert('错误', operation.error.result.message);
                }
            }});

    },
    defaultOP: function(options, success, response) {
        Utils.stopLoading();
        var data = Utils.extraResponseData(response);
        data.alert();
        this.getAppGrid().store.reload();
    },
    /**
     * 保存app
     * 并且执行相应动作
     * */
    saveApp: function(config) {
        var me = this;
        Utils.startLoading();
        if (!config) {
            config = {};
        }
        if (!Ext.isObject(config)) {
            config = {
                success: config
            };
        }
        Ext.applyIf(config, {
            scope: this,
            success: Ext.emptyFn,
            failure: Ext.emptyFn
        });
        this.getEditForm().updateRecord();
        var app = this.getEditForm().getRecord();
        app.save({
            scope: config.scope,
            callback: function(record, operation, success) {
                Utils.stopLoading();
                if (success) {
                    me.getAppGrid().store.reload();
                    this.getApplication().fireEvent('reloadCount');
                    Ext.callback(config.success, this, [record, operation]);
                } else {
                    Ext.Msg.alert('错误', operation.error.result.message);
                    Ext.callback(config.failure, this, [operation.error.result.message, operation]);
                }
            }});
    },
    init: function(app) {
        this.control({
            'jcgridview': {
                actionpingshen: function(grid, record, rowIndex, colIndex, row, item, e) {
                    //打开形审
                    var xs = this.getView('app.edit.window.Pingshen').create();
                    xs.app = record;
                    xs.down('form').loadRecord(xs.app);
                    xs.show();
                },
                actionfushen: function(grid, record, rowIndex, colIndex, row, item, e) {
                    var xs;
                    if (this.isManageOrg(true)) {
                        xs = this.getView('app.edit.window.Fushen').create();
                    } else {
                        xs = this.getView('app.edit.window.Fushen2').create();
                    }


                    xs.app = record;
                    xs.down('form').loadRecord(xs.app);
                    xs.show();
                },
                actionxingshen: function(grid, record, rowIndex, colIndex, row, item, e) {
                    //打开形审
                    var xs = this.getView('app.edit.window.Xingshen').create();
                    xs.app = record;
                    xs.down('form').loadRecord(xs.app);
                    xs.show();
                },
                actioncowner: function(grid, record, rowIndex, colIndex, row, item, e) {
                    var win = this.getView('app.edit.window.ChangeOwner').create();
                    win.app = record;
                    var owner = record.get('owner');
                    if (owner !== null && Ext.isObject(owner)) {
                        win.down('textfield[name=username]').setValue(owner.get('loginName'));
                    }
                    win.show();
                },
                actionsubmit: function(grid, record, rowIndex, colIndex, row, item, e) {
                    Ext.Ajax.request({
                        scope: this,
                        url: Utils.toApi('submitapp'),
                        params: {
                            appid: record.getId()
                        },
                        callback: this.defaultOP
                    });
                },
                actionedit: function(grid, record, rowIndex, colIndex, row, item, e) {
                    this.getView('app.Edit').create(record).show();
                },
                actiondelete: function(grid, record, rowIndex, colIndex, row, item, e) {
                    debug(record, record.get('owner'));
                    record.set('status', '已删除');
                    record.save({
                        success: function() {
                            grid.getStore().reload();
                        }
                    });
                }
            },
            'xappedit button[name=saveandnext]': {
                click: function(button) {
                    this.saveApp(function(record) {
                        this.getEditForm().loadRecord(record);
                        var tabpanel = button.up('tabpanel');
                        var actived = tabpanel.getActiveTab();
                        var index = tabpanel.items.indexOf(actived);
                        tabpanel.setActiveTab(Math.min(index + 1, tabpanel.items.getCount() - 1));
                    });
                }
            },
            'xappedit button[name=save]': {
                click: function(button) {
                    this.saveApp(function(record) {
                        Ext.Msg.alert('提示', '保存成功！');
                    });
                }
            },
            'xappeditcowner button[name=save]': {
                click: function(button) {
                    var win = button.up('xappeditcowner');
                    var form = win.down('form');
                    var data = Ext.apply({appid: win.app.getId()}, form.getValues());
                    Ext.Ajax.request({
                        scope: this,
                        url: Utils.toApi('cappowner'),
                        params: data,
                        callback: this.defaultOP
                    });
                }
            },
            //
            'xappeditattach button[name=download]': {
                click:function(button){
                    window.open(Utils.toApi('attachment/'+this.getEditWindow().app.getId()+'.pdf'));
                }
            },
            'xappeditattach button[name=upload]': {
                //上传
                click: function(button) {
                    var file = button.up('form').down('filefield[name=file]').getValue();
                    if (!file || file.length === 0) {
                        Ext.Msg.alert('提示', '请先选择附件后再点击上传')
                        return;
                    }

//                    Utils.startLoading();
                    button.up('form').submit({
                        url: Utils.toApi('uploadattachment?id='+this.getEditWindow().app.getId()),
                        clientValidation: false,
                        method: 'POST',
                        waitTitle: '请稍候',
                        waitMsg: '正在上传附件 ...',
                        callback: this.defaultOP
                    });
                }
            },
            'xappeditxingshen button[actionButton=true]': {
                //形审完成
                click: function(button) {
                    this.doApproval(button.up('xappeditxingshen'), button);
                }
            }, 'xappeditfushen button[actionButton=true]': {
                //形审完成
                click: function(button) {
                    this.doApproval(button.up('xappeditfushen'), button);
                }
            }, 'xappeditfushen2 button[actionButton=true]': {
                //形审完成
                click: function(button) {
                    this.doApproval(button.up('xappeditfushen2'), button);
                }
            }, 'xappeditpingshen button[actionButton=true]': {
                //形审完成
                click: function(button) {
                    this.doApproval(button.up('xappeditpingshen'), button);
                }
            }
            //labelManagerTitle 部门审核意见的标题
            , 'xappeditfushen2': {
                render: function(view) {
                    var label = view.down('label[name=labelManagerTitle]');
                    label.html = '<center>' + this.getMyorgModel().get('name') + '审核意见</center>';
                    debug('部门情况label', label);
                    label.update(label.html);
                }
            }
        });
    }
});