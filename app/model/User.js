Ext.define('wzqr.model.User', {
    extend: 'wzqr.spring.data.Model',
    resourceURI: Utils.toApi('api/user'),
    fields: [
        {name: 'id', type: 'int'},
        {name: 'loginName', type: 'string'},
        {name: 'realName', type: 'string'},
        {name: 'position', type: 'string'},
        {name: 'realEnglishName', type: 'string'},
        {name: 'enabled', type: 'boolean'},
        {name: 'lastLogin', type: 'date',dateFormat:'time'},
        {name: 'role'},
        {name: 'org'},
        {name: 'contact'}
    ]
});
