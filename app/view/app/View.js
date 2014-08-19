/**
 * 申报信息查看
 * */
Ext.define("wzqr.view.app.View", {
    extend: 'Ext.window.Window',
    requires: [
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
        createAppInfos: function(app) {
            return ('创业人才' === app.get('type')) ?
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
        }
    },
    constructor: function(app) {
        this.app = app;
        this._citems = wzqr.view.app.View.createAppInfos(app);
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

    }
});