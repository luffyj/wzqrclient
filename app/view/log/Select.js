Ext.define('wzqr.view.log.Select', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xlogselect',
    requires: [
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],
    height: 81,
    width: 903,
    layout: 'fit',
    title: '',
    initComponent: function() {
        var me = this;

        me.addEvents(
                'query'
                );

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    style: {
                        'border-width': '1px',
                        'border-style': 'solid'
                    },
                    defaults: {
                        labelAlign: 'right',
                        emptyText: '全部',
                        margin: '3 0 3 0'
                    },
                    layout: 'column',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'combobox',
                            columnWidth: 0.5,
                            fieldLabel: '操作类型',
                            name: 'type',
                            store: [
                                '审核',
                                '上报'
                            ]
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 0.5,
                            fieldLabel: '用户角色',
                            name: 'roleName',
                            store: [
                                '次级机构管理员',
                                '申报单位',
                                '申报人'
                            ]
                        },
                        {
                            xtype: 'datefield',
                            columnWidth: 0.5,
                            fieldLabel: '操作时间',
                            name: 'time',
                            submitFormat: 'time'
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: 0.5,
                            fieldLabel: '登录名',
                            name: 'loginName'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'right',
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var xappselect = button.up('xlogselect');
                                        xappselect.doQuery();
                                    },
                                    text: '查询'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var form = button.up('form');
                                        var xappselect = form.up('xlogselect');
                                        form.getForm().getFields().each(function(field) {
                                            field.reset();
                                        });
                                        xappselect.doQuery();
                                    },
                                    text: '清除'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },
    doQuery: function() {
        var form = this.down('form');
        this.fireEvent('query', this, form, form.getForm().getFields());
    }

});