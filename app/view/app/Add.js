Ext.define("wzqr.view.app.Add", {
    extend: 'Ext.window.Window',
    requires: [
        'Ext.form.field.ComboBox',
        'Ext.form.FieldSet',
        'Ext.Date'
    ],
    xtype: 'xappadd',
		cls:'xappaddBox',
    title: '申报信息',
    width: 352,
    height: 570,
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
                    var button = form.owner.up('xappadd').down('button[name=save]');
                    if (valid) {
                        button.enable();
                    } else {
                        button.disable();
                    }
                }
            },
            xtype: 'form',
            margin: 5,
//            layout: 'form',
//            layout: {
//                type: 'form'
////                type: 'vbox',
////                align: 'stretchmax'
//            },
            items: [
                {
                    xtype: 'fieldset',
                    title: '基本信息',
//                    collapsible: true,
                    defaultType: 'textfield',
//                    defaults: {anchor: '100%'},
//                    layout: 'form',
                    items: [{
                            xtype: 'displayfield',
                            fieldLabel: '申报批次',
                            name: 'batch',
                            value: Ext.Date.format(new Date(),'Y')
                        }, {
                            xtype: 'combobox',
                            fieldLabel: '人才类型',
                            name: 'type',
                            emptyText: '请选择人才类型',
                            blankText: '请选择人才类型',
                            store: [
                                '创新人才', '创业人才'
                            ],
                            editable: false,
                            allowBlank: false
                        },
                        {
                            // 单位名称 部门类型
                            xtype: 'textfield',
                            fieldLabel: '申报单位',
                            name: 'appOrgName',
                            emptyText: '请输入单位名称',
                            blankText: '请输入单位名称',
                            //<debug>
//                    value: '中国核爆控制中心',
                            //</debug>
//                    enableKeyEvents: true,
//                    listeners: {
//                        keypress: function(text, e) {
//                            text.bySelect = false;
//                        }
//                    },
                            allowBlank: false
                        }]
                }, {
                    xtype: 'fieldset',
                    title: '申报人',
//                    collapsible: true,
                    defaultType: 'textfield',
//                    defaults: {anchor: '100%'},
//                    layout: 'form',
                    items: [{
                            xtype: 'textfield',
                            fieldLabel: '中文',
                            name: 'realName',
                            emptyText: '请输入中文名',
                            //<debug>
                            value: '蒋某某某',
                            //</debug>
                            blankText: '请输入中文名',
                            allowBlank: false
                        }, {
                            xtype: 'textfield',
                            fieldLabel: '英文',
                            name: 'realEnglishName',
                            //<debug>
                            value: '蒋某某某',
                            //</debug>
                            emptyText: '请输入英文名'
                        }]

                }, {
                    xtype: 'fieldset',
                    title: '联系方式',
//                    collapsible: true,
                    defaultType: 'textfield',
//                    defaults: {anchor: '100%'},
//                    layout: 'form',
                    items: [{
                            xtype: 'textfield',
                            fieldLabel: '联系人',
                            name: 'people',
                            emptyText: '请输入联系人'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: '手机号码',
                            name: 'mobile',
                            emptyText: '请输入手机号码'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: '办公电话',
                            name: 'phone',
                            emptyText: '请输入办公电话'
                        }]//

                }, {
                    xtype: 'fieldset',
                    title: '登录信息',
//                    collapsible: true,
//                    defaults: {anchor: '100%'},
//                    layout: 'form',
                    items: [
                        {
                            html: '注意：该账户仅用于申报人填写材料。如果单位的申报人数多，可以给每个申报人设置账号，由申报人通过该账号登录自行填写。如申报人数少，可以不设置。'
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '用户名',
                            name: 'loginName',
                            //<debug>
                            value: 'bmmm',
                            //</debug>
                            emptyText: '请输入中文名'
                        }, {
                            xtype: 'textfield',
                            fieldLabel: '密码',
                            name: 'password',
                            //<debug>
                            value: '123',
                            //</debug>
                            emptyText: '请输入密码'
                        }]
                }
            ]
        }
    ]
});