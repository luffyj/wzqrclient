Ext.define('wzqr.model.Log', {
    extend: 'wzqr.spring.data.Model',
    resourceURI: Utils.toApi('api/log'),
    fields: [
        //who
        {name: 'id', type: 'int'},
        //render data
        {name: 'loginName', type: 'string'},
        {name: 'roleInfo', type: 'string'},
        //
        //end
        {name: 'ipaddress', type: 'string'},
        {name: 'hostname', type: 'string'},
        {name: 'type', type: 'string'},
        {name: 'message', type: 'string'},
        {name: 'optime', type: 'date', dateFormat: 'time'},
        {name: 'targetpk', type: 'int'},
        {name: 'targetType', type: 'string'}
    ]
});
