Ext.define('wzqr.view.app.view.EntInfo1', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewentinfo1',

    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.HtmlEditor',
        'Ext.form.field.Number'
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
                        columns: 5
                    },
                    bodyPadding: '',
                    title: '',
                    maxRows: 20,
                    baseFields: [
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth15p',
                            title: '投资者姓名',
                            columnWidth: 0.15,
                            fieldLabel: '',
                            name: 'partnerName',
                            RemovedemptyText: '请输入投资者姓名'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth175p',
                            title: '投资额',
                            columnWidth: 0.175,
                            fieldLabel: '',
                            name: 'partnerContent',
                            RemovedemptyText: '请输入投资额'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth175p',
                            title: '出资方式',
                            columnWidth: 0.175,
                            fieldLabel: '',
                            name: 'partnerType',
                            RemovedemptyText: '请输入出资方式'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth25p',
                            title: '占总股本比例%',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'partnerPer',
                            RemovedemptyText: '请输入占资比例'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth25p',
                            title: '在公司担任职务',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'partnerPosition',
                            RemovedemptyText: '请输入职务'
                        }
                    ]
                }                
            ]
        });

        me.callParent(arguments);
    }

});