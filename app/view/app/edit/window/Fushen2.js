Ext.define('wzqr.view.app.edit.window.Fushen2', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditfushen2',
    requires: [
        'wzqr.view.app.View',
        'wzqr.view.app.edit.Submit',
        'wzqr.view.app.edit.Xingshen',
        'wzqr.view.app.edit.Fushen2',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],
    ui: 'wzwindow',
    id: 'fs2dialogBox1',
    height: 472,
    width: 706,
    layout: 'fit',
    title: '复审',
    constructor: function(app) {
        this.app = app;
        this._citems = Ext.Array.push(wzqr.view.app.View.createAppInfos(app), [
            {
                xtype: 'appeditsubmit',
                id: 'fs2dialogBox4',
                removeButtons: true
            },
            {
                xtype: 'appeditxingshen',
                id: 'fs2dialogBox5',
                removeButtons: true
            },
            {
                xtype: 'appeditfushen2',
                id: 'fs2dialogBox6'
            }
        ]);
        this.callParent();
    },
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    id: 'fs2dialogBox2',
                    layout: 'fit',
                    bodyPadding: 0,
                    title: '',
                    items: [
                        {
                            xtype: 'tabpanel',
                            id: 'fs2dialogBox3',
                            bodyPadding: 10,
                            activeTab: 5,
                            items: me._citems
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);

        Ext.Array.each(Ext.ComponentQuery.query('xmutliwowpanel', me), function(view) {
            view.beforeLoadRecord(this.app);
        }, me);

        me.down('form').loadRecord(me.app);
    },
    toReason: function() {
        return this.down('textarea[name=orgApproveSupport]').getValue();
    }

});