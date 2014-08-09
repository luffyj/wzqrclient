Ext.define('wzqr.view.app.edit.Submit', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appeditsubmit',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.Checkbox',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.button.Button'
    ],

    height: 450,
    width: 697,
    title: '用人单位意见',

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
                    html: '<center>用人单位意见</center>',
                    style: {
                        'border-color': 'aliceblue',
                        'border-style': 'solid',
                        'border-width': '1px'
                    },
                    text: ''
                },
                {
                    xtype: 'container',
                    flex: 2,
                    layout: 'column',
                    items: [
                        {
                            xtype: 'label',
                            style: {
                                'font-weight': 'bolder'
                            },
                            text: '1、推荐理由'
                        },
                        {
                            xtype: 'label',
                            text: ' (请简要说明推荐申报人的主要理由，重点是申报人对本单位的不可或缺性。请注明是否破格推荐:'
                        },
                        {
                            xtype: 'checkboxfield',
                            fieldLabel: '',
                            name: 'poge',
                            boxLabel: '破格推荐'
                        },
                        {
                            xtype: 'label',
                            text: '属于破格推荐的，请同时说明理由)'
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    flex: 4,
                    fieldLabel: '',
                    name: 'submitReason',
                    RemovedemptyText: '推荐理由'
                },
                {
                    xtype: 'container',
                    flex: 2,
                    height: 58,
                    layout: 'column',
                    items: [
                        {
                            xtype: 'label',
                            style: {
                                'font-weight': 'bolder'
                            },
                            text: '3、支持措施'
                        },
                        {
                            xtype: 'label',
                            text: '（从用人单位角度，为申报人提供的工作条件，包括工作平台、职务等；以及为申报人提供的生活待遇，包括薪酬、住房等。支持条件应具体，避免笼统。）'
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    flex: 4,
                    fieldLabel: '',
                    name: 'submitSupport',
                    RemovedemptyText: '支持措施'
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
                            width: 66,
                            title: '',
                            columns: 3,
                            items: [
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '上报'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.processAppeditXingshen(me);
        me.callParent(arguments);
    },

    processAppeditXingshen: function(config) {
        if(config.removeButtons){
            delete config.dockedItems;
        }
    }

});