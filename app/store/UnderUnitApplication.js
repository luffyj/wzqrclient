
/**
 * 按照新需求
 * 次级管理员和申报单位 应该使用不同的Store
 * 所以这个Store定义为次级管理员专用
 * */
Ext.define('wzqr.store.UnderUnitApplication', {
    extend: 'wzqr.spring.data.Store',
    requires: [
        'wzqr.model.Org',
        'wzqr.model.User'
    ],
    model: 'wzqr.model.Application',
    pageSize: 10,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('api/application/search/findByUnitOrg')
    },
    extraModels: {
        myorg: wzqr.model.Org,
        owner: wzqr.model.User
    },
//    autoSync: true,
    autoLoad: false
});