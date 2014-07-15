Ext.define('wzqr.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.layout.container.Border'
    ],
    xtype: 'app-main',
    layout: {
        type: 'border'
    },
    items: [{
            region: 'center',
            html: 'Loading...'
        }]
});