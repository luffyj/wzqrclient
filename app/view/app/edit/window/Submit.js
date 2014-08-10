Ext.define('wzqr.view.app.edit.window.Submit', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditsubmit',

    requires: [
        'wzqr.view.app.edit.Submit',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    ui:'wzwindow',
    height: 589,
    width: 706,
    layout: 'fit',
    title: '上报',

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
                            items: [                      
                                {
                                    xtype: 'appeditsubmit'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});