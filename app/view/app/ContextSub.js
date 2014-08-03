/* 
 * 机构使用
 */
Ext.define("wzqr.view.app.ContextSub", {
    extend: 'wzqr.spring.grid.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check'
    ],
    xtype: 'xappcontextsub',
    store: 'UnderApplication',
    viewConfig: {
        stripeRows: true
    },
    columnLines: true,
    columns: [
        {text: '序号', xtype: 'rownumberer'},
        {text: '编号', dataIndex: 'number', flex: 1},
        {text: '申报人', dataIndex: 'realName', flex: 1},
        {text: '登录名', dataIndex: 'ownerLoginName', flex: 1},
        {text: '申报批次', dataIndex: 'batch', flex: 1},
        {text: '人才类型', flex: 1, dataIndex: 'type'},
        {text: '专业领域', flex: 2, dataIndex: 'specialty'},
        {text: '申报单位名称', flex: 2, dataIndex: 'appOrgName'},
        {text: '申报状态', flex: 1, dataIndex: 'status'},
        {
            text: '操作',
            flex: 1,
            xtype: 'actioncolumn',
            items: [
                {
                    icon: 'resources/images/check.png',
                    tooltip: '形审',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        if (record.get('status') === '等待形审') {
                            item.text = '形审';
                            item.tooltip = '形审';
                            return false;
                        }
                        if (record.get('status') === '形审未过') {
                            item.text = '重审';
                            item.tooltip = '重审';
                            return false;
                        }
                        return true;
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionxingshen', grid, record, rowIndex, colIndex, row, item, e);
                    }
                }, {
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return !record.isBeableSubEdit();
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {
                        grid.fireEvent('actionedit', grid, record, rowIndex, colIndex, row, item, e);
                    }               
                }, {
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


