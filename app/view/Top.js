/**
 * 头部
 * */
Ext.define("wzqr.view.Top", {
//    extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    xtype: 'xtop',
	//id:'xtopBox',
    height: 100,
    layout: 'fit',
    dockedItems: [
        {
            width: 120,
            xtype: 'image',
			//id:'logoBox',
            padding: 5,
            dock: 'left',
            src: 'resources/images/logo.jpg'
        }, {
            margin: '10 0 0 0',
            xtype: 'panel',
			cls:'rightBox',
			//id:'toprightBox',
            dock: 'right',
            width: 365,
            dockedItems: [
                {
                    xtype: 'panel',
					cls:'rightPanelBox',
					//id:'topPan',
                    dock: 'top',
                    layout: 'hbox',
                    dockedItems: [{
                            xtype: 'button',
							id:'quitBtn',
                            dock: 'right',
                            name:'quit',
                            text: '退出'
                        }],
                    defaults: {
                        //这里是作为一个默认属性 不应该设置id 这种全局唯一的东西！！谨记！！
                        xtype: 'component'
                    },
                    items: [
                        {
                            xtype: 'image',
							id:'perssImg',
                            src: 'resources/images/person.png'
                        }, {
                            html: '欢迎你，'
                        }, {
                            name: 'labelName',
                            html: 'name'
                        }, {
                            html: '，'
                        }, {
                            html: '您的角色是'
                        }, {
                            name: 'labelRole',
                            html: 'role'
                        }
                    ]
                }
            ]
        }
    ],
    items: [
        {
            xtype: 'panel',
			id:'panelxtop',
            layout: {
                type: 'vbox',
                align: 'stretch',
                pack: 'start'
            },
            dockedItems: [
                {
                    dock: 'bottom',
                    orientation: 'horizontal',
                    layout: {
                        pack: 'left',
                        align: 'left'
                    },
                    xtype: 'tabbar',
					id:'tabbarvBox',
                    ui: 'wzmaintab',
//                    xtype: 'container',
                    margin: '0 0 0 30',
//                    layout: {
//                        type: 'hbox',
//                        pack: 'start',
//                        align: 'stretch'
//                    },
                    defaults: {
                        xtype: 'tab',
						//id:'defBox',
                        closable: false
                    },
                    items: [
//                        {
//                            text: 'tab'
//                        }, {
//                            text: 'tab'
//                        }, {
//                            text: 'tab'
//                        }
                    ]
                }
            ],
            items: [
                {
//            left:10,
                    xtype: 'component',
					id:'titvBox',
                    margin: '20 0 0 10',
                    style: 'font-size:26px;',
                    html: '温州市“580海外精英引进计划”网上申报系统'
                }
            ]
        }
    ]
});