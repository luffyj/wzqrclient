Ext.define('wzqr.controller.LoaderController', {
    extend: 'wzqr.controller.BaseController',    
    requires:[
        'Ext.Ajax'
    ],    
    init:function(x){
        debug('LoaderController init',x);
        this.checkAuth();
    }
});
