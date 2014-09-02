Ext.define("wzqr.view.SetPassword", {
    extend: 'Ext.window.Window',
    requires: ['Ext.form.field.Hidden'],
    xtype: 'xsetpassword',
//    title: '更改密码',
    width: 220, // height/goldraid(0.618)
    height: Ext.isIE ? 136 : 136,
//    html:'???'
    layout: 'fit',
    buttons: [
        {
            disabled: true,
            name: 'save',
            text: '确定'
        }
    ],
    constructor: function(username) {
        this.username = username;
        this.callParent();
    },
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            title:'更改'+me.username+'的密码',
            items: [
                {
                    listeners: {
                        validitychange: function(form, valid) {
                            var button = form.owner.up('xsetpassword').down('button[name=save]');
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
                    items: [
                        {
                            xtype:'hiddenfield',
                            name: 'user',
                            value: me.username
                        },
                        {
                            xtype: 'textfield',
                            fieldLabel: '新密码',
                            name: 'password',
                            emptyText: '请输入新密码',
                            //<debug>
                            value: '123',
                            //</debug>
                            blankText: '请输入新密码',
                            allowBlank: false
                        }
                    ]
                }
            ]});
        me.callParent(arguments);
    }
});