Ext.define('wzqr.view.app.edit.window.Pingshen', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditpingshen',
    requires: [
        'wzqr.view.app.View',
        'wzqr.view.app.edit.Submit',
        'wzqr.view.app.edit.Xingshen',
        'wzqr.view.app.edit.Fushen',
        'wzqr.view.app.edit.Pingshen',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],
    ui: 'wzwindow',
    id: 'psdialogBox1',
    height: 472,
    width: 706,
    layout: 'fit',
    title: '评审',
    constructor: function(app) {
        this.app = app;
        this._citems = Ext.Array.push(wzqr.view.app.View.createAppInfos(app), [
            {
                xtype: 'appeditsubmit',
                id: 'psdialogBox4',
                removeButtons: true
            },
            {
                xtype: 'appeditxingshen',
                id: 'psdialogBox5',
                removeButtons: true
            },
            {
                xtype: 'appeditfushen',
                id: 'psdialogBox6',
                removeButtons: true,
                height: 492
            },
            {
                xtype: 'appeditpingshen',
                id: 'psdialogBox7',
                nofs: app.get('status') === '复审通过'
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
                    id: 'psdialogBox2',
                    layout: 'fit',
                    bodyPadding: 0,
                    title: '',
                    items: [
                        {
                            xtype: 'tabpanel',
                            id: 'psdialogBox3',
                            bodyPadding: 10,
                            activeTab: 6,
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
        return this.down('textarea[name=managerReason]').getValue();
    }

});