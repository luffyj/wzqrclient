/**
 * 头部
 * */
Ext.define("wzqr.view.Top", {
//    extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    xtype: 'xtop',
    height: 100,
    layout: 'fit',
    dockedItems: [
        {
            width: 130,
            xtype: 'image',
            padding: 5,
            dock: 'left',
            src: 'resources/images/logo.jpg'
        }, {
            margin: '20 20 0 0',
            xtype: 'panel',
            dock: 'right',
            width: 420,
            dockedItems: [
                {
                    xtype: 'panel',
                    dock: 'top',
                    layout: 'hbox',
                    dockedItems: [{
                            xtype: 'button',
                            dock: 'right',
                            name:'quit',
                            text: '退出'
                        }],
                    defaults: {
                        xtype: 'component'
                    },
                    items: [
                        {
                            xtype: 'image',
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
                    margin: '20 0 0 30',
                    style: 'font-size:26px;',
                    html: '温州市“580海外精英引进计划”网上申报系统'
                }
            ]
        }
    ]
});