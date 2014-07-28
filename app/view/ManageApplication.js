Ext.define("wzqr.view.ManageApplication", {
    extend: 'Ext.panel.Panel',
    requires: [
        'wzqr.view.app.Context',
        'wzqr.view.app.Report',
        'wzqr.view.app.Select'
    ],
    xtype: 'xmanageapp',
    id:'xmanageappidid',
    layout: {
        type: 'border',
        regionWeights: {
            west: 20,
            north: 10,
            south: -10,
            east: -20
        }
    },
    items: [
        {
            xtype: 'xappreport',
            region: 'west'
        }, {
            xtype: 'container',
            layout: 'fit',
            padding: 5,
            style: {
                'background-color': 'white',
                'border-style': 'none'
            },
            items: {
                xtype: 'xappselect'
            },
            region: 'north'
        }, {
            xtype: 'xappcontext',
            region: 'center'
        }
    ]
});