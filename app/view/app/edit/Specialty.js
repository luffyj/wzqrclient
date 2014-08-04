Ext.define('wzqr.view.app.edit.Specialty', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditspecialty',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.HtmlEditor'
    ],

    height: 424,
    width: 803,
    layout: 'border',
    title: '个人专长',
    id:'specBox',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'label',
                    dock: 'top',
                    html: '<b>个人专长：</b>请概述本人的研究领域、方向及取得的成就。填写时请客观描述，突出重点，言简意赅。请同时提供相关材料作为附件。',
                    margin: 10
                }
            ],
            items: [
                {
                    xtype: 'htmleditor',
                    region: 'center',
                    fieldLabel: '',
                    name: 'expertTo',
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
        });

        me.callParent(arguments);
    }

});