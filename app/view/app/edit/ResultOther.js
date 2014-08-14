Ext.define('wzqr.view.app.edit.ResultOther', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditresultother',

    requires: [
        'Ext.form.Label',
        'Ext.form.field.HtmlEditor'
    ],

    height: 424,
    width: 803,
    layout: 'border',
    title: '其他成果',
    id:'otherBox',
    bodyPadding:10,

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'label',
                    dock: 'top',
                    html: '其他(包括获得的重要奖项、在国际学术组织兼职、在国际会议做重要报告等情况)。填写时请客观描述，突出重点，言简意赅。请同时提供相关材料作为附件。 <br/>Others (including important awards, part-time positions in international organizations, lectures delivered in international academic conferences)',
                    margin: 10
                }
            ],
            items: [
                {
                    xtype: 'htmleditor',
                    region: 'center',
                    fieldLabel: '',
                    name: 'otherProduct',
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