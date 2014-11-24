Ext.define('wzqr.view.app.edit.window.Xingshen', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditxingshen',
    requires: [
        'wzqr.view.app.View',
        'wzqr.view.app.edit.Submit',
        'wzqr.view.app.edit.Xingshen',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],
    ui: 'wzwindow',
    height: 589,
    width: 706,
    layout: 'fit',
    title: '形审',
    constructor: function(app) {
        this.app = app;
        this._citems = Ext.Array.push(wzqr.view.app.View.createAppInfos(app), [
            {
                xtype: 'appeditsubmit',
                removeButtons: true
            },
            {
                xtype: 'appeditxingshen',
                iscs: app.get('status') === '形审通过'
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
                    layout: 'fit',
                    bodyPadding: 0,
                    title: '',
                    items: [
                        {
                            xtype: 'tabpanel',
                            bodyPadding: 10,
                            activeTab: 4,
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
        return this.down('textarea[name=pogeReason]').getValue();
    }

});