Ext.define('wzqr.view.app.edit.Work', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditwork',

    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.Text'
    ],

    height: 424,
    width: 803,
    layout: 'border',
    title: '工作经历',
    id:'workBox',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'label',
                    dock: 'top',
                    html: '<b>工作经历(兼职请注明) ：</b>请按照从往至今的时间顺序，简要、完整描述申报人的工作经历。 工作经历请写清楚每阶段经历的所在国家、单位、职务。单位和职务应同时加注英文。 兼职经历请注明。工作经历中无需描述工作业绩。',
                    margin: 10
                }
            ],
            items: [
                {
                    xtype: 'xmutliwowpanel',
						cls:'wdialogInpBox',
                    region: 'center',
                    maxRows: 9,
                    padding: 2,
                    layout: 'column',
                    bodyPadding: '',
                    title: '',
                    baseFields: [
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '职务（加注英文）',
                            columnWidth: 0.225,
                            fieldLabel: '',
                            name: 'jobPosition',
                            RemovedemptyText: '请输入职务'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '时间',
                            columnWidth: 0.225,
                            fieldLabel: '',
                            name: 'jobTime',
                            RemovedemptyText: '请输入工作时间'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '国家',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'jobCountry',
                            RemovedemptyText: '请输入工作所在国家'
                        },
                        {
                            xtype: 'textfield',
								cls:'wcommonInp',
                            title: '单位（加注英文）',
                            columnWidth: 0.3,
                            fieldLabel: '',
                            name: 'jobOrg',
                            RemovedemptyText: '请输入工作单位'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});