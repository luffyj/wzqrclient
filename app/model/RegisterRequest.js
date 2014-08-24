Ext.define('wzqr.model.RegisterRequest', {
    extend: 'wzqr.spring.data.Model',
    resourceURI: Utils.toApi('api/registerrequest'),
    fields: [
        {name: 'id', type: 'int'},
        {name: 'status', type: 'string'},
        {name: 'reason', type: 'string'},        
        {name: 'superOrgName', type: 'string'},
        {name: 'createDate', type: 'date', dateFormat: 'time'},
        {name: 'changeDate', type: 'date', dateFormat: 'time'},
        {name: 'bean'} //, type: 'contactWay'
    ]
});
