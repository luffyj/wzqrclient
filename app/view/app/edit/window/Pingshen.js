Ext.define('wzqr.view.app.edit.window.Pingshen', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditpingshen',

    requires: [
        'wzqr.view.app.edit.Xingshen',
        'wzqr.view.app.edit.Fushen',
        'wzqr.view.app.edit.Pingshen',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    height: 472,
    width: 706,
    layout: 'fit',
    title: '评审',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    layout: 'fit',
                    bodyPadding: 0,
                    title: '',
                    items: [
                        {
                            xtype: 'tabpanel',
                            bodyPadding: 10,
                            activeTab: 2,
                            items: [
                                {
                                    xtype: 'appeditxingshen',
                                    removeButtons: true
                                },
                                {
                                    xtype: 'appeditfushen',
                                    height: 492,
                                    removeButtons: true
                                },
                                {
                                    xtype: 'appeditpingshen'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    toReason: function() {
        return this.down('textarea[name=managerReason]').getValue();
    }

});