Ext.define('wzqr.view.app.edit.window.Fushen', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditfushen',
    requires: [
        'wzqr.view.app.View',
        'wzqr.view.app.edit.Submit',
        'wzqr.view.app.edit.Xingshen',
        'wzqr.view.app.edit.Fushen',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],
    ui: 'wzwindow',
    id: 'fsdialogBox1',
    height: 472,
    width: 706,
    layout: 'fit',
    title: '复审',
    
    constructor: function(app) {
        this.app = app;
        this._citems = Ext.Array.push(wzqr.view.app.View.createAppInfos(app), [
            {
                xtype: 'appeditsubmit',
                id: 'fsdialogBox4',
                removeButtons: true
            },
            {
                xtype: 'appeditxingshen',
                id: 'fsdialogBox5',
                removeButtons: true
            },
            {
                xtype: 'appeditfushen',
                id: 'fsdialogBox6',
                iscs: app.get('status') === '复审通过',
                height: 492
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
                    id: 'fsdialogBox2',
                    layout: 'fit',
                    bodyPadding: 0,
                    title: '',
                    items: [
                        {
                            xtype: 'tabpanel',
                            id: 'fsdialogBox3',
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
        return this.down('textarea[name=orgApproveReason]').getValue();
    }

});