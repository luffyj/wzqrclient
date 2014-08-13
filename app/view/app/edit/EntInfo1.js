Ext.define('wzqr.view.app.edit.EntInfo1', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditentinfo1',

    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Number'
    ],

    height: 424,
    width: 803,
    autoScroll: true,
    title: '企业发展情况',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    html: '<b>1、企业基本情况。（包括公司设立时间、主营业务、企业创办人、特别说明目前实际到位资金情况等）</b>',
                    margin: 5
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: '',
                    items: [
                        {
                            xtype: 'htmleditor',
                            fieldLabel: '',
                            name: 'entInfo',
                            fontFamilies: [
                                '宋体',
                                '微软雅黑',
                                '楷体',
                                '隶书',
                                '仿宋体',
                                '新宋体',
                                'Arial',
                                'Courier New',
                                'Tahoma',
                                'Times New Roman',
                                'Verdana'
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    autoScroll: true,
						margin:'10 0',
                    layout: 'column',
                    items: [
                        {
                            xtype: 'label',
                            text: '企业目前实际到位资金'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: '',
                            name: 'actualCurrentFunds',
                            allowBlank: false,
                            blankText: '请输入目前到位资金',
                            RemovedemptyText: '请输入目前到位资金',
                            decimalPrecision: 3
                        },
                        {
                            xtype: 'label',
                            text: '万元，占注册资本：'
                        },
                        {
                            xtype: 'numberfield',
                            width: 74,
                            fieldLabel: '',
                            name: 'actualCurrentFundsPer',
                            allowBlank: false,
                            blankText: '百分比',
                            RemovedemptyText: '百分比',
                            decimalPrecision: 3,
                            maxValue: 100,
                            minValue: 0
                        },
                        {
                            xtype: 'label',
                            text: '%'
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '<b> 2、资本构成和股权结构。（请特别说明申报人的股权情况。技术团队和管理团队）</b>',
                    margin: 5
                },
                {
                    xtype: 'xmutliwowpanel',
						id:'wwowpanPan',
						cls:'wdialogInpBox',
                    maxRows: 20,
                    padding: 2,
                    layout: 'column',
                    bodyPadding: '',
                    title: '',
                    baseFields: [
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '投资者姓名',
                            columnWidth: 0.15,
                            fieldLabel: '',
                            name: 'partnerName',
                            RemovedemptyText: '请输入投资者姓名'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '投资额',
                            columnWidth: 0.175,
                            fieldLabel: '',
                            name: 'partnerContent',
                            RemovedemptyText: '请输入投资额'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '出资方式',
                            columnWidth: 0.175,
                            fieldLabel: '',
                            name: 'partnerType',
                            RemovedemptyText: '请输入出资方式'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '占总股本比例%',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'partnerPer',
                            RemovedemptyText: '请输入占资比例'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '在公司担任职务',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'partnerPosition',
                            RemovedemptyText: '请输入职务'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    autoScroll: true,
						margin:'10 0',
                    layout: 'column',
                    items: [
                        {
                            xtype: 'label',
                            text: '自有资金（含技术入股）或跟进的风险投资占创业投资的'
                        },
                        {
                            xtype: 'numberfield',
                            width: 74,
                            fieldLabel: '',
                            name: 'myFundsPer',
                            allowBlank: false,
                            blankText: '百分比',
                            RemovedemptyText: '百分比',
                            decimalPrecision: 3,
                            maxValue: 100,
                            minValue: 0
                        },
                        {
                            xtype: 'label',
                            text: '%，投入企业实收资金'
                        },
                        {
                            xtype: 'numberfield',
                            fieldLabel: '',
                            name: 'actualFunds',
                            allowBlank: false,
                            blankText: '请输入实收资金',
                            RemovedemptyText: '请输入实收资金',
                            decimalPrecision: 3
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});