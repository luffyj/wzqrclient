
Ext.define('wzqr.store.Application', {
    extend: 'Ext.data.Store',
    model: 'wzqr.model.Application',    
    pageSize: 10,    
//    autoSync: true,
    autoLoad: false
    
});