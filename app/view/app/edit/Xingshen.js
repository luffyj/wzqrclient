Ext.define('wzqr.view.app.edit.Xingshen', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.appeditxingshen',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.Checkbox',
        'Ext.form.field.TextArea',
        'Ext.toolbar.Toolbar',
        'Ext.container.ButtonGroup',
        'Ext.button.Button'
    ],

    height: 412,
    width: 697,
    title: '管理部门审核意见',

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
                    html: '<center>主管部门、各县（市、区）委组织部或省、市属单位推荐意见</center>',
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
                            text: '1、对申报材料的审核意见'
                        },
                        {
                            xtype: 'label',
                            text: '(请注明是否破格推荐'
                        },
                        {
                            xtype: 'label',
                            text: '属于破格推荐的，请同时说明理由)'
                        },
                        {
                            xtype: 'label',
                            text: '属于破格推荐的，由相关主管部门或省部属单位填写是否同意破格的意见。'
                        },
                        {
                            xtype: 'checkboxfield',
                            fieldLabel: '',
                            name: 'poge',
                            boxLabel: '破格推荐'
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    flex: 4,
                    fieldLabel: '',
                    name: 'pogeReason',
                    RemovedemptyText: '对申报材料的审核意见'
                },
                {
                    xtype: 'container',
                    flex: 1,
                    layout: 'column',
                    items: [
                        {
                            xtype: 'label',
                            style: {
                                'font-weight': 'bolder'
                            },
                            text: '2、推荐理由'
                        },
                        {
                            xtype: 'label',
                            text: '（从主管部门的角度，提出推荐理由。）'
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    flex: 4,
                    fieldLabel: '',
                    name: 'unitApproveReason',
                    RemovedemptyText: '推荐理由'
                },
                {
                    xtype: 'container',
                    flex: 1,
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
                            text: '（各市主管部门、市里和省部属单位对申报人选的支持措施。）'
                        }
                    ]
                },
                {
                    xtype: 'textareafield',
                    flex: 4,
                    fieldLabel: '',
                    name: 'unitApproveSupport',
                    RemovedemptyText: '支持措施'
                }
            ],
            dockedItems: [
                {
                    xtype: 'toolbar',
                    dock: 'bottom',
                    flex: 1,
                    autoScroll: true,
                    layout: {
                        type: 'hbox',
                        defaultMargins: {
                            top: 0,
                            right: 200,
                            bottom: 0,
                            left: me.iscs?250:200
                        }
                    },
                    items: [
                        {
                            xtype: 'buttongroup',
                            width: me.iscs?168:236,
                            title: '',
                            columns: me.iscs?2:3,
                            items: me.iscs?[                                
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '形审未过'
                                },
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '形审退回'
                                }
                            ]:[
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '形审通过'
                                },
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '形审未过'
                                },
                                {
                                    xtype: 'button',
                                    actionButton: true,
                                    text: '形审退回'
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