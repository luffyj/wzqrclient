Ext.define('wzqr.view.app.edit.Fushen2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appeditfushen2',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.button.Button'
    ],

    height: 287,
    width: 708,
    title: '部门审核意见',

    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    flex: 1,
                    name: 'labelManagerTitle',
                    html: '<center>部门审核意见<center>',
                    style: {
                        'border-color': 'aliceblue',
                        'border-style': 'solid',
                        'border-width': '1px'
                    },
                    text: ''
                },
                {
                    xtype: 'textareafield',
                    flex: 7,
                    fieldLabel: '',
                    name: 'orgApproveSupport',
                    RemovedemptyText: '复审意见'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    flex: 1,
                    dock: 'bottom',
                    autoScroll: true,
                    layout: {
                        type: 'hbox',
                        defaultMargins: {
                            top: 0,
                            right: 200,
                            bottom: 0,
                            left: 300
                        }
                    },
                    items: [
                        {
                            xtype: 'buttongroup',
                            width: 91,
                            title: '',
                            columns: 1,
                            items: [
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '复审退回'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});