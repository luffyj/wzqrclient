Ext.define('wzqr.view.app.edit.Summary', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditsummary',

    requires: [
        'Ext.Date',
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.form.field.Display',
        'Ext.form.field.ComboBox',
        'Ext.form.field.Date',
        'Ext.form.field.TextArea',
        'Ext.form.field.Checkbox'
    ],

    height: 539,
    width: 957,
    title: '汇总信息',
    id:'collectinforBox',

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    margin: '10 5 5 5',
                    title: '',
                    layout: {
                        type: 'table',
                        columns: 4,
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
                            text: '姓名'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'realName'
                        },
                        {
                            xtype: 'tlabel',
                            text: '性别'
                        },
                        {
                            xtype: 'combobox',
                            cellCls: 'wzformborder',
                            colspan: 1,
                            width: 105,
                            fieldLabel: '',
                            name: 'sex',
                            readOnly: true,
                            allowBlank: false,
                            blankText: '请选择性别',
                            emptyText: '请选择性别',
                            editable: false,
                            displayField: 'name',
                            store: 'SexStore',
                            valueField: 'value'
                        },
                        {
                            xtype: 'tlabel',
                            text: '国籍'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'nationality'
                        },
                        {
                            xtype: 'tlabel',
                            text: '出生日期'
                        },
                        {
                            xtype: 'datefield',
                            cellCls: 'wzformborder',
                            width: 120,
                            fieldLabel: '',
                            name: 'birthDate',
                            value: '07/25/1979',
                            readOnly: true,
                            allowBlank: false,
                            blankText: '请选择出生日期',
                            emptyText: '请选择出生日期',
                            editable: false,
                            maxValue: Ext.Date.add(new Date(), Ext.Date.YEAR, -20),
                            minValue: Ext.Date.add(new Date(), Ext.Date.YEAR, -120),
                            showToday: false
                        },
                        {
                            xtype: 'tlabel',
                            text: '最高(海外)学历学位'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'mgChineseDegree'
                        },
                        {
                            xtype: 'tlabel',
                            text: '毕业院校'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'mgChineseSchool'
                        },
                        {
                            xtype: 'tlabel',
                            text: '用人（申报）单位/创办企业'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            colspan: 1,
                            fieldLabel: '',
                            name: 'appOrgName'
                        },
                        {
                            xtype: 'tlabel',
                            text: '职务/拟任职务或职称'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'position'
                        },
                        {
                            xtype: 'tlabel',
                            text: '专业领域'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'specialty'
                        },
                        {
                            xtype: 'tlabel',
                            text: '专业方向'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'profession'
                        },
                        {
                            xtype: 'tlabel',
                            text: '专利授权或研发成果情况 （200字以内）'
                        },
                        {
                            xtype: 'textareafield',
                            cellCls: 'wzformborder',
                            colspan: 3,
                            style: {
                                width: '100%'
                            },
                            fieldLabel: '',
                            name: 'patentDesc',
                            emptyText: '请输入专利授权或者研发成果情况',
                            maxLength: 200,
                            maxLengthText: '最长只能输入{0}'
                        },
                        {
                            xtype: 'tlabel',
                            text: '落地市'
                        },
                        {
                            xtype: 'textfield',
                            emptyText: '请输入落地城市',
                            cellCls: 'wzformborder',
                            colspan: 3,
                            fieldLabel: '',
                            name: 'city'
                        },
                        {
                            xtype: 'tlabel',
                            text: '到中国前单位'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'foreignJobChinese'
                        },
                        {
                            xtype: 'tlabel',
                            text: '职务'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'foreignJobChinese'
                        },
                        {
                            xtype: 'tlabel',
                            text: '（拟）到中国时间'
                        },
                        {
                            xtype: 'textfield',
                            emptyText: '请输入大致到中国时间',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'borderDate'
                        },
                        {
                            xtype: 'tlabel',
                            text: '签订合同时间'
                        },
                        {
                            xtype: 'textfield',
                            emptyText: '请输入签订合同时间',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'wdate'
                        },
                        {
                            xtype: 'tlabel',
                            text: '引进平台'
                        },
                        {
                            xtype: 'textfield',
                            emptyText: '请输入引进平台',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'platform'
                        },
                        {
                            xtype: 'tlabel',
                            text: '申报单位所属'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'orgSubName'
                        },
                        {
                            xtype: 'tlabel',
                            text: '人才类型'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'type'
                        },
                        {
                            xtype: 'tlabel',
                            text: '是否破格'
                        },
                        {
                            xtype: 'checkboxfield',
								id:'pogeBox',
                            cellCls: 'wzformborder',
                            name: 'poge',
                            boxLabel: '破格'
                        },
                        {
                            xtype: 'tlabel',
                            text: '备注'
                        },
                        {
                            xtype: 'textareafield',
                            cellCls: 'wzformborder',
                            colspan: 3,
                            style: {
                                width: '100%'
                            },
                            fieldLabel: '',
                            name: 'comment',
                            emptyText: '备注',
                            maxLength: 200,
                            maxLengthText: '最长只能输入{0}'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});