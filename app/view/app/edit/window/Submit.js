Ext.define('wzqr.view.app.edit.window.Submit', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditsubmit',
    requires: [
        'wzqr.view.app.View',
        'wzqr.view.app.edit.Submit',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],
    ui: 'wzwindow',
    id: 'sbdialogBox1',
    height: 589,
    width: 706,
    layout: 'fit',
    title: '上报',
    constructor: function(app) {
        this.app = app;
        this._citems = Ext.Array.push(wzqr.view.app.View.createAppInfos(app), [
            {
                xtype: 'appeditsubmit',
                id: 'sbdialogBox4'
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
                    id: 'sbdialogBox2',
                    layout: 'fit',
                    bodyPadding: 0,
                    title: '',
                    items: [
                        {
                            xtype: 'tabpanel',
                            id: 'sbdialogBox3',
                            activeTab: 3,
                            bodyPadding: 10,
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
    }

});