Ext.define('wzqr.view.app.ReportType', {
    extend: 'Ext.panel.Panel',
    requires: [
        'wzqr.model.AppGroupInfo',
        'Ext.view.View',
        'Ext.XTemplate'
    ],
    layout: 'fit',
    constructor: function(type, datas) {
        this.store = Ext.create('Ext.data.Store', {
            model: 'wzqr.model.AppGroupInfo',
            data: datas
        });
        debug('input data', datas, this);
        switch (type) {
            case 'status':
                this.title = '按状态统计';
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
                this.title = '按批次统计';
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
                    store: me.store,
                    height: 250,
                    width: 400,
                    itemSelector: 'div',
                    tpl: [''],
                    itemTpl: [
                        '&nbsp;&nbsp;&nbsp;{name}({count})'
                    ]
                }]
        });

        me.callParent(arguments);
    }

});