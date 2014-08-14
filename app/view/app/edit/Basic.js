Ext.define('wzqr.view.app.edit.Basic', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappeditbasic',
    title: '基本信息',
    id: 'baseTab',
    layout: {
        type: 'table',
        columns: 11,
        tableAttrs: {
            wzform: 1,
            style: {
                width: 1000
            }
        }
    },
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'tlabel',
                    html: '名字<br/>Name',
                    colspan: 2,
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    html: '中文<br/>Chinese',
                    colspan: 1
                },
                {
                    xtype: 'textfield',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    width:200,
                    colspan: 3,
                    fieldLabel: '',
                    name: 'realName',
                    allowBlank: false,
                    blankText: '请输入中文名',
                    RemovedemptyText: '请输入中文名'
                },
                {
                    xtype: 'tlabel',
                    html: '性别<br/>Sex'
                },
                {
                    xtype: 'combobox',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    colspan: 2,
                    width: 140,
                    fieldLabel: '',
                    name: 'sex',
                    allowBlank: false,
                    blankText: '请选择性别',
                    RemovedemptyText: '请选择性别',
                    editable: false,
                    displayField: 'name',
                    store: 'SexStore',
                    valueField: 'value'
                },
                {
                    xtype: 'tlabel',
                    html: '&nbsp',
                    tdAttrs: {
                        width: '1px'
                    },
                    colspan: 2,
                    rowspan: 7
                },
                {
                    xtype: 'tlabel',
                    html: '外文<br/>Foreign Language',
                    rowspan: 1
                },
                {
                    xtype: 'container',
                    cellCls: 'wzformborder',
                    colspan: 3,
                    rowspan: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            cls: 'wzsizefixedtable',
                            fieldLabel: '',
                            width:200,
                            name: 'realEnglishName',
                            allowBlank: false,
                            blankText: '如无外文名，请填写汉语拼音',
                            RemovedemptyText: '如无外文名，请填写汉语拼音'
                        },
                        {
                            xtype: 'label',
                            text: '（如无外文名，请填写汉语拼音）'
                        }
                    ]
                },
                {
                    xtype: 'tlabel',
                    html: '出生日期<br/>Date of Birth',
                    rowspan: 1
                },
                {
                    xtype: 'datefield',
                    id: 'wbaseDateCon',
                    format: 'Y年m月d日',
                    cls: 'wdtable',
                    cellCls: 'wzformborder',
                    colspan: 2,
                    rowspan: 1,
                    width: 140,
                    fieldLabel: '',
                    name: 'birthDate',
                    value: '07/25/1979',
                    allowBlank: false,
                    blankText: '请选择出生日期',
                    RemovedemptyText: '请选择出生日期',
                    editable: false,
                    maxValue: Ext.Date.add(new Date(), Ext.Date.YEAR, -20),
                    minValue: Ext.Date.add(new Date(), Ext.Date.YEAR, -120),
                    showToday: false
                },
                {
                    xtype: 'tlabel',
                    html: '出生地<br/>Place of Birth',
                    colspan: 3,
                    rowspan: 1
                },
                {
                    xtype: 'container',
                    cellCls: 'wzformborder',
                    colspan: 3,
                    rowspan: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            cls: 'wzsizefixedtable',
                            fieldLabel: '',
                            width:200,
                            name: 'birthPlace',
                            allowBlank: false,
                            blankText: '请输入出生地',
                            RemovedemptyText: '请输入出生地'
                        },
                        {
                            xtype: 'label',
                            text: '（国内:“**省(区、市)**市(县)”;国外:国家、地区。）'
                        }
                    ]
                },
                {
                    xtype: 'tlabel',
                    html: '国籍<br/>Nationality',
                    rowspan: 1
                },
                {
                    xtype: 'container',
                    cellCls: 'wzformborder',
                    colspan: 2,
                    rowspan: 1,
                    items: [
                        {
                            xtype: 'combobox',
                            cls: 'wzsizefixedtable',
                            width: 140,
                            fieldLabel: '',
                            name: 'nationality',
                            allowBlank: false,
                            blankText: '请选择国籍',
                            RemovedemptyText: '请选择国籍',
                            store: 'CountryStore'
                        },
                        {
                            xtype: 'label',
                            text: '（指申报人现在的国籍）'
                        }
                    ]
                },
                {
                    xtype: 'tlabel',
                    html: '毕业院校及专业、学位 <br/>Highest Degree <br/>Granted，Major，<br/>Institution Attended',
                    colspan: 2,
                    rowspan: 4
                },
                {
                    xtype: 'tlabel',
                    html: '&nbsp'
                },
                {
                    xtype: 'tlabel',
                    width: 70,
                    tdAttrs: {
                        align: 'center'
                    },
                    html: '学位'
                },
                {
                    xtype: 'tlabel',
                    width: 100,
                    tdAttrs: {
                        align: 'center'
                    },
                    html: '国家'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'center'
                    },
                    html: '学校',
                    colspan: 2
                },
                {
                    xtype: 'tlabel',
                    width: 180,
                    tdAttrs: {
                        align: 'center'
                    },
                    html: '专业',
                    colspan: 2
                },                
                {
                    xtype: 'tlabel',
                    html: '中文<br/>Chinese'
                },
                {
                    xtype: 'combobox',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp4',
                    cls: 'wzsizefixedtable',
                    width: 80,
                    fieldLabel: '',
                    name: 'mgChineseDegree',
                    allowBlank: false,
                    blankText: '请选择',
                    RemovedemptyText: '请选择',
                    editable: false,
                    store: 'DegreeStore'
                },
                {
                    xtype: 'combobox',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp',
                    cls: 'wzsizefixedtable',
                    width: 120,
                    fieldLabel: '',
                    name: 'mgChineseCountry',
                    allowBlank: false,
                    blankText: '请选择国家',
                    RemovedemptyText: '请选择国家',
                    store: 'CountryStore'
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp2',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    colspan: 2,
                    fieldLabel: '',
                    name: 'mgChineseSchool',
                    allowBlank: false,
                    blankText: '请输入毕业学校',
                    RemovedemptyText: '请输入毕业学校'
                },
                {
                    xtype: 'textfield',
                    width: 180,
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp3',
                    cls: 'wzsizefixedtable',
                    colspan: 2,
                    fieldLabel: '',
                    name: 'mgChineseMajor',
                    allowBlank: false,
                    blankText: '请输入专业',
                    RemovedemptyText: '请输入专业'
                },                
                {
                    xtype: 'tlabel',
                    html: '英文<br/>English'
                },
                {
                    xtype: 'combobox',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp8',
                    cls: 'wzsizefixedtable',
                    width: 80,
                    fieldLabel: '',
                    name: 'mgEnglishDegree',
                    allowBlank: false,
                    blankText: '请选择',
                    RemovedemptyText: '请选择',
                    editable: false,
                    displayField: 'entext',
                    store: 'DegreeStore'
                },
                {
                    xtype: 'combobox',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp5',
                    cls: 'wzsizefixedtable',
                    width: 120,
                    fieldLabel: '',
                    name: 'mgEnglishCountry',
                    allowBlank: false,
                    blankText: '请选择国家',
                    RemovedemptyText: '请选择国家',
                    displayField: 'entext',
                    store: 'CountryStore'
                },
                {
                    xtype: 'textfield',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp6',
                    cls: 'wzsizefixedtable',
                    colspan: 2,
                    fieldLabel: '',
                    name: 'mgEnglishSchool',
                    allowBlank: false,
                    blankText: '请输入毕业学校',
                    RemovedemptyText: '请输入毕业学校'
                },
                {
                    xtype: 'textfield',
                    width: 180,
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp7',
                    cls: 'wzsizefixedtable',
                    colspan: 2,
                    fieldLabel: '',
                    name: 'mgEnglishMajor',
                    allowBlank: false,
                    blankText: '请输入专业',
                    RemovedemptyText: '请输入专业'
                },                
                {
                    xtype: 'label',
                    cellCls: 'wzformborder',
                    colspan: 7,
                    text: '(请填写申报人毕业院校、专业及学位的中、英文全称。请同时提供毕业证书复印件和教育部留学人员服务中心出具的《国外学历学位认证书》作为附件。)'
                },
                {
                    xtype: 'tlabel',
                    html: '回国前工作单位及职务<br/> Former Employer and<br/>Position in Foreign Countries',
                    colspan: 2,
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    html: '中文<br/>Chinese'
                },
                {
                    xtype: 'container',
                    cellCls: 'wzformborder',
                    colspan: 8,
                    rowspan: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'wbasealoneInp9',
//                            cls:'wzsizefixedtable',
                            fieldLabel: '',
                            width: 500,
                            name: 'foreignJobChinese'
                        },
                        {
                            xtype: 'label',
                            text: '（国内:“**省(区、市)**市(县)”;国外:国家、地区。）'
                        }
                    ]
                },
                {
                    xtype: 'tlabel',
                    html: '英文<br/>English'
                },
                {
                    xtype: 'textfield',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp10',
//                    cls:'wzsizefixedtable',
                    width: 500,
                    colspan: 8,
                    fieldLabel: '',
                    name: 'foreignJobEnglish'
                },
                {
                    xtype: 'tlabel',
                    html: me.cdname1,
//                    html: '拟（现）任职单位名称<br/>Current or Expected Employer',
                    colspan: 3
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp11',
                    cellCls: 'wzformborder',
//                    cls:'wzsizefixedtable',
                    width: 350,
                    colspan: 4,
                    fieldLabel: '',
                    name: 'employer'
                },
                {
                    xtype: 'tlabel',
                    html: '职务（岗位）<br/>Position'
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp12',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    colspan: 3,
                    width: 200,
                    fieldLabel: '',
                    name: 'position'
                },
                {
                    xtype: 'tlabel',
                    html: me.cdname2,
//                    html: '单位地址<br/>Current or Expected Employer Address',
                    colspan: 3
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp13',
                    cellCls: 'wzformborder',
//                    cls:'wzsizefixedtable',
                    width: 350,
                    colspan: 4,
                    fieldLabel: '',
                    name: 'employerAddress'
                },
                {
                    xtype: 'tlabel',
                    html: '邮编<br/>Postal Code'
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp14',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    colspan: 3,
                    width: 200,
                    fieldLabel: '',
                    name: 'zip'
                }
            ]
        });

        me.callParent(arguments);
    }

});