Ext.define('wzqr.view.app.view.Education', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappvieweducation',
    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.form.Label',
        'Ext.panel.Panel',
        'Ext.form.field.Display'
    ],
    layout: 'fit',    
//    title: '教育经历',
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            dockedItems: [
                {
                    xtype: 'label',
                    dock: 'top',
                    margin: 10,
                    text: '教育经历(从本科填起)'
                }
            ],
            items: [
                {
                    xtype: 'xmutliwowpanel',
                    readOnly: true,
                    region: 'center',
                    bodyCls:'wztablelayout',
                    padding: 10,
                    layout: 'column',
                    bodyPadding: '',
                    title: '',
                    maxRows: 7,
                    baseFields: [
                        {
                            xtype: 'displayfield',
                            cls:'wztableelement centerinbox',
                            columnWidth: 0.12,
                            title: '学位 Degree',
                            fieldLabel: '',
                            name: 'degree',
                            displayField: 'fulltext',
                            store: 'DegreeStore'
                        },
                        {
                            xtype: 'displayfield',
                            cls:'wztableelement centerinbox',
                            columnWidth: 0.19,
                            title: '时间 Time',
                            fieldLabel: '',
                            name: 'time',
                            RemovedemptyText: '请输入起止时间'
                        },
                        {
                            xtype: 'displayfield',
                            cls:'wztableelement centerinbox',
                            title: '国家 Country',
                            columnWidth: 0.19,
                            fieldLabel: '',
                            name: 'country',
                            RemovedemptyText: '请输入国家'
                        },
                        {
                            xtype: 'displayfield',
                            cls:'wztableelement centerinbox',
                            title: '院校 University',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'university',
                            RemovedemptyText: '请输入院校'
                        },
                        {
                            xtype: 'displayfield',
                            cls:'wztableelement centerinbox',
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