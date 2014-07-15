Ext.define("wzqr.view.ManageUnit", {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check',
        'Ext.grid.Panel',
        'wzqr.spring.grid.Panel'
    ],
    xtype: 'xmanageunit',
    layout: 'fit',
    dockedItems: [
        {
            dock: 'top',
            xtype: 'panel',
            items: [
                {
                    xtype: 'button',
                    margin: 5,
                    name: 'add',
                    text: '增加'
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
                {text: '单位名称', dataIndex: 'name', flex: 2},
                {text: '联系人', flex: 1, dataIndex: 'contact.people'},
                {text: '联系电话', flex: 1, dataIndex: 'contact.phone'},
                {text: '所属部门', flex: 2, dataIndex: 'superOrg.name'},
                {text: '登录名', flex: 1, dataIndex: 'manager.loginName'},
                {xtype: 'checkcolumn', text: '启用状态', dataIndex: 'manager.enabled', editable: true},
                {text: '最后登录时间', flex: 2, dataIndex: 'manager.lastLogin'}
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