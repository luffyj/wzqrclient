
/**
 * 所有app
 * 高管使用
 * */
Ext.define('wzqr.store.AllApplication', {
    extend: 'wzqr.spring.data.Store',
    requires: [
        'wzqr.model.Org',
        'wzqr.model.User'
    ],
    model: 'wzqr.model.Application',
    pageSize: 10,  
    extraModels: {
        myorg: wzqr.model.Org,
        owner: wzqr.model.User
    },
//    autoSync: true,
    autoLoad: false
});