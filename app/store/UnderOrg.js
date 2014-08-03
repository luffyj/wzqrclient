
/**
 * 使用findBySuperOrg 
 * load之前必须设置extraParams
 * */
Ext.define('wzqr.store.UnderOrg', {
    extend: 'wzqr.spring.data.Store',
    requires: [
        'wzqr.model.User'
    ],
    model: 'wzqr.model.Org',
    pageSize: 10,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('api/org/search/findBySuperOrg')
    },    
//    extraModels: {
//        manager:wzqr.model.User,
//        superOrg:wzqr.model.Org
//    },
    autoLoad: false
});