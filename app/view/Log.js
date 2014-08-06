Ext.define('wzqr.view.Log', {
    extend: 'Ext.panel.Panel',
		cls:'contrxLog',
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
						id:'logForm',
                    padding: 5,
                    style: {
                        'background-color': 'white',
                        'border-style': 'none'
                    },
                    region: 'north'
                },
                {
                    xtype: 'xlogcontext',
						id:'logCent',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});