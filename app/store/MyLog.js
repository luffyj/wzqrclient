Ext.define('wzqr.store.MyLog', {
    extend: 'wzqr.spring.data.Store',
    requires: [
        'wzqr.model.User'
    ],
    model: 'wzqr.model.Log',
    pageSize: 10,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('log/underlogs'),
        extraParams:{
            type:'',
            roleName:'',
            time:'',
            loginName:''
        }
    },
//    extraModels: {
//        myorg: wzqr.model.Org,
//        owner: wzqr.model.User
//    },
//    autoSync: true,
    autoLoad: false
});