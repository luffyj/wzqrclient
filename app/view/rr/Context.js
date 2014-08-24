Ext.define("wzqr.view.rr.Context", {
    extend: 'wzqr.spring.grid.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check'
    ],
    xtype: 'xrrcontext',
    store: 'RegisterRequest',
    viewConfig: {
        stripeRows: true
    },
    columnLines: true,
    columns: [
        {text: '序号', xtype: 'rownumberer'},
        {text: '状态', flex: 1, dataIndex: 'status'},
        {text: '申请时间', dataIndex: 'createDate', flex: 2, xtype: 'datecolumn', format: 'Y年m月d号'}, // G:i
        {text: '处理时间', dataIndex: 'changeDate', flex: 2, xtype: 'datecolumn', format: 'Y年m月d号'},
        {text: '单位名称', dataIndex: 'bean.name', flex: 2},
        {text: '管区', dataIndex: 'superOrgName', flex: 2},
        {text: '手机', flex: 2, dataIndex: 'bean.contact.mobile'},
        {text: '邮箱', flex: 2, dataIndex: 'bean.contact.email'},
        {text: '操作', flex: 1, xtype: 'actioncolumn',//jcactioncolumn
            items: [
                {
                    icon: 'resources/images/yes.jpg',
                    tooltip: '允许',
                    text: '允许',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return record.get('status') !== '申请';
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionyes', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }, {
                    icon: 'resources/images/no.png',
                    tooltip: '拒绝',
                    text: '拒绝',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return record.get('status') !== '申请';
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionno', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }
            ]}
    ],
    dockedItems: [{
            xtype: 'pagingtoolbar',
            store: 'RegisterRequest',
            dock: 'bottom',
            displayInfo: true
        }],
    height: 300
});