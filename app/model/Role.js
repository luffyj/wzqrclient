Ext.define('wzqr.model.Role', {
    extend: 'wzqr.spring.data.Model',
    resourceURI: Utils.toApi('api/role'),
    fields: [
        {name: 'id', type: 'int'},
        {name: 'name', type: 'string'},
        {name: 'description', type: 'string'},
        {name: 'authorities', type: 'string'}
    ],
    hasAuthority: function(auth) {
        return Ext.Array.some(this.get('authorities').split(','), function(str) {
            return str === auth;
        });
    }
});
