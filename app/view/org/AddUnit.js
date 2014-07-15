Ext.define("wzqr.view.org.AddUnit", {
    extend: 'Ext.window.Window',
    xtype: 'xorgaddunit',
    title: '添加申报单位',
    width: 295, // height/goldraid(0.618)
    height: 476,
    layout: 'fit',
    buttons: [
        {
            disabled: true,
            name: 'save',
            text: '保存'
        }
    ],
    items: [
        {
            listeners: {
                validitychange: function(form, valid) {
                    var button = form.owner.up('xorgaddunit').down('button[name=save]');
                    if (valid) {
                        button.enable();
                    } else {
                        button.disable();
                    }
                }
            },
            // height -36
            xtype: 'form',
            margin: 5,
            layout: 'form',
//            layout: {
//                type: 'form'
////                type: 'vbox',
////                align: 'stretchmax'
//            },
            items: [
                {
                    // 单位名称 部门类型
                    xtype: 'textfield',
                    fieldLabel: '单位名称',
                    name: 'name',
                    emptyText: '请输入单位名称',
                    blankText: '请输入单位名称',
                    //<debug>
                    value: '中国次级核爆控制中心',
                    //</debug>
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: '联系人姓名',
                    name: 'contact.people',
                    emptyText: '请输入联系人',
                    //<debug>
                    value: '蒋某某某',
                    //</debug>
                    blankText: '请输入联系人',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: '职务',
                    name: 'position',
                    emptyText: '请输入职务'
                }, {
                    xtype: 'textfield',
                    fieldLabel: '手机',
                    //<debug>
                    value: '057778787877',
                    //</debug>
                    name: 'contact.mobile',
                    emptyText: '请输入手机号码'
                }, {
                    xtype: 'textfield',
                    fieldLabel: '电话',
                    //<debug>
                    value: '057778787877',
                    //</debug>
                    name: 'contact.phone',
                    emptyText: '请输入联系电话'

                }, {
                    xtype: 'textfield',
                    fieldLabel: '传真',
                    //<debug>
                    value: '057778787877',
                    //</debug>
                    name: 'contact.fax',
                    emptyText: '请输入传真号码'

                }, {
                    xtype: 'textfield',
                    fieldLabel: '电子邮件',
                    //<debug>
                    value: 'luffy.ja@gmail.com',
                    //</debug>
                    name: 'contact.email',
                    vtype: 'email',
                    vtypeText: '请输入有效电子邮件地址',
                    emptyText: '请输入电子邮件地址'

                }, {
                    xtype: 'textfield',
                    fieldLabel: '联系地址',
                    //<debug>
                    value: '浙江温州',
                    //</debug>
                    name: 'contact.address',
                    emptyText: '请输入联系地址'

                }, {
                    xtype: 'textfield',
                    fieldLabel: '邮编',
                    //<debug>
                    value: '315100',
                    //</debug>
                    name: 'contact.zip',
                    emptyText: '请输入邮编'

                }, {
                    xtype: 'textarea',
                    fieldLabel: '单位介绍',
                    name: 'description',
                    emptyText: '请输入单位介绍'

                }, {
                    xtype: 'textfield',
                    fieldLabel: '用户名',
                    name: 'loginName',
                    emptyText: '请输入用户名',
                    //<debug>
                    value: 'ammm',
                    //</debug>
                    blankText: '请输入用户名',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: '密码',
                    name: 'password',
                    emptyText: '请输入密码',
                    //<debug>
                    value: '123',
                    //</debug>
                    blankText: '请输入密码',
                    allowBlank: false
                }
            ]
        }
    ]
});