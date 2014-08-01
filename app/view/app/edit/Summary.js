Ext.define("wzqr.view.app.edit.Summary", {
    extend: 'Ext.panel.Panel',
    xtype: 'xappeditsummary',
    title: '汇总信息',
    requires: [
        'Ext.view.View',
        'Ext.XTemplate'
    ],
    height: 250,
    width: 400,
    layout: 'fit',
//    title: 'My Panel',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'dataview',
                    itemSelector: 'div',
                    itemTpl: [
                        'Data View Item {text}'
                    ],
                    store: 'CountryStore',
                    listeners: {
                        itemclick: function(view, record) {
                            debug('click record');
                        }
                    }
                }
            ]
        });

        me.callParent(arguments);
    }
});