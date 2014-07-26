Ext.define('wzqr.view.app.edit.window.Fushen', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditfushen',

    requires: [
        'wzqr.view.app.edit.Xingshen',
        'wzqr.view.app.edit.Fushen',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    height: 472,
    width: 706,
    layout: 'fit',
    title: '复审',

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
                            activeTab: 1,
                            items: [
                                {
                                    xtype: 'appeditxingshen',
                                    removeButtons: true
                                },
                                {
                                    xtype: 'appeditfushen',
                                    height: 492
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
        return this.down('textarea[name=orgApproveReason]').getValue();
    }

});