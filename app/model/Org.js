Ext.define('wzqr.model.Org', {
    extend: 'wzqr.spring.data.Model',
    resourceURI:Utils.toApi('api/org'),
//    proxy: {
//        type: 'springrest',
//        reader: 'json',
//        write: 'json',
//        url: Utils.toApi('api/org')
//    },
    fields: [        
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'subType', type: 'string'},
        {name: 'contact'}, //, type: 'contactWay'
        {name: 'superOrg'},
        {name: 'manager'},
        {name: 'description', type: 'string'}
    ]
//    ,
//    associations: [{ type: 'hasOne', model: 'wzqr.model.Org',name:'superOrg' }]
//    ,
//    associations: [{type: 'hasOne', model: 'wzqr.model.ContactWay', name: 'contact'}]
});
