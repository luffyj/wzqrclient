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
        'wzqr.view.app.edit.SummaryEnt',
        'wzqr.view.app.edit.Work',
        'wzqr.view.app.edit.EntInfo1',
        'wzqr.view.app.edit.EntInfo21',
        'wzqr.view.app.edit.EntInfo22',
        'wzqr.view.app.edit.EntInfo23',
        'Ext.form.field.ComboBox',
        'Ext.tab.Panel',
        'Ext.form.FieldSet'
    ],
    ui:'wzwindow',
    maximizable: true,
    xtype: 'xappedit',
    title: '申报信息编辑',
    layout: 'fit',
    width: 1024,
    height: 615,
    constructor: function(app) {
        this.app = app;
        if ('创业人才' === app.get('type')) {
            this._citems = [
                {
                    xtype: 'xappeditcover',
                    id: 'wcoverBox'
                }, {
                    xtype: 'xappeditbasic',
                    id: 'wbaseBox',
                    appid:app.getId(),
                    cdname1: '公司名称及职务',
                    cdname2: '公司地址'
                }, {
                    xtype: 'xappediteducation',
                    id: 'ducatBox'
                }, {
                    xtype: 'xappeditwork',
                    id: 'workBox'
                }, {
                    xtype: 'xappeditentinfo1',
                    id: 'winforBox'
                }, {
                    xtype: 'xappeditentinfo21'
                }, {
                    xtype: 'xappeditentinfo22'
                }, {
                    xtype: 'xappeditentinfo23'
                }, {
                    xtype: 'xappeditperson',
                    id: 'wpersonBox'
                }, {
                    xtype: 'xappeditsummaryent',
                    id: 'wmaryBox'
                }, {
                    xtype: 'xappeditattach',
                    id: 'wattachBox'
                }
            ];
        } else {
            this._citems = [
                {
                    xtype: 'xappeditcover',
                    id: 'wcoverBox'
                }, {
                    xtype: 'xappeditbasic',
                    appid:app.getId(),
                    id: 'wbaseBox',
                    cdname1: '拟（现）任职单位名称<br/>Current or Expected Employer',
                    cdname2: '单位地址<br/>Current or Expected Employer Address'
                }, {
                    xtype: 'xappediteducation',
                    id: 'ducatBox'
                }, {
                    xtype: 'xappeditwork',
                    id: 'workBox'
                }, {
                    xtype: 'xappeditspecialty',
                    id: 'cialtyBox'
                }, {
                    xtype: 'xappeditproject',
                    id: 'ojectBox'
                }, {
                    xtype: 'xappeditresultmain',
                    id: 'sultmainBox'
                }, {
                    xtype: 'xappeditresultother',
                    id: 'otherBox'
                }, {
                    xtype: 'xappeditplan',
                    id: 'editplan'
                }, {
                    xtype: 'xappeditperson',
                    id: 'wpersonBox'
                }, {
                    xtype: 'xappeditsummary',
                    id: 'wmaryBox'
                }, {
                    xtype: 'xappeditattach',
                    id: 'wattachBox'
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