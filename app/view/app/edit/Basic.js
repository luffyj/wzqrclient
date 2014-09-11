Ext.define('wzqr.view.app.edit.Basic', {
    extend: 'Ext.panel.Panel',
    requires:[
        'wzqr.view.app.edit.window.ChangePicture'
    ],
    alias: 'widget.xappeditbasic',
    title: '基本信息',
    id: 'baseTab',
    layout: {
        type: 'table',
        columns: 7,
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
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    html: '中文<br/>Chinese',
                },
                {
                    xtype: 'textfield',
                    id: 'wbaseInp1',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    colspan: 2,
                    fieldLabel: '',
                    name: 'realName',
                    allowBlank: false,
                    blankText: '请输入中文名',
                    RemovedemptyText: '请输入中文名'
                },
                {
                    xtype: 'tlabel',
                    colspan: 1,
                    style: {
                        width: '185px',
                        display: 'block'
                    },
                    html: '性别<br/>Sex'
                },
                {
                    xtype: 'combobox',
                    cellCls: 'wzformborder',
                    id: 'baseSexBox1',
                    cls: 'wzsizefixedtable',
                    colspan: 1,
                    fieldLabel: '',
                    style: {
                        width: '185px',
                        display: 'block'
                    },
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
                    xtype: 'image',
                    cellCls: 'wzformlabel',
                    tdAttrs: {
                        align: 'right'
                    },
                    name:'apppicture',
                    align: 'right',
                    alt: '点击更换',
                    title: '点击更换',
                    src: Utils.toApi('picture/'+me.appid+'.png'),
                    listeners: {
                        el: {
                            click: function(e, t) {
                                var window = new wzqr.view.app.edit.window.ChangePicture(me.appid);
                                window.show();
                            }
                        }
                    },
                    style: {
                        width: '185px',
                        display: 'block'
                    },
                    colspan: 1,
                    rowspan: 6
                },
                {
                    xtype: 'tlabel',
                    html: '外文<br/>Foreign Language',
                    colspan: 1,
                    rowspan: 1
                },
                {
                    xtype: 'container',
                    cellCls: 'wzformborder',
                    colspan: 2,
                    rowspan: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'wbaseInp2',
                            cls: 'wzsizefixedtable',
                            fieldLabel: '',
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
                    colspan: 1,
                    rowspan: 1
                },
                {
                    xtype: 'datefield',
                    id: 'wbaseDateCon',
                    format: 'Y年m月d日',
                    cls: 'wdtable',
                    cellCls: 'wzformborder',
                    colspan: 1,
                    rowspan: 1,
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
                            id: 'wbaseInp3',
                            cls: 'wzsizefixedtable',
                            fieldLabel: '',
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
                    colspan: 1,
                    rowspan: 1
                },
                {
                    xtype: 'container',
                    id: 'wwbaseBox',
                    cellCls: 'wzformborder',
                    colspan: 1,
                    rowspan: 1,
                    items: [
                        {
                            xtype: 'combobox',
                            id: 'wslideBaseBox',
                            cls: 'wzsizefixedtable',
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
                    rowspan: 4,
                    style: {
                        width: '150px',
                        display: 'block'
                    }
                },
                {
                    xtype: 'tlabel',
                    html: '&nbsp'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'center'
                    },
                    html: '学位'
                },
                {
                    xtype: 'tlabel',
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
                    html: '学校'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'center'
                    },
                    html: '专业'
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
                    fieldLabel: '',
                    name: 'mgChineseDegree',
                    allowBlank: false,
                    blankText: '请选择',
                    RemovedemptyText: '请选择',
                    editable: false,
                    store: 'DegreeStore',
                    colspan: 1
                },
                {
                    xtype: 'combobox',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp',
                    cls: 'wzsizefixedtable',
                    fieldLabel: '',
                    name: 'mgChineseCountry',
                    allowBlank: false,
                    blankText: '请选择国家',
                    RemovedemptyText: '请选择国家',
                    store: 'CountryStore',
                    colspan: 1
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp2',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    style: {
                        width: '185px',
                        display: 'block'
                    },
                    colspan: 1,
                    fieldLabel: '',
                    name: 'mgChineseSchool',
                    allowBlank: false,
                    blankText: '请输入毕业学校',
                    RemovedemptyText: '请输入毕业学校'
                },
                {
                    xtype: 'textfield',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp3',
                    cls: 'wzsizefixedtable',
                    colspan: 1,
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
                    fieldLabel: '',
                    name: 'mgEnglishDegree',
                    allowBlank: false,
                    blankText: '请选择',
                    RemovedemptyText: '请选择',
                    editable: false,
                    displayField: 'entext',
                    store: 'DegreeStore',
                    colspan: 1
                },
                {
                    xtype: 'combobox',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp5',
                    cls: 'wzsizefixedtable',
                    fieldLabel: '',
                    name: 'mgEnglishCountry',
                    allowBlank: false,
                    blankText: '请选择国家',
                    RemovedemptyText: '请选择国家',
                    displayField: 'entext',
                    store: 'CountryStore',
                    colspan: 1
                },
                {
                    xtype: 'textfield',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp6',
                    cls: 'wzsizefixedtable',
                    style: {
                        width: '185px',
                        display: 'block'
                    },
                    colspan: 1,
                    fieldLabel: '',
                    name: 'mgEnglishSchool',
                    allowBlank: false,
                    blankText: '请输入毕业学校',
                    RemovedemptyText: '请输入毕业学校'
                },
                {
                    xtype: 'textfield',
                    cellCls: 'wzformborder',
                    id: 'wbasealoneInp7',
                    cls: 'wzsizefixedtable',
                    colspan: 1,
                    fieldLabel: '',
                    name: 'mgEnglishMajor',
                    allowBlank: false,
                    blankText: '请输入专业',
                    RemovedemptyText: '请输入专业'
                },
                {
                    xtype: 'label',
                    cellCls: 'wzformborder',
                    colspan: 6,
                    text: '(请填写申报人毕业院校、专业及学位的中、英文全称。请同时提供毕业证书复印件和教育部留学人员服务中心出具的《国外学历学位认证书》作为附件。)'
                },
                {
                    xtype: 'tlabel',
                    html: '回国前工作单位及职务<br/> Former Employer and<br/>Position in Foreign Countries',
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    id: 'baseInp4',
                    html: '中文<br/>Chinese'
                },
                {
                    xtype: 'container',
                    cellCls: 'wzformborder',
                    colspan: 6,
                    rowspan: 1,
                    items: [
                        {
                            xtype: 'textfield',
                            id: 'wbasealoneInp9',
                            width: '100%',
//                            cls:'wzsizefixedtable',
                            fieldLabel: '',
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
                    width: '100%',
                    id: 'wbasealoneInp10',
//                    cls:'wzsizefixedtable',
                    colspan: 5,
                    fieldLabel: '',
                    name: 'foreignJobEnglish'
                },
                {
                    xtype: 'tlabel',
                    html: me.cdname1
//                    html: '拟（现）任职单位名称<br/>Current or Expected Employer',
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp11',
                    width: '100%',
                    cellCls: 'wzformborder',
//                    cls:'wzsizefixedtable',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'employer'
                },
                {
                    xtype: 'tlabel',
                    colspan: 1,
                    html: '职务（岗位）<br/>Position'
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp12',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    colspan: 1,
                    fieldLabel: '',
                    name: 'position'
                },
                {
                    xtype: 'tlabel',
                    html: me.cdname2
//                    html: '单位地址<br/>Current or Expected Employer Address',
                },
                {
                    xtype: 'textfield',
                    width: '100%',
                    id: 'wbasealoneInp13',
                    cellCls: 'wzformborder',
//                    cls:'wzsizefixedtable',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'employerAddress'
                },
                {
                    xtype: 'tlabel',
                    colspan: 1,
                    html: '邮编<br/>Postal Code'
                },
                {
                    xtype: 'textfield',
                    id: 'wbasealoneInp14',
                    cellCls: 'wzformborder',
                    cls: 'wzsizefixedtable',
                    colspan: 1,
                    fieldLabel: '',
                    name: 'zip'
                }
            ]
        });

        me.callParent(arguments);
    }

});