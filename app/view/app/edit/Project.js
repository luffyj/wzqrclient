Ext.define('wzqr.view.app.edit.Project', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditproject',

    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.Text'
    ],

    height: 424,
    width: 803,
    layout: 'border',
    title: '主要项目',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'label',
                    dock: 'top',
                    html: '<b>领导(参与)过的主要项目：</b>请列出领导(参与)过的主要项目，包括项目的起止时间、项目性质和来源、经费总额、参与人数、申报人的具体职位和任务。填写时请客观描述，突出重点，言简意赅。请同时提供相关材料作为附件。',
                    margin: 10
                }
            ],
            items: [
                {
                    xtype: 'xmutliwowpanel',
                    maxRows: 9,
                    region: 'center',
                    padding: 2,
                    layout: 'column',
                    bodyPadding: '',
                    title: '',
                    baseFields: [
                        {
                            xtype: 'textfield',
                            title: '起止时间',
                            columnWidth: 0.15,
                            fieldLabel: '',
                            name: 'projectTime',
                            emptyText: '请输入起止时间'
                        },
                        {
                            xtype: 'textfield',
                            title: '项目性质和来源',
                            columnWidth: 0.3,
                            fieldLabel: '',
                            name: 'projectDesc',
                            emptyText: '简要说明项目性质和来源'
                        },
                        {
                            xtype: 'textfield',
                            title: '经费总额',
                            columnWidth: 0.125,
                            fieldLabel: '',
                            name: 'projectBudget',
                            emptyText: '经费总额'
                        },
                        {
                            xtype: 'textfield',
                            title: '参与人数',
                            columnWidth: 0.125,
                            fieldLabel: '',
                            name: 'projectPeoples',
                            emptyText: '参与人数'
                        },
                        {
                            xtype: 'textfield',
                            title: '申报人的具体职位和任务',
                            columnWidth: 0.3,
                            fieldLabel: '',
                            name: 'projectResponsibility',
                            emptyText: '请输入具体职位和任务'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});