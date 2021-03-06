Ext.define("wzqr.view.app.edit.Cover", {
    extend: 'Ext.panel.Panel',
    xtype: 'xappeditcover',
    title: '封面',
    id:'coverTab',
    layout: {
        type: 'table',
        // The total column count must be specified here
        columns: 10,
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
            forId: 'myFieldId',
            html: '编号<br/>number',
            tdAttrs: {
                align: 'right'
            },
            colspan: 2
        }, {
            xtype: 'cfield',
            xxtype: 'textfield',
            colspan: 8,
            name: 'number',
            RemovedemptyText: '请输入编号',
            msg: '(由温州市委组织部填写。)'
//        }, {
//            xtype: 'mlabel',
//            html: '(由温州市委组织部填写。)',
//            colspan: 4
        },
        {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '申报类型<br/>Application Type',
            tdAttrs: {
                align: 'right'
            },
            colspan: 2
        }, {
            xtype: 'cfield',
            xxtype: 'combobox',
            store: [
                '创新人才', '创业人才'
            ],
            colspan: 8,
            name: 'type',
            RemovedemptyText: '请选择申报类型',
            blankText: '请选择申报类型',
            allowBlank: false
        },
        {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '申报人<br/>Applican',
            tdAttrs: {
                align: 'right'
            },
            rowspan: 2
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '中文<br/>Chinese',
            tdAttrs: {
                align: 'right'
            }
        }, {
            xtype: 'cfield',
            xxtype: 'textfield',
            colspan: 8,
            name: 'realName',
            RemovedemptyText: '请输入中文名',
            blankText: '请输入中文名',
            allowBlank: false
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '英文<br/>English/Pinyin',
            tdAttrs: {
                align: 'right'
            }
        }, {
            xtype: 'cfield',
            xxtype: 'textfield',
            colspan: 8,
            name: 'realEnglishName',
            RemovedemptyText: '请输入英文名',
            blankText: '请输入英文名',
            allowBlank: false,
            msg: '(如无外文名，请填写汉语拼音。)'
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '申报单位<br/>Employer',
            tdAttrs: {
                align: 'right'
            },
            colspan: 2,
            rowspan: 1
        }, {
            xtype: 'cfield',
            xxtype: 'textfield',
            colspan: 8,
            name: 'appOrgName',
            RemovedemptyText: '请输入申报单位',
            blankText: '请输入申报单位',
            allowBlank: false,
            msg: '(指用人单位。填写时，请将单位的隶属关系写清楚。比如，生命科学院申报，需填写“浙江大学生命科学院”。)',
            layout: 'vbox'
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '专业领域<br/>Area of Specialty',
            tdAttrs: {
                align: 'right'
            },
            colspan: 2
        }, {
            xtype: 'cfield',
            xxtype: 'combobox',
            store: 'SpecialtyStore',
            colspan: 8,
            name: 'specialty',
            RemovedemptyText: '请选择专业领域',
            blankText: '请选择专业领域',
            allowBlank: false
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '专业方向<br/>Professional Field',
            tdAttrs: {
                align: 'right'
            },
            colspan: 2
        }, {
            xtype: 'cfield',
            xxtype: 'textfield',
            colspan: 8,
            name: 'profession',
            RemovedemptyText: '请输入专业方向',
            blankText: '请输入专业方向',
            allowBlank: false,
            msg: '(请填写具体的专业方向。例如，数理科学领域的凝聚态物理。)'
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '联系人<br/>Contact Person',
            tdAttrs: {
                align: 'right'
            },
            colspan: 2
        }, {
            xtype: 'cfield',
            xxtype: 'textfield',
				cls:'covnameInp',
            colspan: 8,
            name: 'people',
            width:100,
            RemovedemptyText: '请输入联系人',
            blankText: '请输入联系人',
            allowBlank: false,
            msg: '(指申报单位的联系人，联系人应为具体负责该项工作的人员，熟悉申报人、申报材料的相关情况。)'
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '联系电话<br/>Telephone Number',
            tdAttrs: {
                align: 'right'
            },
            rowspan: 2
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '单位电话<br/>Phone',
            tdAttrs: {
                align: 'right'
            }
        }, {
            xtype: 'cfield',
            xxtype: 'textfield',
            colspan: 8,
            name: 'phone',
            RemovedemptyText: '请输入单位电话',
            blankText: '请输入单位电话',
            allowBlank: false,
            msg: '(指申报单位的联系电话，保证联系畅通。)'
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '手机<br/>Mobile',
            tdAttrs: {
                align: 'right'
            }
        }, {
            xtype: 'cfield',
            xxtype: 'textfield',
            colspan: 8,
            name: 'mobile',
            RemovedemptyText: '请输入手机',
            blankText: '请输入手机',
            allowBlank: false,
            msg: '(请同时填写手机号码，保证联系畅通。)'
        }, {
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '填表日期<br/>Data of Completion',
            tdAttrs: {
                align: 'right'
            },
            colspan: 2
        }, {
            xtype: 'cfield',
            xxtype: 'datefield',
            format:'Y年m月d日',
            colspan: 8,
            name: 'comletionDate',
            RemovedemptyText: '请选择填表日期',
            submitFormat:'time'
        }
    ]
});