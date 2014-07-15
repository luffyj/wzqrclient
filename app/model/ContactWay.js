Ext.define('wzqr.model.ContactWay', {
    extend: 'Ext.data.Model',
    fields: [
        {name: 'email', type: 'string'},
        {name: 'address', type: 'string'},
        {name: 'phone', type: 'string'},
        {name: 'mobile', type: 'string'},
        {name: 'zip', type: 'string'},
        {name: 'people', type: 'string'},
        {name: 'fax', type: 'string'}
    ]
});

Ext.require('Ext.data.Types', function() {
    Ext.data.Types.CONTACTWAY = {
        convert: function(v, data) {
            return Ext.create('wzqr.model.ContactWay', v);
        },
//    sortType: function(v) {
//        return v.Latitude;  // When sorting, order by latitude
//    },
        type: 'contactWay'
    };
});

