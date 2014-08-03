Ext.define('wzqr.view.app.edit.EntInfo2', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditentinfo2',

    requires: [
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.form.field.HtmlEditor'
    ],

    height: 456,
    width: 846,
    title: '企业发展优势和前景',

    layout: {
        type: 'vbox',
        align: 'stretch',
        pack: 'center'
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    flex: 1,
                    layout: 'fit',
                    dockedItems: [
                        {
                            xtype: 'label',
                            dock: 'top',
                            html: '<b>1、技术团队和管理团队。</b>',
                            margin: 10
                        }
                    ],
                    items: [
                        {
                            xtype: 'htmleditor',
                            fieldLabel: '',
                            name: 'entTeam',
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
                    flex: 1,
                    layout: 'fit',
                    dockedItems: [
                        {
                            xtype: 'label',
                            dock: 'top',
                            html: '<b>2、创业项目。</b>',
                            margin: 10
                        }
                    ],
                    items: [
                        {
                            xtype: 'htmleditor',
                            fieldLabel: '',
                            name: 'entProject',
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
                    flex: 1,
                    layout: 'fit',
                    dockedItems: [
                        {
                            xtype: 'label',
                            dock: 'top',
                            html: '<b>3、市场背景。</b>',
                            margin: 10
                        }
                    ],
                    items: [
                        {
                            xtype: 'htmleditor',
                            fieldLabel: '',
                            name: 'entPlan',
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