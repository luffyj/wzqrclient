Ext.define('wzqr.view.app.edit.EntInfo22', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditentinfo22',
    requires: [
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.form.field.HtmlEditor'
    ],
    id:'winforxappeditentinfo22',
    height: 456,
    width: 846,
    title: '创业项目',
    layout: 'fit',
    bodyPadding:10,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
        });

        me.callParent(arguments);
    }

});