Ext.define("wzqr.view.app.Context", {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check',
        'Ext.grid.Panel',
        'wzqr.spring.grid.Panel'
    ],
    xtype: 'xappcontext',
    layout: 'fit',
    dockedItems: [
        {
            dock: 'top',
            xtype: 'panel',
            items: [
                {
                    xtype: 'button',
                    margin: 5,
                    name: 'export',
                    text: '导出汇总表'
                }
            ]

        }
    ],
    items: [
        {
            xtype: 'jcgrid',
            store: 'UnderOrg',
            viewConfig: {
                stripeRows: true
            },
            columnLines: true,
            columns: [
                {text: '序号', xtype: 'rownumberer', width: 80},
                {text: '申报人', dataIndex: 'owner.realName', flex: 1},
                {text: '审批批次', dataIndex: 'batch', flex: 1},
                {text: '人才类型', flex: 1, dataIndex: 'type'},
                {text: '专业领域', flex: 2, dataIndex: 'profession'},
                {text: '申报单位名称', flex: 3, dataIndex: 'profession'},
                {text: '申报状态', flex: 1, dataIndex: 'status'},
                {text: '操作', flex: 1, dataIndex: 'status'}
            ],
            dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: 'UnderOrg',
                    dock: 'bottom',
                    displayInfo: true
                }],
            height: 300
        }
    ]

});