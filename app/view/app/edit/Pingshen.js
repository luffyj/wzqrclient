Ext.define('wzqr.view.app.edit.Pingshen', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appeditpingshen',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.button.Button'
    ],

    height: 287,
    width: 708,
    title: '评审意见',

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
                    html: '<center>温州市委组织部评审意见<center>',
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
                    name: 'managerReason',
                    emptyText: '评审意见'
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
                            left: 250
                        }
                    },
                    items: [
                        {
                            xtype: 'buttongroup',
                            width: 168,
                            title: '',
                            columns: 2,
                            items: [
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '评审通过'
                                },
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '评审未过'
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