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
        'Ext.menu.Menu',
        'Ext.ComponentQuery',
        'app.edit.window.Submit',
        'app.edit.window.ChangeOwner',
        'app.edit.window.Xingshen',
        'app.edit.window.Fushen',
        'app.edit.window.Fushen2',
        'app.edit.window.Pingshen',
        'app.View',
        'app.Edit'
    ],
    models: ['Application', 'User'],
    refs: [
        {
            ref: 'editWindow',
            selector: 'xappedit'
        },
        {
            ref: 'editForm',
            selector: 'xappedit form'
        }, {
            ref: 'appGrid',
            selector: 'xappcontext jcgrid'
        }
    ],
    reloadCount: function() {
        this.getController('ManageApplication').reloadCount();
    },
    /**
     * 执行审批
     * 众多情况都会发生
     * 还可能是上报哦
     * */
    doApproval: function(window, button) {
        Utils.startLoading();
        window.down('form').updateRecord();

        var reason;
        if (window.toReason)
            reason = window.toReason();
        var result = 0;
        if (button.text.indexOf('退回') !== -1) {
            result = 2;
        } else if (button.text.indexOf('通过') !== -1) {
            result = 1;
        }

        //如果是将 当前通过状态 改成 当前其他状态或者通过状态
        if (window.app.get('status') === '形审通过' && button.text.indexOf('形审') !== -1) {
            result = (1 << 8) | result;
        }

        if (window.app.get('status') === '复审通过' && button.text.indexOf('复审') !== -1) {
            result = (1 << 8) | result;
        }

        if (window.app.get('status').indexOf('评审') !== -1 && button.text.indexOf('复审') !== -1) {
            result = (1 << 8) | result;
        }

        var app = window.down('form').getRecord();
        app.save({
            scope: this,
            callback: function(record, operation, success) {
                if (success) {

                    if (!window.toReason) {
                        Ext.Ajax.request({
                            scope: this,
                            url: Utils.toApi('submitapp'),
                            params: {
                                appid: record.getId()
                            },
                            callback: function(options, success, response) {
                                Utils.stopLoading();
                                var data = Utils.extraResponseData(response);
                                data.alert();
                                this.reloadCount();
                                this.getAppGrid().store.reload();
                                window.close();
                            }
                        });
                    } else
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
                                this.reloadCount();
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
        this.reloadCount();
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
                itemdblclick: function(grid, record, item, index, e, eOpts) {
                    if (grid.up('xappcontext')) {
                        var win = this.getView('app.View').create(record);
                        Ext.Array.each(Ext.ComponentQuery.query('field', win), function(field) {
                            field.setReadOnly(true);
                        });
                        win.show();
                    }
                },
                actionexport: function(grid, record, rowIndex, colIndex, row, item, e) {
                    window.open(Utils.toApi('report/' + record.getId() + '.doc'));
                },
                actionpingshen: function(grid, record, rowIndex, colIndex, row, item, e) {
                    //打开形审
                    var xs = this.getView('app.edit.window.Pingshen').create(record);
                    xs.app = record;
                    xs.down('form').loadRecord(xs.app);
                    xs.show();
                },
                actionfushen: function(grid, record, rowIndex, colIndex, row, item, e) {
                    var xs;
                    if (this.isManageOrg(true)) {
                        xs = this.getView('app.edit.window.Fushen').create(record);
                    } else {
                        xs = this.getView('app.edit.window.Fushen2').create();
                    }


                    xs.app = record;
                    xs.down('form').loadRecord(xs.app);
                    xs.show();
                },
                actionxingshen: function(grid, record, rowIndex, colIndex, row, item, e) {
                    //打开形审
                    var xs = this.getView('app.edit.window.Xingshen').create(record);
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
                    var xs = this.getView('app.edit.window.Submit').create();
                    xs.app = record;
                    xs.down('form').loadRecord(xs.app);
                    xs.show();
                },
                actionedit: function(grid, record, rowIndex, colIndex, row, item, e) {
                    this.getView('app.Edit').create(record).show();
                },
                actiondelete: function(grid, record, rowIndex, colIndex, row, item, e) {
                    debug(record, record.get('owner'));
                    Ext.Msg.confirm('请确认', '确实要删除这个审核么？', function(bt) {
                        if (bt === 'yes') {
                            record.set('status', '已删除');
                            record.save({
                                success: function() {
                                    grid.getStore().reload();
                                }
                            });
                        }
                    }, this);
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
            'menuitem[name=_exportall]': {
                click: function() {
                    window.open(Utils.toApi('reports?ids=all'));
                }
            },
            'menuitem[name=_exportselect]': {
                click: function() {
                    var records = this.getAppGrid().getSelectionModel().getSelection();
                    var ids = "";
                    if (records.length === 0) {
                        Ext.Msg.alert('提示', '没有选择任何申报信息');
                        return;
                    }
                    records.forEach(function(record) {
                        if (ids.length === 0) {
                            ids = "" + record.getId();
                        } else {
                            ids = ids + "," + record.getId();
                        }
                    });

                    window.open(Utils.toApi('reports?ids=' + ids));
                }
            },
            //删除
            'xappcontext button[name=deleteapps]': {
                click: function(button, e) {
                    var records = this.getAppGrid().getSelectionModel().getSelection();
                    if (records.length === 0) {
                        Ext.Msg.alert('提示', '没有选择任何申报信息');
                        return;
                    }
                    Ext.Array.each(records, function(record) {
                        if (record.isWeishangbao() || record.isReturn()) {
                            //可以
                            Ext.Msg.confirm('请确认', '确实要删除' + record.get('realName') + '的申报信息么？', function(bt) {
                                if (bt === 'yes') {
                                    record.set('status', '已删除');
                                    record.save({
                                        scope: this,
                                        success: function() {
                                            this.getAppGrid().getStore().reload();
                                        }
                                    });
                                }
                            }, this);
                        } else {
                            Ext.Msg.alert('提示', record.get('realName') + '的申报信息正在各级管局审核中，无法删除。');
                        }
                    }, this);
                }
            },
            //导出申报书
            'xappcontext button[name=exportword]': {
                click: function(button, e) {
                    var records = this.getAppGrid().getSelectionModel().getSelection();
                    if (records.length === 0) {
                        Ext.Msg.alert('提示', '没有选择任何申报信息');
                        return;
                    }
                    if (records.length !== 1) {
                        Ext.Msg.alert('提示', '请选择“一个”申报信息');
                        return;
                    }
                    window.open(Utils.toApi('report/' + records[0].getId() + '.doc'));
                }},
            //导出汇总表
            'xappcontext button[name=export]': {
                click: function(button, e) {
                    if (false) {
                        Ext.Msg.alert('提示','汇总表功能正在开发中');
                        return;
                    }
                    var mn = Ext.create('Ext.menu.Menu', {
                        width: 100,
                        margin: '0 0 0 0',
                        style: {
                            background: '#fff'
                        },
                        floating: true, // usually you want this set to True (default)
                        items: [{
                                text: '导出全部',
                                name: '_exportall'
                            }, {
                                text: '导出选择',
                                name: '_exportselect'
                            }]
                    });
                    var xy = e.getXY();
                    xy[0] = xy[0] + 30;
                    xy[1] = xy[1] - 30;
                    mn.showAt(xy);
                }
            },
            //
            'xappeditattach button[name=download]': {
                click: function(button) {
                    window.open(Utils.toApi('attachment/' + this.getEditWindow().app.getId() + '.pdf'));
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
                        url: Utils.toApi('uploadattachment?id=' + this.getEditWindow().app.getId()),
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
            }, 'xappeditsubmit button[actionButton=true]': {
                click: function(button) {
                    this.doApproval(button.up('xappeditsubmit'), button);
                }
                //点击了上报！

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