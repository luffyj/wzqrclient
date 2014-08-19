Ext.define('wzqr.view.app.view.Work', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewwork',
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
                    text: '工作经历(兼职请注明)'
                }
            ],
            items: [
                {
                    xtype: 'xmutliwowpanel',
                    readOnly: true,
                    region: 'center',
                    bodyCls: 'wztablelayout',
                    padding: 10,
                    layout: 'column',
                    bodyPadding: '',
                    title: '',
                    maxRows: 9,
                    baseFields: [
                        {
                            xtype: 'displayfield',
                            cls: 'wztableelement centerinbox',
                            title: '职务（加注英文）',
                            columnWidth: 0.225,
                            fieldLabel: '',
                            name: 'jobPosition',
                            RemovedemptyText: '请输入职务'
                        },
                        {
                            xtype: 'displayfield',
                            cls: 'wztableelement centerinbox',
                            title: '时间',
                            columnWidth: 0.225,
                            fieldLabel: '',
                            name: 'jobTime',
                            RemovedemptyText: '请输入工作时间'
                        },
                        {
                            xtype: 'displayfield',
                            cls: 'wztableelement centerinbox',
                            title: '国家',
                            columnWidth: 0.25,
                            fieldLabel: '',
                            name: 'jobCountry',
                            RemovedemptyText: '请输入工作所在国家'
                        },
                        {
                            xtype: 'displayfield',
                            cls: 'wztableelement centerinbox',
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