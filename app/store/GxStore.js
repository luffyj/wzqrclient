Ext.define('wzqr.store.GxStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'GxStore',
            data: [
                {
                    text: '配偶'
                },
                {
                    text: '子女'
                },
                {
                    text: '父母'
                },
                {
                    text: '配偶父母'
                },
                {
                    text: '兄弟姐妹'
                }
            ],
            fields: [
                {
                    name: 'text'
                }
            ]
        }, cfg)]);
    }
});