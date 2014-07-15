
Ext.define('wzqr.store.User', {
    extend: 'Ext.data.Store',
    model: 'wzqr.model.User',    
    pageSize: 10,    
//    autoSync: true,
    autoLoad: false
    
});