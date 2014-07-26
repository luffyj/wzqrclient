Ext.define('wzqr.view.app.edit.Fushen', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appeditfushen',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.button.Button'
    ],

    height: 287,
    width: 708,
    title: '市委组织部意见',

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
                    html: '<center>温州市委组织部意见<center>',
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
                    name: 'orgApproveReason',
                    emptyText: '复审意见'
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
                            left: 200
                        }
                    },
                    items: [
                        {
                            xtype: 'buttongroup',
                            width: 236,
                            title: '',
                            columns: 3,
                            items: [
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '复审通过'
                                },
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '复审未过'
                                },
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

        me.processAppeditFushen(me);
        me.callParent(arguments);
    },

    processAppeditFushen: function(config) {
        if(config.removeButtons){
            delete config.dockedItems;
        }
    }

});