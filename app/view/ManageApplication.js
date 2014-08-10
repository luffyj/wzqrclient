Ext.define("wzqr.view.ManageApplication", {
    extend: 'Ext.panel.Panel',
    requires: [
        'wzqr.view.app.Context',
        'wzqr.view.app.Report',
        'wzqr.view.app.Select'
    ],
    xtype: 'xmanageapp',
    id: 'xmanageappidid',
    layout: {
        type: 'border',
        regionWeights: {
            west: 20,
            north: 10,
            south: -10,
            east: -20
        }
    },
    initComponent: function() {
        var me = this;
        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'xappreport',
                    id: 'leftBox',
                    region: 'west'
                }, {
                    xtype: 'container',
                    id: 'contaiBox',
                    layout: 'fit',
                    padding: 5,
                    style: {
                        'background-color': 'white',
                        'border-style': 'none'
                    },
                    items: {
                        xtype: 'xappselect',
                        id: 'xappsele',
                        currentUser:me.currentUser
                    },
                    region: 'north'
                }, {
                    xtype: 'xappcontext',
                    id: 'txtBox',
                    region: 'center'
                }
            ]
        });
        
        me.callParent(arguments);
    }
});