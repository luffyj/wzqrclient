Ext.define('wzqr.view.app.edit.ResultMain', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditresultmain',

    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.HtmlEditor'
    ],

    height: 424,
    width: 803,
    autoScroll: true,
    title: '主要成果',
    id:'gainBox',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'label',
                    dock: 'top',
                    margin: 5,
                    text: '主要成果，请列出最能体现申报人水平的代表性论著(论文)，或专利，或产品，每类均不超过20项。 填写时请客观描述，突出重点，言简意赅。请同时提供相关材料作为附件。'
                }
            ],
            items: [
                {
                    xtype: 'label',
                    html: '<b>(1)代表性论著(论文)(不超过20项) </b>论著(论文)请列出日期、名称、发表载体、全部作者，通讯作者请用“*”注明；',
                    margin: 5
                },
                {
                    xtype: 'xmutliwowpanel',
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
                            title: '发表时间',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'paperTime',
                            RemovedemptyText: '请输入发表时间'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '论著（论文）名称',
                            columnWidth: 0.4,
                            fieldLabel: '',
                            name: 'paperTitle',
                            RemovedemptyText: '请输入名称'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '发表载体',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'paperMedia',
                            RemovedemptyText: '请输入发表载体'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '论著（论文）作者',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'paperAuthor',
                            RemovedemptyText: '请输入作者'
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '<b>(2)专利(不超过20项) </b>专利请列出保护期、名称、授权国家、专利所有人等；产品请标明目前的产业化程度。',
                    margin: 5
                },
                {
                    xtype: 'xmutliwowpanel',
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
                            title: '专利保护期',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'patentTime',
                            RemovedemptyText: '请输入专利保护期'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '专利名称',
                            columnWidth: 0.4,
                            fieldLabel: '',
                            name: 'patentName',
                            RemovedemptyText: '请输入专利名称'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '授权国家',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'patentCountry',
                            RemovedemptyText: '请输入授权国家'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '专利所有者',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'patentAuthor',
                            RemovedemptyText: '请输入专利所有者'
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '<b>(3)产品：</b>',
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
                            name: 'product',
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
                }
            ]
        });

        me.callParent(arguments);
    }

});