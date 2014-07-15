Ext.define("wzqr.view.InfoPassword", {
    extend: 'Ext.form.Panel',
    xtype: 'xinfopassword',
    title: '用户密码',
    width: 400,
    layout: 'form',
    buttons: [
        {
            formBind: true,
            name: 'savePassword',
            text: '保存'
        }
    ],
    items: [
        {
            xtype: 'displayfield',
            fieldLabel: '用户名',
            name: 'loginName'
        }, {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: '原密码',
            name: 'oldPassword',
            emptyText: '请输入原来的密码',
            //<debug>
            value: '123',
            //</debug>
            blankText: '请输入原来的密码',
            allowBlank: false
        }, {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: '新密码',
            name: 'password',
            emptyText: '请输入新的密码',
            //<debug>
            value: '123',
            //</debug>
            blankText: '请输入新的密码',
            allowBlank: false
        }, {
            xtype: 'textfield',
            inputType: 'password',
            fieldLabel: '请确认新密码',
            name: 'cpassword',
            emptyText: '请确认新密码',
            //<debug>
            value: '123',
            //</debug>
            blankText: '请确认新密码',
            allowBlank: false
        }
    ]
});