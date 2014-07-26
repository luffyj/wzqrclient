Ext.define('wzqr.view.app.edit.window.ChangeOwner', {
    extend: 'Ext.window.Window',

    requires: [        
        'Ext.form.Panel',
        'Ext.form.Label',
        'Ext.form.field.Text'
    ],

    height: 173,
    width: 739,
    layout: 'fit',
    title: '申报人个人账号编辑',
    xtype:'xappeditcowner',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    bodyPadding: 10,
                    title: '',
                    layout: {
                        type: 'table',
                        columns: 2,
                        tableAttrs: {
                            style: {
                                width: '100%'
                            },
                            wzform: 1
                        }
                    },
                    buttons:[
                        {
                            text:'保存',
                            name:'save',
                            formBind:true
                        }
                    ],
                    items: [
                        {
                            xtype: 'tlabel',
                            text: '登录账号'
                        },
                        {
                            xtype: 'container',
                            cellCls: 'wzformborder',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            name:'username',
                                            allowBlank:false,
                                            blankText:'请输入登录名',
                                            emptyText:'请输入登录名',
                                            fieldLabel: ''
                                        },
                                        {
                                            xtype: 'label',                                            
                                            text: ''
                                        }
                                    ]
                                },
                                {
                                    xtype: 'label',
                                    text: '同一个登录账户可以关联多个申报信息'
                                }
                            ]
                        },
                        {
                            xtype: 'tlabel',
                            text: '登录密码'
                        },
                        {
                            xtype: 'container',
                            cellCls: 'wzformborder',
                            items: [
                                {
                                    xtype: 'container',
                                    layout: 'column',
                                    items: [
                                        {
                                            xtype: 'textfield',
                                            fieldLabel: '',
                                            inputType: 'password',
                                            emptyText:'请输入密码',
                                            name:'password'
                                        },
                                        {
                                            xtype: 'label',
                                            text: ''
                                        }
                                    ]
                                },
                                {
                                    xtype: 'label',
                                    text: '为了保证信息安全，请使用6-16个字符数字混合的较复杂的密码，不要使用“111111”、“123456”等过于简单的密码'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});