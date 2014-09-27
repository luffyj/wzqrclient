Ext.define('wzqr.view.rr.Select', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xrrselect',
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
                            fieldLabel: '状态',
                            name: 'status',
                            value:'申请',
                            store: [
                                '申请',
                                '拒绝',
                                '允许'
                            ]
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: 0.5,
                            fieldLabel: '单位名称',
                            name: 'name'
                        }
//                        ,
//                        {
//                            xtype: 'combobox',
//                            columnWidth: 0.33333,
//                            fieldLabel: '申请管区',
//                            name: 'supername',
//                            displayField: 'name',
//                            store: 'SubOrg'
//                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'right',
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var xappselect = button.up('xrrselect');
                                        xappselect.doQuery();
                                    },
                                    text: '查询'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var form = button.up('form');
                                        var xappselect = form.up('xrrselect');
                                        form.getForm().getFields().each(function(field) {
                                            field.reset();
                                        });
                                        form.down('combobox[name=status]').setValue('申请');
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