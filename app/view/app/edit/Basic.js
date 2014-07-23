/**
 * 1060


144 0.1358490566037736
97  0.0915094339622642
312  154 154    0.2943396226415094  0.1452830188679245
97   214  0.2018867924528302
255  128 0.2405660377358491  0.1207547169811321
160 0.1509433962264151



406 0.3830188679245283
80 0.0754716981132075
335 0.3160377358490566
 * */
Ext.define("wzqr.view.app.edit.Basic", {
    extend: 'Ext.panel.Panel',
    xtype: 'xappeditbasic',
    title: '基本信息',
    layout: {
        type: 'table',
        // The total column count must be specified here
        columns: 10,
        tableAttrs: {
            style: {
                width: '100%'
            }
        }
    },
    items: [
        {
            colspan: 2,
            xtype: 'tlabel',
            rowspan: 3,
            forId: 'myFieldId',
            html: '姓名<br/>name'
        }, {
            colspan: 1,
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '中文<br/>Chinese'
        }, {
            colspan: 2,
            xtype: 'cfield',
            xxtype: 'textfield',
            name: 'realName',
            emptyText: '请输入中文名',
            blankText: '请输入中文名',
            allowBlank: false
        }, {
            colspan: 1,
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '性别<br/>Sex'
        }, {
            colspan: 2,
            xtype: 'cfield',
            xxtype: 'textfield',
            name: 'sex',
            emptyText: '性别',
            blankText: '性别',
            allowBlank: false
        }, {
            colspan: 2,
            rowspan: 2,
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: ''
        },
        //外文
        {
            colspan: 1,
            xtype: 'tlabel',
            rowspan: 2,
            forId: 'myFieldId',
            html: '外文<br/>ForeignLanguage'
        }, {
            colspan: 2,
            xtype: 'cfield',
            xxtype: 'textfield',
            name: 'realEnglishName',
            emptyText: '请输入英文名',
            blankText: '请输入英文名',
            allowBlank: false,
            msg: '（如无外文名，请填写汉语拼音）',
            layout: 'auto'
        }, {
            colspan: 1,
            rowspan: 2,
            xtype: 'tlabel',
            forId: 'myFieldId',
            html: '出生日期<br/>Date of Birth'
        }, {
            colspan: 2,
            xtype: 'cfield',
            xxtype: 'datefield',
            name: 'realName',
            allowBlank: false
        }
//        ,{
//            colspan: 756,
//            xtype: 'tlabel',
//            rowspan: 2,
//            html:''
//        }
    ]
});