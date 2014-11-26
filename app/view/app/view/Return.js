Ext.define('wzqr.view.app.view.Return', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewreturn',

    requires: [
        'wzqr.view.app.view.HTML',
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.form.field.Display'
    ],

    height: 250,
    width: 400,
    layout: 'fit',
    title: '退回理由',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    margin: '10 5 5 5',
                    layout: {
                        type: 'table',
                        columns: 2,
                        tableAttrs: {
                            wzform: 1,
                            style: {
                                width: '100%',
                                'table-layout': 'fixed'
                            }
                        }
                    },
                    items: [
                        {
                            xtype: 'tlabel',
                            text: '退回机构',
                            cellId:'returnjglb'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'returnOrg'
                        },
                        {
                            xtype: 'tlabel',
                            text: '退回理由'
                        },
                        {
//                            xtype: 'xappviewhtml',
                            xtype: 'textareafield',
                            cellCls: 'wzformborder',
                            width:'100%',
                            name: 'returnReason'
//                            minHeight:30
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});