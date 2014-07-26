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
                    entext: 'Doctor'
                },
                {
                    text: '硕士',
                    entext: 'Master'
                },
                {
                    text: '学士',
                    entext: 'Bachelor'
                },
                {
                    text: '其他',
                    entext: 'Other'
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