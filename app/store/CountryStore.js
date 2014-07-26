Ext.define('wzqr.store.CountryStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'CountryStore',
            data: [
                {
                    text: '中国',
                    entext: 'China(Mainland)'
                },
                {
                    text: '阿尔巴尼亚',
                    entext: 'Albania'
                },
                {
                    text: '阿尔及利亚',
                    entext: 'Algeria'
                },
                {
                    text: '阿富汗',
                    entext: 'Afghanistan'
                },
                {
                    text: '阿根廷',
                    entext: 'Argentina'
                },
                {
                    text: '阿鲁巴',
                    entext: 'Aruba'
                },
                {
                    text: '阿曼',
                    entext: 'Oman'
                },
                {
                    text: '阿塞拜疆',
                    entext: 'Azerbaijan'
                },
                {
                    text: '埃及',
                    entext: 'Egypt'
                },
                {
                    text: '安道尔',
                    entext: 'Andorra'
                },
                {
                    text: '奥地利',
                    entext: 'Austria'
                },
                {
                    text: '巴巴多斯岛',
                    entext: 'Barbados Island'
                },
                {
                    text: '巴哈马',
                    entext: 'Bahamas'
                },
                {
                    text: '白俄罗斯',
                    entext: 'Belarus'
                },
                {
                    text: '保加利亚',
                    entext: 'Bulgaria'
                },
                {
                    text: '比利时',
                    entext: 'Belgium'
                },
                {
                    text: '法国',
                    entext: 'France'
                },
                {
                    text: '菲律宾',
                    entext: 'Philippines'
                },
                {
                    text: '刚果',
                    entext: 'Congo'
                },
                {
                    text: '古巴',
                    entext: 'Cuba'
                },
                {
                    text: '加纳',
                    entext: 'Ghana'
                },
                {
                    text: '卡塔尔',
                    entext: 'Qatar'
                },
                {
                    text: '马尔代夫',
                    entext: 'Maldives'
                }
            ],
            fields: [
                {
                    name: 'text'
                },
                {
                    name: 'entext'
                }
            ]
        }, cfg)]);
    }
});