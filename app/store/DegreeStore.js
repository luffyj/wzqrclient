Ext.define('wzqr.store.DegreeStore', {
    extend: 'Ext.data.Store',

    requires: [
        'Ext.data.Field'
    ],

    constructor: function(cfg) {
        var me = this;
        cfg = cfg || {};
        me.callParent([Ext.apply({
            storeId: 'DegreeStore',
            data: [
                {
                    text: '博士',
                    entext: 'Doctor',
                    fulltext: '博士 (Doctor)'
                },
                {
                    text: '硕士',
                    entext: 'Master',
                    fulltext: '硕士 (Master)'
                },
                {
                    text: '学士',
                    entext: 'Bachelor',
                    fulltext: '学士 (Bachelor)'
                },
                {
                    text: '其他',
                    entext: 'Other',
                    fulltext: '其他 (Other)'
                }
            ],
            fields: [
                {
                    name: 'text'
                },
                {
                    name: 'entext'
                },
                {
                    name: 'fulltext'
                }
            ]
        }, cfg)]);
    }
});