Ext.define('wzqr.view.rr.Index', {
    extend: 'Ext.panel.Panel',
    cls: 'contrxLog',
    alias: 'widget.xrrindex',
    requires: [
        'wzqr.view.rr.Select',
        'wzqr.view.rr.Context'
    ],
    height: 250,
    width: 702,
    layout: 'border',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'xrrselect',
                    id: 'rrForm',
                    padding: 5,
                    style: {
                        'background-color': 'white',
                        'border-style': 'none'
                    },
                    region: 'north'
                },
                {
                    xtype: 'xrrcontext',
                    id: 'rrCent',
                    region: 'center'
                }
            ]
        });

        me.callParent(arguments);
    }

});