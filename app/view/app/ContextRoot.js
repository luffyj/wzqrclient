/* 
 * 高管使用
 */
Ext.define("wzqr.view.app.ContextRoot", {
    extend: 'wzqr.spring.grid.Panel',
    requires: [
        'Ext.grid.column.Date',
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check'
    ],
    xtype: 'xappcontextroot',
    store: 'AllApplication',
    viewConfig: {
        stripeRows: true
    },
    columnLines: true,
    columns: [
        {text: '序号', xtype: 'rownumberer'},
        {text: '编号', dataIndex: 'number', flex: 1},
        {text: '申报人', dataIndex: 'realName', flex: 1},
        {text: '审批批次', dataIndex: 'batch', flex: 1},
        {text: '人才类型', flex: 1, dataIndex: 'type'},
        {text: '专业领域', flex: 2, dataIndex: 'specialty'},
        {text: '申报单位名称', flex: 2, dataIndex: 'appOrgName'},
        {text: '上报时间', flex: 2, dataIndex: 'submitDate', xtype: 'datecolumn', format: 'Y-m-d G:i'},
        {text: '申报状态', flex: 1, dataIndex: 'status'},
        {
            text: '操作',
            flex: 1,
            xtype: 'actioncolumn',
            items: [
                {
                    icon: 'resources/images/check.png',
                    tooltip: '复审',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        switch (record.get('status')) {
                            case '复审通过':
                                item.text = '评审';
                                item.tooltip = '评审';
                                return false;
                            case '评审未过':
                                item.text = '重审';
                                item.tooltip = '重审';
                                return false;
                            case '形审通过':
                                item.text = '复审';
                                item.tooltip = '复审';
                                return false;
                            case '复审未过':
                                item.text = '重审';
                                item.tooltip = '重审';
                                return false;
                        }
                        return true;
                    },
                    handler: function(grid, rowIndex, colIndex, item, e, record, row) {

                        switch (record.get('status')) {
                            case '复审通过':
                            case '评审未过':
                                grid.fireEvent('actionpingshen', grid, record, rowIndex, colIndex, row, item, e);
                                return;
                            case '形审通过':
                            case '复审未过':
                                grid.fireEvent('actionfushen', grid, record, rowIndex, colIndex, row, item, e);
                        }


                    }
                }, {
                    icon: 'resources/images/edit.png',
                    tooltip: '编辑',
                    isDisabled: function(view, rowIndex, colIndex, item, record) {
                        return record.isReturn();
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
            store: 'AllApplication',
            dock: 'bottom',
            displayInfo: true
        }],
    height: 300
});


