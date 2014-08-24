Ext.define('wzqr.store.RegisterRequest', {
    extend: 'wzqr.spring.data.Store',
    model: 'wzqr.model.RegisterRequest',
    pageSize: 10,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('api/registerrequest/search/findBySuperOrg'),
        extraParams: {
            status: '申请',
            name: '',
            supername: ''
        }
    },
    autoLoad: false
});