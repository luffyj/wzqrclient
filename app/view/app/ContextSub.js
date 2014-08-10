/* 
 * 机构使用
 */
Ext.define("wzqr.view.app.ContextSub", {
    extend: 'wzqr.spring.grid.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'wzqr.view.util.Action',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check'
    ],
    xtype: 'xappcontextsub',
    store: 'UnderApplication',
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
        {text: '编号', dataIndex: 'number',hidden:true, flex: 1},
        {text: '申报人', dataIndex: 'realName', flex: 2},
        {text: '登录名', dataIndex: 'ownerLoginName',hidden:true, flex: 2},
        {text: '申报批次', dataIndex: 'batch',hidden:true, flex: 1},
        {text: '人才类型', flex: 2, dataIndex: 'type'},
        {text: '专业领域', flex: 2, dataIndex: 'specialty'},
        {text: '申报单位名称', flex: 3, dataIndex: 'appOrgName'},
        {text: '上报时间', flex: 2, dataIndex: 'submitDate',hidden:true, xtype: 'datecolumn', format: 'Y-m-d'},
        {text: '申报状态', flex: 2, dataIndex: 'status'},
        {
            text: '操作',
            flex: 3,
            xtype: 'jcactioncolumn',
            items: [
                {
                    icon: 'resources/images/check.png',
                    tooltip: '形审',
                    text:'形审',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {                        
                        return record.get('status') !== '等待形审';
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionxingshen', grid, record, rowIndex, colIndex, row, item, e);
                    }
                },{
                    icon: 'resources/images/check.png',
                    tooltip: '重审',
                    text:'重审',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return record.get('status') !== '形审未过' && record.get('status') !== '形审通过';
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionxingshen', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }, {
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑',
                    text:'编辑',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return !record.isBeableSubEdit();
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionedit', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }
//                , {
//                    icon: 'resources/images/export.png',
//                    tooltip: '导出',
//                    text:'导出',
//                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
//                        grid.fireEvent('actionexport', grid, record, rowIndex, colIndex, row, item, e);
//                    }
//                }
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


