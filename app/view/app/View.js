/**
 * 申报信息查看
 * */
Ext.define("wzqr.view.app.View", {
    extend: 'Ext.window.Window',
    requires: [
        'wzqr.view.app.edit.Submit',
        'wzqr.view.app.edit.Xingshen',
        'wzqr.view.app.edit.Fushen',
        'wzqr.view.app.edit.Pingshen',
        'wzqr.view.app.view.Return',
        'wzqr.view.app.edit.Person',
        'wzqr.view.app.edit.Summary',
        'wzqr.view.app.edit.SummaryEnt',
        'wzqr.view.app.view.App',
        'Ext.ComponentQuery',
        'wzqr.view.common.CommonField',
        'wzqr.view.common.TitleLabel',
        'wzqr.view.common.MessageLabel',
        'Ext.layout.container.Table',
        'Ext.layout.container.Column',
        'wzqr.view.app.edit.Summary',
        'wzqr.view.app.edit.SummaryEnt',
        'Ext.form.field.ComboBox',
        'Ext.tab.Panel',
        'Ext.form.FieldSet'
    ],
    ui: 'wzwindow',
    maximizable: true,
    xtype: 'xappview',
    title: '申报人详细信息',
    layout: 'fit',
    width: 1024,
    height: 615,
    statics: {
        createAppInfos: function(app, onlyView) {
            // 退回时  只显示退回
            // 还没有经过复审评审 时  就是 等待形审
            // 复审意见 评审意见 
            var otherapps;
            if (app.get('status') === '未上报') {
                otherapps = [];
            } else if (Ext.String.endsWith(app.get('status'), '退回')) {
                otherapps = [
                    {
                        xtype: 'xappviewreturn'
                    }
                ];
            } else {
                otherapps = [
                    {
                        xtype: 'panel',
                        title: '用人单位意见',
                        margin: '20 10 10 10',
                        items: [
                            {
                                xtype: 'appeditsubmit',
                                title: '',
                                width: 1006,
                                removeButtons: true
                            }
                        ]
                    }, {
                        xtype: 'panel',
                        title: '管理部门审核意见',
                        autoScroll: true,
                        margin: '20 10 10 10',
                        items: [
                            {
                                xtype: 'appeditxingshen',
                                title: '',
                                width: 1006,
                                removeButtons: true
                            }, {
                                margin: '20 0 0 0',
                                xtype: 'appeditfushen',
                                title: '',
                                width: 1006,
                                removeButtons: true
                            }, {
                                margin: '20 0 0 0',
                                xtype: 'appeditpingshen',
                                title: '',
                                width: 1006,
                                removeButtons: true
                            }
                        ]
                    }
                ];
            }
            var allapps = ('创业人才' === app.get('type')) ?
                    [
                        {
                            xtype: 'xappviewapp',
                            id: 'xappviewappid',
                            app: app
                        }, {
                            xtype: 'xappeditperson',
                            id: 'wpersonBox'
                        }, {
                            xtype: 'xappeditsummaryent',
                            id: 'wmaryBox'
                        }
                    ]
                    :
                    [
                        {
                            xtype: 'xappviewapp',
                            id: 'xappviewappid',
                            app: app
                        }, {
                            xtype: 'xappeditperson',
                            id: 'wpersonBox'
                        }, {
                            xtype: 'xappeditsummary',
                            id: 'wmaryBox'
                        }
                    ];
            return onlyView ? Ext.Array.push(allapps, otherapps) : allapps;
        }
    },
    constructor: function(app, onlyView) {
        this.app = app;
        this._citems = wzqr.view.app.View.createAppInfos(app, onlyView);
        this.callParent();
    },
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    layout: 'fit',
                    items: [
                        {
                            xtype: 'tabpanel',
                            defaults: {
                                margin: 5,
                                buttons: [
                                    {
                                        text: '关闭',
                                        handler: function(button) {
                                            button.up('window').close();
                                        }
                                    }
                                ]
                            },
                            items: me._citems
                        }
                    ]
                }
            ]
        });
        me.callParent(arguments);
        Ext.Array.each(Ext.ComponentQuery.query('xmutliwowpanel', me), function(view) {
            view.beforeLoadRecord(this.app);
        }, me);

        me.down('form').loadRecord(me.app);
        
        

        Ext.Array.each(Ext.ComponentQuery.query('xappviewhtml', me), function(view) {
            var name = view.name;
            var theValue = me.app.get(name);
            if (name === 'sex') {
                theValue = theValue === 0 ? '男' : '女';
            }
            if (theValue) {
                view.setValue(theValue);
            } else {
                if (me.app['get' + name]) {
                    theValue = Ext.callback(me.app['get' + name], me.app);
                    if (theValue) {
                        view.setValue(theValue);
                    }
                }
            }
        });

    }
});