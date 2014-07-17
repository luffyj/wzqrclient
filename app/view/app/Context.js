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
                }
            ]

        }
    ],
    items: []

});