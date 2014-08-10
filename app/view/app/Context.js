Ext.define("wzqr.view.app.Context", {
    extend: 'Ext.panel.Panel',
    xtype: 'xappcontext',
    layout: 'fit',
    dockedItems: [
        {
            dock: 'top',
            xtype: 'panel',
            name: 'buttons',
            items: [
                {
                    xtype: 'button',
                    margin: 5,
                    name: 'export',
                    text: '导出汇总表'
                },{
                    xtype: 'button',
                    margin: 5,
                    name: 'exportword',
                    text: '导出申报书'// 申报人 无法导出！
                },,{
                    xtype: 'button',
                    margin: 5,
                    name: 'deleteapps',
                    text: '删除'// 只有申报单位和申报人可以删除
                    // user record.isWeishangbao()
                    // unit record.isWeishangbao() || record.isReturn
                }
            ]

        }
    ],
    items: []

});