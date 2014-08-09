Ext.define('wzqr.view.app.edit.Education', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappediteducation',
    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.ComboBox'
    ],
    height: 424,
    width: 803,
    layout: 'border',
    title: '教育经历',
    id:'eduBox',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'label',
                    dock: 'top',
                    margin:10,
                    text: '教育经历(从本科填起，请写清楚每阶段经历的所在国家、院校、专业、学位。学位应同时加注英文。)  请按照从往至今的时间顺序，简要、完整描述申报人的教育经历。每一段经历均应有明确的起始和终止日期，具体到月份。'
                }
            ],
            items: [
                {
                    xtype: 'xmutliwowpanel',
                    region: 'center',
                    padding: 2,
                    layout: 'column',
                    bodyPadding: '',
                    title: '',
                    maxRows:7,
                    baseFields: [
                        {
                            xtype: 'combobox',
                            columnWidth: 0.12,
                            title: '学位 Degree',
                            fieldLabel: '',
                            name: 'degree',
                            displayField: 'fulltext',
                            store: 'DegreeStore'
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: 0.19,
                            title: '时间 Time',
                            fieldLabel: '',
                            name: 'time',
                            RemovedemptyText: '请输入起止时间'
                        },
                        {
                            xtype: 'textfield',
                            title: '国家 Country',
                            columnWidth: 0.19,
                            fieldLabel: '',
                            name: 'country',
                            RemovedemptyText: '请输入国家'
                        },
                        {
                            xtype: 'textfield',
                            title: '院校 University',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'university',
                            RemovedemptyText: '请输入院校'
                        },
                        {
                            xtype: 'textfield',
                            title: '专业 Major',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'major',
                            RemovedemptyText: '请输入专业'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});