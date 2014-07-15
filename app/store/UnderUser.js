
/**
 * 使用findBySuperOrg 
 * load之前必须设置extraParams
 * */
Ext.define('wzqr.store.UnderUser', {
    extend: 'wzqr.spring.data.Store',
    requires: [
        'wzqr.model.Org'
    ],
    model: 'wzqr.model.User',
    pageSize: 10,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('api/user/search/findByOrg')
    },
    extraModels: {
//        org: wzqr.model.Org
    },
    autoLoad: false
});