/**
 * 申报信息编辑
 * */
Ext.define("wzqr.view.app.Edit", {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.ComponentQuery',
        'wzqr.view.common.CommonField',
        'wzqr.view.common.TitleLabel',
        'wzqr.view.common.MessageLabel',
        'Ext.layout.container.Table',
        'Ext.layout.container.Column',
        'wzqr.view.app.edit.Attach',
        'wzqr.view.app.edit.Basic',
        'wzqr.view.app.edit.Cover',
        'wzqr.view.app.edit.Education',
        'wzqr.view.app.edit.Person',
        'wzqr.view.app.edit.Plan',
        'wzqr.view.app.edit.Project',
        'wzqr.view.app.edit.ResultMain',
        'wzqr.view.app.edit.ResultOther',
        'wzqr.view.app.edit.Specialty',
        'wzqr.view.app.edit.Summary',
        'wzqr.view.app.edit.Work',
        'wzqr.view.app.edit.EntInfo1',
        'wzqr.view.app.edit.EntInfo2',
        'Ext.form.field.ComboBox',
        'Ext.tab.Panel',
        'Ext.form.FieldSet'
    ],
    maximizable: true,
    xtype: 'xappedit',
    title: '申报信息编辑',
    layout: 'fit',
    width: 930,
    height: 574,
    constructor: function(app) {
        this.app = app;
        if ('创业人才' === app.get('type')) {
            this._citems = [
                {
                    xtype: 'xappeditcover'
                }, {
                    xtype: 'xappeditbasic'
                }, {
                    xtype: 'xappediteducation'
                }, {
                    xtype: 'xappeditwork'
                }, {
                    xtype: 'xappeditentinfo1'
                }, {
                    xtype: 'xappeditentinfo2'
                }, {
                    xtype: 'xappeditperson'
                }, {
                    xtype: 'xappeditsummary'
                }, {
                    xtype: 'xappeditattach'
                }
            ];
        } else {
            this._citems = [
                {
                    xtype: 'xappeditcover'
                }, {
                    xtype: 'xappeditbasic'
                }, {
                    xtype: 'xappediteducation'
                }, {
                    xtype: 'xappeditwork'
                }, {
                    xtype: 'xappeditspecialty'
                }, {
                    xtype: 'xappeditproject'
                }, {
                    xtype: 'xappeditresultmain'
                }, {
                    xtype: 'xappeditresultother'
                }, {
                    xtype: 'xappeditplan'
                }, {
                    xtype: 'xappeditperson'
                }, {
                    xtype: 'xappeditsummary'
                }, {
                    xtype: 'xappeditattach'
                }
            ];
        }
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
                                        name: 'save',
                                        text: '保存'
                                    }, {
                                        name: 'saveandnext',
                                        text: '保存并编辑下一页'
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