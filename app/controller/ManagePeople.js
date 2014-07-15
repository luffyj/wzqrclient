Ext.define('wzqr.controller.ManagePeople', {
    extend: 'wzqr.controller.BaseController',
    stores: ['UnderUser'],
    init: function(app) {
        this.control({
            'xmanagepeople': {
                activate: function(view) {
                    this.getUnderUserStore().proxy.extraParams = {
                        orgid: this.getMyorg()
                    };
                    this.getUnderUserStore().load();
                }
            }
        });
    }
});
