Ext.define("wzqr.view.log.Context", {
    extend: 'wzqr.spring.grid.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.grid.column.Action',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check'
    ],
    xtype: 'xlogcontext',
    store: 'MyLog',
    viewConfig: {
        stripeRows: true
    },
    columnLines: true,
    columns: [
        {text: '序号', xtype: 'rownumberer',width:80},
        {text: '操作时间', dataIndex: 'optime', flex: 2, xtype: 'datecolumn', format: 'Y年m月d号 G:i'},
        {text: '操作IP', dataIndex: 'ipaddress', flex: 1},
        {text: '用户角色', dataIndex: 'roleInfo', flex: 2},
        {text: '登录名', flex: 1, dataIndex: 'loginName'},
        {text: '操作类型', flex: 1, dataIndex: 'type'},
        {text: '操作', flex: 3, dataIndex: 'message'}
    ],
    dockedItems: [{
            xtype: 'pagingtoolbar',
            store: 'MyLog',
            dock: 'bottom',
            displayInfo: true
        }],
    height: 300
});