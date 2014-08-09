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
                    text: '化学'
                },
                {
                    text: '资源环境'
                },
                {
                    text: '信息技术'
                },
                {
                    text: '生物医药'
                },
                {
                    text: '生命科学'
                },
                {
                    text: '激光与光电'
                },
                {
                    text: '工程与材料科学'
                },
                {
                    text: '文化创意'
                },
                {
                    text: '现代服务'
                },
                {
                    text: '经济与管理'
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