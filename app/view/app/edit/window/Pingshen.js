Ext.define('wzqr.view.app.edit.window.Pingshen', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditpingshen',

    requires: [
        'wzqr.view.app.edit.Submit',
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
    
    constructor: function(app) {
        this.app = app;
        //对复审已通过的重审 无法继续通过
        this.callParent();
    },

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
                            activeTab: 3,
                            items: [
                                {
                                    xtype: 'appeditsubmit',
                                    removeButtons: true
                                },
                                {
                                    xtype: 'appeditxingshen',
                                    removeButtons: true
                                },
                                {
                                    xtype: 'appeditfushen',
                                    removeButtons: true,
                                    height: 492
                                },
                                {
                                    xtype: 'appeditpingshen',
                                    nofs:me.app.get('status')==='复审通过'
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