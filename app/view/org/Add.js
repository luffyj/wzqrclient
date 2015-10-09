Ext.define("wzqr.view.org.Add", {
    extend: 'Ext.window.Window',
    requires: ['Ext.form.field.ComboBox'],
    xtype: 'xorgadd',
	id:'worgadd',
    title: '添加部门',
    style: 'background:red;',
    width: 558, // height/goldraid(0.618)
    height: Ext.isIE?345:296,
//    html:'???'
    layout: 'fit',
    buttons: [
        {
            disabled: true,
			cls:'worgBtn',
            name: 'save',
            text: '保存'
        }
    ],
    items: [
        {
            listeners: {
                validitychange: function(form, valid) {
                    var button = form.owner.up('xorgadd').down('button[name=save]');
                    if (valid) {
                        button.enable();
                    } else {
                        button.disable();
                    }
                }
            },
            // height -36
            xtype: 'form',
				id:'worgForm',
            margin: 5,
            layout: 'form',
            style: 'background:blue;',
//            layout: {
//                type: 'form'
////                type: 'vbox',
////                align: 'stretchmax'
//            },
            items: [
//                {
//                    // 单位名称 部门类型
//                    xtype: 'textfield',
//                    fieldLabel: '单位名称',
//                    name: 'name',
//                    emptyText: '请输入单位名称',
//                    blankText: '请输入单位名称',
//                    //<debug>
////                    value: '中国核爆控制中心',
//                    //</debug>
//                    enableKeyEvents: true,
//                    listeners: {
//                        keypress: function(text, e) {
//                            text.bySelect = false;
//                        }
//                    },
//                    allowBlank: false
//                },
                {
                    xtype: 'combobox',
                    fieldLabel: '部门类型',
                    name: 'type',
                    emptyText: '请选择或输入单位类型',
                    blankText: '请选择或输入单位类型',
                    store: [
                        '部门', '县市区', '高校', '科研院所', '国有企业'
                    ],
                    editable: false,
                    allowBlank: false,
                    listeners: {
                        select: function(combo, records, eOpts) {
                            //选择的值
                            var selected = combo.getValue();
                            if (selected) {
                                var subType = combo.up('form').down('combobox[name=name]');
                                subType.setValue(null);
                                var subStores;
                                switch (selected) {
                                    case '部门':
                                    case '国有企业':
                                        subType.setEditable(true);
                                        subType.bindStore([]);
                                        break;
                                    case '县市区':
                                        subStores = ['鹿城区', '瓯海区', '龙湾区', '瑞安市', '乐清市', '永嘉县', '洞头县', '平阳县', '文成县', '泰顺县', '苍南县', '经济开发区','瓯江口新区'];
                                        break;
                                    case '高校':
                                        subStores = ['温州医科大学', '温州大学', '温州肯恩大学', '温州科技职业学院', '温州职业技术学院', '浙江工贸职业技术学院','温州大学城市学院'];
                                        break;
                                    case '科研院所':
                                        subStores = ['浙江省亚热带作物研究所', '浙江省海洋水产养殖研究所', '浙江温州轻工研究院', '温州市工业科学研究院', '温州市农业科学研究院', '国家大院名校温州研究院', '华中科技大学温州先进制造技术研究院', '兰州理工大学温州泵阀工程研究院'];
                                        break;
                                }
                                if (subStores) {
                                    subType.setEditable(false);
                                    subType.bindStore(subStores);
                                }
                            }
                        }
                    }
                }, {
                    fieldLabel: '单位名称',
                    xtype: 'combobox',
                    name: 'name',
                    emptyText: '请选择或输入单位名称',
                    blankText: '请选择或输入单位名称',
                    listeners: {
                        select: function(combo, records, eOpts) {
                            var name = combo.up('form').down('combobox[name=name]');
                            if (!name.getValue() || name.getValue() === '' || name.bySelect) {
                                name.setValue(combo.getValue());
                                name.bySelect = true;
                            }
                        }, keypress: function(combo, e) {
                            combo.bySelect = false;
                        }
                    },
                    allowBlank: false,
                    store: []
                }, {
                    xtype: 'textfield',
                    fieldLabel: '联系人',
                    name: 'contact.people',
                    emptyText: '请输入联系人',
                    //<debug>
                    value: '蒋某某某',
                    //</debug>
                    blankText: '请输入联系人',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
                    fieldLabel: '联系电话',
                    //<debug>
                    value: '057778787877',
                    //</debug>
                    name: 'contact.phone',
                    emptyText: '请输入联系电话'
                }, {
                    xtype: 'textfield',
                    fieldLabel: '用户名',
                    name: 'loginName',
                    emptyText: '请输入用户名',
                    //<debug>
                    value: 'jmmm',
                    //</debug>
                    blankText: '请输入用户名',
                    allowBlank: false

                }, {
                    xtype: 'textfield',
                    fieldLabel: '密码',
                    name: 'password',
                    emptyText: '请输入密码',
                    //<debug>
                    value: '123',
                    //</debug>
                    blankText: '请输入密码',
                    allowBlank: false
//                    ,
//                    queryMode: 'local',
//                    displayField: 'name',
//                    valueField: 'abbr',
//                }, {
//                    //联系人  联系电话
//                }, {
//                    //用户名 
//
//                }, {
//                    //密码
                }
            ]
        }
    ]
});