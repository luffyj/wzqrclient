/* 
 * 机构使用
 */
Ext.define("wzqr.view.app.ContextUnit", {
    extend: 'wzqr.spring.grid.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check'
    ],
    xtype: 'xappcontextunit',
    store: 'UnderApplication',
    viewConfig: {
        stripeRows: true
    },
    columnLines: true,
    columns: [
        {text: '序号', xtype: 'rownumberer', width: 80},
        {text: '编号', dataIndex: 'number', flex: 1},
        {text: '申报人', dataIndex: 'realName', flex: 1},
        {text: '登录名', dataIndex: 'owner.loginName', flex: 1},
        {text: '审批批次', dataIndex: 'batch', flex: 1},
        {text: '人才类型', flex: 1, dataIndex: 'type'},
        {text: '专业领域', flex: 2, dataIndex: 'specialty'},
        {text: '申报单位名称', flex: 3, dataIndex: 'appOrgName'},
        {text: '申报状态', flex: 1, dataIndex: 'status'},
        {
            text: '操作',
            flex: 2,
            xtype: 'actioncolumn',
            items: [
                {
                    icon: 'resources/images/submit.png',
                    tooltip: '上报',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return !record.isWeishangbao() && !record.isReturn();
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionsubmit', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }, {
                    icon: 'resources/images/cowner.png',
                    tooltip: '修改个人账号',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return !record.isWeishangbao() && !record.isReturn();
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actioncowner', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }, {
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return !record.isWeishangbao() && !record.isReturn();
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionedit', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }, {
                    icon: 'resources/images/delete.png',
                    tooltip: '删除',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return !record.isWeishangbao() && !record.isReturn();
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actiondelete', grid, record, rowIndex, colIndex, row, item, e);
                    }
                },{
                    icon: 'resources/images/export.png',
                    tooltip: '导出',
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionexport', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }
            ]
        }
    ],
    dockedItems: [{
            xtype: 'pagingtoolbar',
            store: 'UnderApplication',
            dock: 'bottom',
            displayInfo: true
        }],
    height: 300
});


