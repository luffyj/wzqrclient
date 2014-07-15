Ext.define('wzqr.model.Application', {
    extend: 'wzqr.spring.data.Model',
    resourceURI: Utils.toApi('api/application'),
    fields: [
        {name: 'id', type: 'int'},
        {name: 'batch', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'profession', type: 'string'}
    ]
});
