Ext.define('wzqr.view.app.ReportType', {
    extend: 'Ext.panel.Panel',
    requires: [
        'wzqr.model.AppGroupInfo',
        'Ext.view.View',
        'Ext.XTemplate'
    ],
    layout: 'fit',
    constructor: function(type, datas) {
        this._store = Ext.create('Ext.data.Store', {
            model: 'wzqr.model.AppGroupInfo',
            data: datas
        });
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

        Ext.applyIf(me, {items: [{
                    xtype: 'dataview',
                    store: me._store,
                    height: 250,
                    width: 400,
                    itemSelector: 'div',
//                    tpl: [''],
                    itemTpl: [
                        '<tpl for=".">',
                        '&nbsp;&nbsp;&nbsp;{name}({count})',
                        '</tpl>'
                    ],
                    listeners: {
                        afterrender: function(view) {
                            debug('refresh view',view);
                            //,view.store.getTotalCount()-1
                            view.updateIndexes(0);
                        }
                    }
                }]
        });

        me.callParent(arguments);
//        me.down('dataview').bindStore(me._store);
//        me.down('dataview').refresh();
    }

});