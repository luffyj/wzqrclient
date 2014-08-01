Ext.define('wzqr.view.app.edit.Plan', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditplan',

    requires: [
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.form.field.HtmlEditor'
    ],

    height: 456,
    width: 846,
    title: '工作设想',

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
                            html: '工作设想(包括回国后的工作目标、主要方式、预期贡献及现有基础、团队等)<br/>Work objectives (include approaches, expected contribution, current situation, working team, etc.)',
                            margin: 10
                        }
                    ],
                    items: [
                        {
                            xtype: 'htmleditor',
                            fieldLabel: '',
                            name: 'objectives',
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
                            html: '您是否和其他任何单位签订过仍然有效的竞业禁止协议，如果有，请列出。<br/>Please specify all non-competitive agreements you signed which are still effective.',
                            margin: 10
                        }
                    ],
                    items: [
                        {
                            xtype: 'htmleditor',
                            fieldLabel: '',
                            name: 'agreement',
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