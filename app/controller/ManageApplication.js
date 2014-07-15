Ext.define('wzqr.controller.ManageApplication', {
    extend: 'wzqr.controller.BaseController',
    views:['app.Add'],
    stores: ['UnderApplication'],
    init: function(app) {
        this.control({
            'xmanageapp button[name=addapp]':{
                click:function(button){
                    var window = this.getView('app.Add').create();
                    window.show();
                }
            },
            'xmanageapp': {
                activate: function(view) {
                    this.getUnderApplicationStore().proxy.extraParams = {
                        superid: this.getMyorg()
                    };
                    this.getUnderApplicationStore().load();
                },
                render: function(view) {
                    if (this.isPeople()) {
                        //removes
                        view.remove(view.down('xappreport'));
                        view.remove(view.down('xappselect'));

                        var xappcontext = view.down('xappcontext');
                        xappcontext.remove(xappcontext.down('button[name=export]'));
                    }

                    var buttonsPanel = view.down('panel[name=buttons]');
                    debug('buttonsPanel:', buttonsPanel);

                    if (this.isManagePeople()) {
                        buttonsPanel.add({
                            xtype: 'button',
                            margin: 5,
                            name: 'addapp',
                            text: '增加'                     
                        });
                    }
                }
            }
        });
    }
});
