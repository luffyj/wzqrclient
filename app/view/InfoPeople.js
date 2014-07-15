Ext.define("wzqr.view.InfoPeople", {
    extend: 'Ext.form.Panel',
    xtype:'xinfopeople',
    title: '基本信息',
    width: 400,
    buttons: [
        {
            formBind: true,
            name: 'save',
            text: '保存'
        }
    ],
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: '申报人（中文）',
            name: 'realName'
        },{
            xtype: 'displayfield',
            fieldLabel: '申报人（英文）',
            name: 'realEnglishName'
        }, {
            xtype: 'textfield',
            fieldLabel: '联系人姓名',
            name: 'people',
            emptyText: '请输入联系人姓名'
        }, {
            xtype: 'textfield',
            fieldLabel: '手机',
            name: 'mobile',
            emptyText: '请输入手机号码'
        }, {
            xtype: 'textfield',
            fieldLabel: '办公电话',
            name: 'phone',
            emptyText: '请输入电话号码'
        }, {
            xtype: 'textfield',
            fieldLabel: '传真',
            name: 'fax',
            emptyText: '请输入传真号码'
        }, {
            xtype: 'textfield',
            fieldLabel: '邮编',
            name: 'zip',
            emptyText: '请输入邮编'
        }, {
            xtype: 'textfield',
            fieldLabel: '电子邮件',
            vtype: 'email',
            vtypeText: '请输入有效电子邮件地址',
            name: 'email',
            emptyText: '请输入电子邮件'
        }, {
            xtype: 'textfield',
            fieldLabel: '联系地址',
            name: 'address',
            emptyText: '请输入联系地址'
        }
    ]
});