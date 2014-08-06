/**
 * 1、统计信息——按单位性质统计，分“高校”、“院所”、“企业”。人才类型分为“创新人才”和“创业人才”两种。
 2、查询——按单位性质查询：“高校”、“院所”、“企业”（高校对应高校帐号，院所对应科研院所帐号，企业对应县市区、国企帐号）
 3、管理部门管理：
 ——部门类型
 （1）县市区、功能区（鹿城区、瓯海区、龙湾区、瑞安市、乐清市、永嘉县、洞头县、平阳县、文成县、泰顺县、苍南县、经济开发区）。
 （2）高校（温州医科大学、温州大学、温州肯恩大学、温州科技职业学院、温州职业技术学院、浙江工贸职业技术学院）。
 （3）科研院所（浙江省亚热带作物研究所、浙江省海洋水产养殖研究所、浙江温州轻工研究院、温州市工业科学研究院、温州市农业科学研究院、国家大院名校温州研究院、华中科技大学温州先进制造技术研究院、兰州理工大学温州泵阀工程研究院）。
 （4）国有企业（手填）。
 * */
Ext.define("wzqr.view.ManageOrg", {
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.grid.column.RowNumberer',
        'Ext.toolbar.Paging',
        'Ext.grid.column.Check',
        'Ext.grid.Panel',
        'wzqr.spring.grid.Panel'
    ],
    xtype: 'xmanageorg',
    layout: 'fit',
    dockedItems: [
        {
            dock: 'top',
            xtype: 'panel',
            items: [
                {
                    xtype: 'button',
                    margin: 5,
                    name: 'add',
                    text: '增加'
                }
            ]

        }
    ],
    items: [
        {
            xtype: 'jcgrid',
				cls:'glbmGrid',
            store: 'UnderOrg',
            viewConfig: {
                stripeRows: true
            },
            columnLines: true,
            columns: [
                {text: '序号', xtype: 'rownumberer', width: 80},
                {text: '单位名称', dataIndex: 'name', flex: 2},
                {text: '部门类型', dataIndex: 'type', flex: 1},
                {text: '联系人', flex: 1, dataIndex: 'contact.people'},
                {text: '联系电话', flex: 1, dataIndex: 'contact.phone'},
                {text: '登录名', flex: 1, dataIndex: 'managerLoginName'},
                {xtype: 'checkcolumn', text: '启用状态', dataIndex: 'managerEnabled', editable: true}
            ],
            dockedItems: [{
                    xtype: 'pagingtoolbar',
                    store: 'UnderOrg',
                    dock: 'bottom',
                    displayInfo: true
                }],
            height: 300
        }

        //            selModel: 'rowmodel',
//            columns: [
//                {text: 'ID', dataIndex: 'id', width: 300},
//                {text: 'DESCRIPTION', dataIndex: 'description', width: 300,
//                    editor: {
//                        xtype: 'textfield',
//                        allowBlank: false
//                    }}
//            ],
//            plugins: [
//                Ext.create('Ext.grid.plugin.RowEditing', {
//                    clicksToEdit: 1
//                })
//            ],
//            dockedItems: [{
//                    xtype: 'toolbar',
//                    items: [{
//                            action: 'add',
//                            text: 'Add Something'
//                        }, '-', {
//                            action: 'remove',
//                            text: 'Remove Something',
//                            disabled: true
//                        }]
//                }],
//            width: 600,
    ]
});