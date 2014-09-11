Ext.define('wzqr.view.app.edit.window.ChangePicture', {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.form.Panel',
        'Ext.form.Label',
        'Ext.form.field.Text'
    ],
    ui: 'wzwindow',
    height: 143,
    width: 400,
    layout: 'fit',
    title: '更换照片',
    xtype:'xappeditcpicture',
    constructor: function(appid) {
        this.appid = appid;
        this.callParent();
    },
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    fileUpload:true,
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype:'hiddenfield',
                            name:'id',
                            value:me.appid
                        },
                        {
                            xtype: 'filefield',
                            margin: 10,
                            width: 329,
                            fieldLabel: '照片',
                            name: 'file',
                            RemovedemptyText: '请上传你的照片',
                            buttonText: '浏览'
                        },
                        {
                            xtype: 'label',
                            margin: 10,
                            text: '注意：只允许上传图片文件'//注意：只允许上传PDF文件，大小限制50M
                        },
                        {
                            xtype: 'button',
                            name: 'upload',
                            margin: '0 0 0 20',
                            text: '上传'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});