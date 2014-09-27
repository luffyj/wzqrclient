Ext.define('wzqr.controller.RegisterRequest', {
    extend: 'wzqr.controller.BaseController',
    stores: ['RegisterRequest'],
    //resultregister
    doResultRegister: function(id, ok) {
        Utils.startLoading();
        Ext.Ajax.request({
            scope: this,
            url: Utils.toApi('resultregister'),
            params: {
                target: id,
                ok: ok
            },
            callback: function(options, success, response) {
                Utils.stopLoading();
                var data = Utils.extraResponseData(response);
                data.alert();
                this.getRegisterRequestStore().reload();
            }
        });
    },
    init: function(app) {
        this.control({
            'xrrindex jcgridview': {
                actionyes: function(grid, record, rowIndex, colIndex, row, item, e) {
                    Ext.Msg.confirm('请确认', '确实要通过这个注册请求么？', function(bt) {
                        if (bt === 'yes') {
                            this.doResultRegister(record.getId(), true);
                        }
                    }, this);
                },
                actionno: function(grid, record, rowIndex, colIndex, row, item, e) {
                    Ext.Msg.confirm('请确认', '确实要拒绝这个注册请求么？', function(bt) {
                        if (bt === 'yes') {
                            this.doResultRegister(record.getId(), false);
                        }
                    }, this);
                }
            },
            'xrrindex': {
                activate: function(view) {
                    debug('激活RR');
                    this.getRegisterRequestStore().proxy.extraParams = {
                        supername: this.getMyorgModel().get('name'),
                        name:'',
                        status:''
                    };
                    this.getRegisterRequestStore().reload();
                }
            },
            'xrrselect': {
                query: function(view, form, fields) {
                    debug('查询RR');
                    Ext.apply(this.getRegisterRequestStore().proxy.extraParams, form.getValues());
                    this.getRegisterRequestStore().reload();
                }
            }
        });
    }
});
