Ext.define('wzqr.view.Log', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xlog',
    requires: [
        'wzqr.view.log.Select',
        'wzqr.view.log.Context',
        'Ext.panel.Panel'
    ],
    height: 250,
    width: 702,
    layout: 'border',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'xlogselect',
                    padding: 5,
                    style: {
                        'background-color': 'white',
                        'border-style': 'none'
                    },
                    region: 'north'
                },
                {
                    xtype: 'xlogcontext',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});