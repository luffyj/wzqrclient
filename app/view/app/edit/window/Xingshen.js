Ext.define('wzqr.view.app.edit.window.Xingshen', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditxingshen',

    requires: [
        'wzqr.view.app.edit.Submit',
        'wzqr.view.app.edit.Xingshen',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    height: 589,
    width: 706,
    layout: 'fit',
    title: '形审',
    
    constructor: function(app) {
        this.app = app;
        //对形审已通过的重审 无法继续通过
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
                            activeTab: 1,
                            items: [
                                {
                                    xtype: 'appeditsubmit',
                                    removeButtons: true
                                },
                                {
                                    xtype: 'appeditxingshen',
                                    iscs:me.app.get('status')==='形审通过'
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
        return this.down('textarea[name=unitApproveReason]').getValue();
    }

});