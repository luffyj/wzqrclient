Ext.define('wzqr.view.app.ReportType', {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.data.UuidGenerator',
        'Ext.layout.container.VBox',
        'wzqr.model.AppGroupInfo',
        'Ext.XTemplate'
    ],
    autoScroll: true,
    layout: {
        type: 'vbox',
        align: 'start'
    },
    defaults: {
        xtype: 'box',
        listeners: {
            el: {
                click: function(e, t) {
                    debug(e,t,this);
                    var box = Ext.getCmp(this.id);
                    
                }
            }
        }
    },
    constructor: function(type, datas) {
//        this._store = Ext.create('Ext.data.Store', {
//            model: 'wzqr.model.AppGroupInfo',
//            data: datas
//        });
        this._template = new Ext.Template('&nbsp;&nbsp;&nbsp;{name}({count})', {compiled: true});
        this._datas = datas;
        debug('input data', datas, this);
        switch (type) {
            case 'status':
                this.title = '按申报状态统计';
                break;
            case 'specialty':
                this.title = '按专业领域统计';
                break;
            case 'type':
                this.title = '按人才类型统计';
                break;
            case 'myorg.superOrg.type':
                this.title = '按单位性质统计';
                break;
            case 'batch':
                this.title = '按申报批次统计';
                break;
            case 'myorg.superOrg.name':
                this.title = '按管理部门统计';
                break;
            case 'myorg.name':
                this.title = '按申报单位统计';
                break;
        }
        this.callParent();
    },
    initComponent: function() {
        var me = this;

        var items = [];
        Ext.Array.each(me._datas, function(data) {
            items.push({
                //其实本身也提供了 renderTpl 和 renderData
                id:Ext.data.IdGenerator.get('uuid').generate(),
                data:data,
                html: this._template.apply(data)
            });
        }, me);

        Ext.applyIf(me, {items: items
        });

        me.callParent(arguments);
    }

});