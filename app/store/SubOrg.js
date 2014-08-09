
/**
 * 获取次级管理部门列表
 * */
Ext.define('wzqr.store.SubOrg', {
    extend: 'wzqr.spring.data.Store',    
    model: 'wzqr.model.Org',
    pageSize: 9999,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('api/org/search/findSubOrg')
    },
//    extraModels: {
//        manager:wzqr.model.User,
//        superOrg:wzqr.model.Org
//    },
    autoLoad: true
});