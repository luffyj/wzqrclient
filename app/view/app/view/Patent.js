Ext.define('wzqr.view.app.view.Patent', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewpatent',

    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.Text',
        'Ext.form.field.HtmlEditor'
    ],
    layout: 'fit', 

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {            
            items: [                
                {
                    xtype: 'xmutliwowpanel',
                    readOnly: true,
                    region: 'center',
                    bodyCls:'wztablelayout',
                    padding: 10,
                    layout: {
                        type: 'table',
                        // The total column count must be specified here
                        columns: 4
                    },
                    bodyPadding: '',
                    title: '',     
                    maxRows: 20,
                    baseFields: [
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth2p',
                            title: '专利保护期',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'patentTime',
                            RemovedemptyText: '请输入专利保护期'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth4p',
                            title: '专利名称',
                            columnWidth: 0.4,
                            fieldLabel: '',
                            name: 'patentName',
                            RemovedemptyText: '请输入专利名称'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth2p',
                            title: '授权国家',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'patentCountry',
                            RemovedemptyText: '请输入授权国家'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth2p',
                            title: '专利所有者',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'patentAuthor',
                            RemovedemptyText: '请输入专利所有者'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});