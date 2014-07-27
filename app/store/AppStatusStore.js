Ext.define('wzqr.store.AppStatusStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'AppStatusStore',
            data: [
                {
                    text: '未上报'
                },
                {
                    text: '等待形审'
                },
                {
                    text: '形审未过'
                },
                {
                    text: '形审退回'
                },
                {
                    text: '形审通过'
                },
                {
                    text: '复审未过'
                },
                {
                    text: '复审退回'
                },
                {
                    text: '复审通过'
                },
                {
                    text: '评审未过'
                },
                {
                    text: '评审通过'
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