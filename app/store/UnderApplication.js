
Ext.define('wzqr.store.UnderApplication', {
    extend: 'wzqr.spring.data.Store',
    requires: [
        'wzqr.model.User'
    ],
    model: 'wzqr.model.Application',
    pageSize: 10,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('api/application/search/findBySuperOrg')
    },
    extraModels: {
        owner: wzqr.model.User
    },
//    autoSync: true,
    autoLoad: false
});