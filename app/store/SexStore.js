Ext.define('wzqr.store.SexStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'SexStore',
            data: [
                {
                    value: 0,
                    name: '男'
                },
                {
                    value: 1,
                    name: '女'
                }
            ],
            fields: [
                {
                    name: 'value'
                },
                {
                    name: 'name'
                }
            ]
        }, cfg)]);
    }
});