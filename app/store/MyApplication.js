
/**
 * 我的app
 * userid
 * 申报人使用
 * */
Ext.define('wzqr.store.MyApplication', {
    extend: 'wzqr.spring.data.Store',
    requires: [
        'wzqr.model.Org',
        'wzqr.model.User'
    ],
    model: 'wzqr.model.Application',
    pageSize: 10,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('api/application/search/findByOwner')
    },
    extraModels: {
        myorg: wzqr.model.Org,
        owner: wzqr.model.User
    },
//    autoSync: true,
    autoLoad: false
});