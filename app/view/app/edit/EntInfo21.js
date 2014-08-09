Ext.define('wzqr.view.app.edit.EntInfo21', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditentinfo21',
    requires: [
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.form.field.HtmlEditor'
    ],
    id:'winforxappeditentinfo21',
    height: 456,
    width: 846,
    title: '技术团队',
    layout: 'fit',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
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
        });

        me.callParent(arguments);
    }

});