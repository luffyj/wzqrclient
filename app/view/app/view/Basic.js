Ext.define('wzqr.view.app.view.Basic', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewbasic',
    requires: [
        'wzqr.view.common.TitleLabel',
        'Ext.form.Label',
        'Ext.form.field.Display'
    ],
    padding: 10,
    layout: {
        type: 'table',
        columns: 6,
        tableAttrs: {
            wzform: 1,
            style: {
                width: '100%'
            }
        }
    },
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'label',
                    cellCls: 'wzformborder',
                    colspan: 6,
                    tdAttrs: {
                        height: 20
                    },
                    height: 10,
                    html: '<center>温州市“580海外精英引进计划”申报书</center><br/><center>（'+me.app.get('type')+'）</center>',
                    text: ''
                },
                {
                    xtype: 'tlabel',
                    colspan: 2,
                    html: '',
                    text: '牵头单位机构'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'orgSubName'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 78
                    },
                    html: '',
                    text: '填表时间'
                },
                {
                    xtype: 'xappviewhtml',
                    cellCls: 'wzformborder',
                    colspan: 2,
                    fieldLabel: '',
                    name: 'submitDate'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '申报类型',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'type'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '编号'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 2,
                    fieldLabel: '',
                    name: 'number'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 120

                    },
                    html: '',
                    text: '申报人',
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '中文'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'realName'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '英文'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'realEnglishName'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '申报单位',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'appOrgName'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '专业领域',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'specialty'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '联系人',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'people'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 120

                    },
                    html: '',
                    text: '联系电话',
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '办公'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'phone'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '手机'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 4,
                    fieldLabel: '',
                    name: 'mobile'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 120

                    },
                    html: '',
                    text: '姓名',
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '中文'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'realName'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '性别'
                },
                {
                    xtype: 'xappviewhtml',
                    tdAttrs: {
//                        align: 'right',
                        width: 106
                    },
                    cellCls: 'wzformborder',
                    fieldLabel: '',
                    name: 'sex'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'center',
                        width: 160
                    },
                    html: '',
                    text: '照片',
                    rowspan: 7
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '外文'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'realEnglishName'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '出生日期'
                },
                {
                    xtype: 'xappviewhtml',
                    cellCls: 'wzformborder',
                    fieldLabel: '',
                    name: 'birthDate'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '出生地',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'birthPlace'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '国籍'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'nationality'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 120

                    },
                    html: '',
                    text: '毕业院校及 专业、学位',
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '中文'
                },
                {
                    xtype: 'xappviewhtml',
                    cellCls: 'wzformborder',
                    height: 25,
                    style: {
                        'line-height': '25px'
                    },
                    colspan: 3,
                    fieldLabel: '',
                    name: 'mgchina'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '英文'
                },
                {
                    xtype: 'xappviewhtml',
                    cellCls: 'wzformborder',
                    height: 25,
                    style: {
                        'line-height': '25px'
                    },
                    colspan: 3,
                    fieldLabel: '',
                    name: 'mgenglish'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 120

                    },
                    html: '',
                    text: '回国前工作单位及职务',
                    rowspan: 2
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '中文'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 3,
                    fieldLabel: '',
                    name: 'foreignJobChinese'
                },
                {
                    xtype: 'tlabel',
                    tdAttrs: {
                        align: 'right',
                        width: 64
                    },
                    html: '',
                    text: '英文'
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    colspan: 3,
                    fieldLabel: '',
                    name: 'foreignJobEnglish'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '公司名称及职务',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'employer'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '职务（岗位）',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'position'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '公司地址',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'employerAddress'
                },
                {
                    xtype: 'tlabel',
                    html: '',
                    text: '邮编',
                    colspan: 2
                },
                {
                    xtype: 'displayfield',
                    cellCls: 'wzformborder',
                    cls: 'nomargin',
                    fieldLabel: '',
                    name: 'zip'
                }
            ]
        });

        me.callParent(arguments);
    }

});