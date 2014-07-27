Ext.define('wzqr.store.SpecialtyStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'SpecialtyStore',
            data: [
                {
                    text: '数理科学'
                },
                {
                    text: '经济与管理'
                },
                {
                    text: '人文社科'
                },
                {
                    text: '文艺创作'
                },
                {
                    text: '文化创意和文化产业经营管理人才'
                },
                {
                    text: '现代传媒人才'
                },
                {
                    text: '网络新技术人才'
                },
                {
                    text: '经济金融管理'
                },
                {
                    text: '风险投资'
                },
                {
                    text: '国际商贸'
                },
                {
                    text: '化学'
                },
                {
                    text: '环境与地球科学'
                },
                {
                    text: '信息科学'
                },
                {
                    text: '工程与材料科学'
                },
                {
                    text: '生命科学'
                },
                {
                    text: '其他'
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