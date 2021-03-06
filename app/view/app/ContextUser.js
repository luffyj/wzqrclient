/* 
 * 申报人使用
 */
Ext.define("wzqr.view.app.ContextUser", {
    extend: 'wzqr.spring.grid.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'wzqr.view.util.Action',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check'
    ],
    xtype: 'xappcontextuser',
    store: 'MyApplication',
    viewConfig: {
        stripeRows: true
    },
    columnLines: true,
    selModel: {selType: 'checkboxmodel', mode: 'SIMPLE'},
    columns: [
        {text: '序号', xtype: 'rownumberer', listeners: {
                headerclick: function(ct, column, e, t, eOpts) {
                    var grid = ct.up('grid');
                    debug(grid, grid.getSelectionModel());
                    var records = grid.getSelectionModel().getSelection();
                    if (records.length > 0) {
                        grid.getSelectionModel().deselectAll();
                    } else {
                        grid.getSelectionModel().selectAll();
                    }
                }
            }},
        {text: '申报人', dataIndex: 'realName', flex: 1},
        {text: '登录名', dataIndex: 'ownerLoginName', flex: 1},
        {text: '申报批次', dataIndex: 'batch',hidden:true, flex: 1},
        {text: '人才类型', flex: 1, dataIndex: 'type'},
        {text: '专业领域', flex: 2, dataIndex: 'specialty'},
        {text: '申报状态', flex: 1, dataIndex: 'status'},
        {text: '操作', flex: 1, xtype: 'jcactioncolumn',
            items: [
                {
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑',
                    text:'编辑',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return !record.isWeishangbao();
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionedit', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }
//                , {
//                    icon: 'resources/images/delete.png',
//                    tooltip: '删除',
//                    text:'删除',
//                    isDisabled: function(view, rowIndex, colIndex, item, record) {
//                        return !record.isWeishangbao();
//                    },
//                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
//                        grid.fireEvent('actiondelete', grid, record, rowIndex, colIndex, row, item, e);
//                    }
//                }
            ]
        }
    ],
    dockedItems: [{
            xtype: 'pagingtoolbar',
            store: 'MyApplication',
            dock: 'bottom',
            displayInfo: true
        }],
    height: 300
});



