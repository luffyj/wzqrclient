Ext.define('wzqr.view.app.edit.Attach', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditattach',

    requires: [
        'Ext.form.field.File',
        'Ext.form.Label',
        'Ext.button.Button'
    ],

    height: 250,
    width: 674,
    title: '附件',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'filefield',
                    margin: 10,
                    width: 329,
                    fieldLabel: '附件',
                    name: 'file',
                    emptyText: '请上传你的附件',
                    buttonText: '浏览'
                },
                {
                    xtype: 'label',
                    margin: 10,
                    text: '注意：只允许上传PDF文件，大小限制50M'
                },
                {
                    xtype: 'button',
                    name: 'upload',
                    margin: '0 0 0 20',
                    text: '上传'
                },
                {
                    xtype: 'button',
                    name: 'download',
                    margin: '0 0 0 20',
                    text: '查看当前附件'
                }
            ]
        });

        me.callParent(arguments);
    }

});