Ext.define('wzqr.controller.LoaderController', {
    extend: 'wzqr.controller.BaseController',    
    requires:[
        'Ext.MessageBox',
        'Ext.Ajax'
    ],    
    init:function(x){
        debug('LoaderController init',x);
        this.checkAuth();
        //<debug>
        Ext.Msg.alert('警告','这里只是UI测试界面，请路过');
        //</debug>
    }
});
