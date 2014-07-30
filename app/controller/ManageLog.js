Ext.define('wzqr.controller.ManageLog', {
    extend: 'wzqr.controller.BaseController',
    stores: ['MyLog'],
    init: function(app) {
        this.control({
            'xlog': {
                activate: function(view) {
                    debug('激活日志');
                    this.getMyLogStore().reload();
//                    this.getUnderUserStore().proxy.extraParams = {
//                        orgid: this.getMyorg()
//                    };
//                    this.getUnderUserStore().load();
                }
            },
            'xlogselect':{
                query:function(view,form,fields){
                    debug('查询日志');
                    Ext.apply(this.getMyLogStore().proxy.extraParams,form.getValues());
                    this.getMyLogStore().reload();
                }
            }
        });
    }
});
