Ext.define('wzqr.view.app.view.Paper', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewpaper',

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
                            title: '发表时间',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'paperTime',
                            RemovedemptyText: '请输入发表时间'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth4p',
                            title: '论著（论文）名称',
                            columnWidth: 0.4,
                            fieldLabel: '',
                            name: 'paperTitle',
                            RemovedemptyText: '请输入名称'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth2p',
                            title: '发表载体',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'paperMedia',
                            RemovedemptyText: '请输入发表载体'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth2p',
                            title: '论著（论文）作者',
                            columnWidth: 0.2,
                            fieldLabel: '',
                            name: 'paperAuthor',
                            RemovedemptyText: '请输入作者'
                        }
                    ]
                }                
            ]
        });

        me.callParent(arguments);
    }

});