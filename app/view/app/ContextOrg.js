/* 
 * 机构使用
 */
Ext.define("wzqr.view.app.ContextOrg", {
    extend: 'wzqr.spring.grid.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check'
    ],
    xtype: 'xappcontextorg',
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
        {text: '专业领域', flex: 2, dataIndex: 'profession'},
        {text: '申报单位名称', flex: 3, dataIndex: 'appOrgName'},
        {text: '申报状态', flex: 1, dataIndex: 'status'},
        {text: '操作', flex: 1}
    ],
    dockedItems: [{
            xtype: 'pagingtoolbar',
            store: 'UnderApplication',
            dock: 'bottom',
            displayInfo: true
        }],
    height: 300
});


