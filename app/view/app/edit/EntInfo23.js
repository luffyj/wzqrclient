Ext.define('wzqr.view.app.edit.EntInfo23', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditentinfo23',
    requires: [
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.form.field.HtmlEditor'
    ],
    id:'winforxappeditentinfo23',
    height: 456,
    width: 846,
    title: '市场背景',
    layout: 'fit',
    bodyPadding:10,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
        });

        me.callParent(arguments);
    }

});