Ext.define("wzqr.view.InfoOrg", {
    extend: 'Ext.form.Panel',
    xtype: 'xinfoorg',
		cls:'baseInfor',
    title: '基本信息',
    width: 600,
    buttons: [
        {
            formBind: true,
				id:'baseSave',
            name: 'save',
            text: '保存'
        }
    ],
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: '机构名称',
            name: 'name'
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
            fieldLabel: '电话',
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