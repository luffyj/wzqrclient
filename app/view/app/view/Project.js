Ext.define('wzqr.view.app.view.Project', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewproject',

    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.Text'
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
                            title: '起止时间',
                            columnWidth: 0.15,
                            fieldLabel: '',
                            name: 'projectTime',
                            RemovedemptyText: '请输入起止时间'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth3p',
                            title: '项目性质和来源',
                            columnWidth: 0.3,
                            fieldLabel: '',
                            name: 'projectDesc',
                            RemovedemptyText: '简要说明项目性质和来源'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth125p',
                            title: '经费总额',
                            columnWidth: 0.125,
                            fieldLabel: '',
                            name: 'projectBudget',
                            RemovedemptyText: '经费总额'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth125p',
                            title: '参与人数',
                            columnWidth: 0.125,
                            fieldLabel: '',
                            name: 'projectPeoples',
                            RemovedemptyText: '参与人数'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls:'wztableelement centerinbox wztablebreak wzwidth3p',
                            title: '申报人的具体职位和任务',
                            columnWidth: 0.3,
                            fieldLabel: '',
                            name: 'projectResponsibility',
                            RemovedemptyText: '请输入具体职位和任务'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});