Ext.define('wzqr.store.BorderCityStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'BorderCityStore',
            data: [
                {
                    text: '鹿城区'
                },
                {
                    text: '瓯海区'
                },
                {
                    text: '龙湾区'
                },
                {
                    text: '瑞安市'
                },
                {
                    text: '乐清市'
                },
                {
                    text: '永嘉县'
                },
                {
                    text: '洞头县'
                },
                {
                    text: '平阳县'
                },
                {
                    text: '文成县'
                },
                {
                    text: '泰顺县'
                },
                {
                    text: '苍南县'
                },
                {
                    text: '经开区'
                },{
                    text: '瓯江口新区'
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