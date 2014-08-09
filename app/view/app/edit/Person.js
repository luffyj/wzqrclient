Ext.define('wzqr.view.app.edit.Person', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditperson',
    requires: [
        'wzqr.view.util.MutliRowPanel',
        'Ext.panel.Panel',
        'Ext.form.Label',
        'Ext.form.field.Display',
        'Ext.form.field.Date',
        'Ext.form.field.ComboBox'
    ],
    height: 548,
    width: 803,
    title: '个人信息',
    id:'myinforBox',
    autoScroll: true,
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
                        columns: 5,
                        tableAttrs: {
                            wzform: 1,
                            style: {
                                width: '100%'
                            }
                        }
                    },
                    items: [
                        {
                            xtype: 'tlabel',
                            text: '申报人 Name'
                        },
                        {
                            xtype: 'displayfield',
                            cellCls: 'wzformborder',
                            colspan: 2,
                            fieldLabel: '',
                            name: 'realName'
                        },
                        {
                            xtype: 'tlabel',
                            text: '填表日期 Date of Completion'
                        },
                        {
                            xtype: 'datefield',
                            cellCls: 'wzformborder',
                            format:'Y年m月d日',
                            fieldLabel: '',
                            name: 'comletionDate'
                        },
                        {
                            xtype: 'tlabel',
                            text: '有效身份证件 Paper',
                            rowspan: 2
                        },
                        {
                            xtype: 'label',
                            cellCls: 'wzformborder',
                            colspan: 4,
                            text: 'Chinese should fill in identity card number,and foreigners should fill in the issued country and number of his passport.'
                        },
                        {
                            xtype: 'tlabel',
                            text: '证件名称 ID'
                        },
                        {
                            xtype: 'textfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'idType',
                            allowBlank: false,
                            blankText: '必须输入证件名称',
                            RemovedemptyText: '请输入证件名称 比如身份证'
                        },
                        {
                            xtype: 'tlabel',
                            text: '证件号码 ID No.'
                        },
                        {
                            xtype: 'textfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'idNumber',
                            allowBlank: false,
                            blankText: '必须输入证件号码',
                            RemovedemptyText: '请输入证件号码'
                        },
                        {
                            xtype: 'tlabel',
                            text: '国内住址及邮编 Add.& Postal Code in China'
                        },
                        {
                            xtype: 'textfield',
                            cellCls: 'wzformborder',
                            colspan: 4,
                            width: 495,
                            fieldLabel: '',
                            name: 'address',
                            blankText: '必须输入证件号码',
                            RemovedemptyText: '请填写国内详细地址'
                        },
                        {
                            xtype: 'tlabel',
                            text: '国内联系电话 Tel. in China'
                        },
                        {
                            xtype: 'tlabel',
                            text: '固定电话 Phone'
                        },
                        {
                            xtype: 'textfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'personPhone',
                            blankText: '',
                            RemovedemptyText: '填写固定电话'
                        },
                        {
                            xtype: 'tlabel',
                            text: '手机号码 Mobile'
                        },
                        {
                            xtype: 'textfield',
                            cellCls: 'wzformborder',
                            fieldLabel: '',
                            name: 'personMobile',
                            blankText: '必须输入证件名称',
                            RemovedemptyText: '请填写手机号码'
                        },
                        {
                            xtype: 'tlabel',
                            text: '国外住址 Add. in Home Country'
                        },
                        {
                            xtype: 'textfield',
                            cellCls: 'wzformborder',
                            colspan: 4,
                            width: 495,
                            fieldLabel: '',
                            name: 'addressOut',
                            blankText: '必须输入证件号码',
                            RemovedemptyText: '国外的详细地址'
                        },
                        {
                            xtype: 'tlabel',
                            text: '国外联系电话 Tel. in Home Country'
                        },
                        {
                            xtype: 'textfield',
                            cellCls: 'wzformborder',
                            colspan: 4,
                            fieldLabel: '',
                            name: 'phoneOut',
                            blankText: '必须输入证件号码',
                            RemovedemptyText: '国外的联系电话'
                        },
                        {
                            xtype: 'tlabel',
                            text: '电子邮箱 E-mail'
                        },
                        {
                            xtype: 'textfield',
                            cellCls: 'wzformborder',
                            colspan: 4,
                            fieldLabel: '',
                            name: 'email',
                            blankText: '必须输入证件号码',
                            RemovedemptyText: '请填写电子邮件地址',
                            vtype: 'email',
                            vtypeText: '请填写有效的电子邮件地址'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    layout: 'fit',
                    title: '',
                    dockedItems: [
                        {
                            xtype: 'label',
                            dock: 'top',
                            html: '家庭主要成员及重要社会关系（配偶、子女、父母、配偶父母、兄弟姐妹）',
                            margin: 10
                        }
                    ],
                    items: [
                        {
                            xtype: 'xmutliwowpanel',
                            maxRows: 10,
                            padding: 2,
                            layout: 'column',
                            bodyPadding: '',
                            title: '',
                            baseFields: [
                                {
                                    xtype: 'combobox',
                                    title: '关系 Relationship',
                                    columnWidth: 0.15,
                                    fieldLabel: '',
                                    name: 'relationship',
                                    store: 'GxStore'
                                },
                                {
                                    xtype: 'textfield',
                                    title: '姓名 Name',
                                    columnWidth: 0.15,
                                    fieldLabel: '',
                                    name: 'relationshipName',
                                    RemovedemptyText: '请输入姓名'
                                },
                                {
                                    xtype: 'textfield',
                                    title: '年龄 Age',
                                    columnWidth: 0.15,
                                    fieldLabel: '',
                                    name: 'relationshipAge',
                                    RemovedemptyText: '请输入年龄'
                                },
                                {
                                    xtype: 'textfield',
                                    title: '国籍 Nationality',
                                    columnWidth: 0.15,
                                    fieldLabel: '',
                                    name: 'relationshipCountry',
                                    RemovedemptyText: '请输入国籍'
                                },
                                {
                                    xtype: 'textfield',
                                    title: '工作单位及职务 Employer & Position',
                                    columnWidth: 0.4,
                                    fieldLabel: '',
                                    name: 'relationshipJob',
                                    RemovedemptyText: ''
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'label',
                    html: '信息填写必须完整。如系在职人员，请填写工作单位及职务；如系已退休人员或无工作。<br/>&nbsp;&nbsp;&nbsp;请填写退休或无工作；如系未成年子女，请填写所就读的学校。',
                    margin: 10
                }
            ]
        });

        me.callParent(arguments);
    }

});