Ext.define("wzqr.view.app.edit.Basic", {
    extend: 'Ext.panel.Panel',
    xtype: 'xappeditbasic',
    title: '基本信息',
    layout: 'column',
    items: [
        {
            columnWidth: 0.3,
            xtype: 'label',
            forId: 'myFieldId',
            html: '编号<br/>number'
        },{
            columnWidth: 0.7,
            xtype:'textfield'
        }
    ]
});