Ext.define('wzqr.view.app.view.App', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewapp',
    requires: [
        'wzqr.view.app.view.Work',
        'wzqr.view.app.view.Education',
        'wzqr.view.app.view.AppQuick',
        'wzqr.view.app.view.Basic',
        'wzqr.view.app.view.HTML',
        'wzqr.view.app.view.EntInfo1',
        'wzqr.view.app.view.Project',
        'wzqr.view.app.view.Patent',
        'wzqr.view.app.view.Paper',
        'Ext.panel.Panel',
        'Ext.form.Label'
    ],
    height: 736,
    width: 957,
    layout: 'border',
    title: '申报信息',
    initComponent: function() {
        var me = this;

        //在这里根据传入的参数 构建大的子参数 然后直接使用
        var quickMenus = [{
                xtype: 'label',
                margin: '10 10 10 20',
                text: '快速导航'
            },
            {
                xtype: 'xappviewquick',
                targetid: 'xappviewbasicid',
                html: '基本信息'
            },
            {
                xtype: 'xappviewquick',
                targetid: 'xappvieweducationid',
                html: '教育经历'
            },
            {
                xtype: 'xappviewquick',
                targetid: 'xappviewworkid',
                html: '工作经历'
            }];

        var mainPanels = [{
                xtype: 'xappviewbasic',
                id: 'xappviewbasicid',                
                app: me.app
            },
            {
                xtype: 'xappvieweducation',
                id: 'xappvieweducationid'
            },
            {
                xtype: 'xappviewwork',
                id: 'xappviewworkid'
            }];

        if ('创业人才' === me.app.get('type')) {
            Ext.Array.push(quickMenus, [
                {
                    xtype: 'label',
                    text: '企业发展情况、优势和前景'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent1',
                    html: '1、企业基本情况'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent2',
                    html: '2、资本构成和股权结构'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent3',
                    html: '3、技术团队和管理团队'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent4',
                    html: '4、创业项目'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent5',
                    html: '5、市场前景'
                },
                {
                    xtype: 'label',
                    text: '申报情况'
                }
            ]);

            Ext.Array.push(mainPanels, [{
                    xtype: 'panel',
//                    padding: 10,
                    items: [
                        {
                            xtype: 'label',
                            padding: 10,
                            text: '企业发展情况、优势和前景'
                        },
                        {
                            xtype: 'panel',
//                            padding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'label',
                                    padding: 10,
                                    id: 'appviewent1',
                                    text: '1、企业基本情况'
                                },
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'entInfo'
                                },
                                {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    padding: 10,
                                    id: 'appviewent2',
                                    text: ' 2、资本构成和股权结构'
                                },
                                {
                                    xtype: 'xappviewentinfo1'
//                                    cls:'simpleborder',
//                                    name: 'partnersmsg'
                                },
//                                {
//                                    xtype: 'xappviewhtml',
//                                    cls:'simpleborder',
//                                    name: 'partnersmsg'
//                                },
                                {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    padding: 10,
                                    id: 'appviewent3',
                                    text: '3、技术团队和管理团队'
                                },
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'entTeam'
                                },
                                {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    padding: 10,
                                    id: 'appviewent4',
                                    text: '4、创业项目'
                                },
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'entProject'
                                },
                                {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    id: 'appviewent5',
                                    padding: 10,
                                    text: '5、市场前景'
                                },
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'entPlan'
                                }
                            ]
                        }
                    ]
                }]);
        } else {

            Ext.Array.push(quickMenus, [
                {
                    xtype: 'label',
                    text: '专长及代表性成果'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent1',
                    html: '1、个人专长'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent2',
                    html: '2、主要项目'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent3',
                    html: '3、论著(论文)'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent4',
                    html: '4、专利'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent5',
                    html: '5、产品'
                },
                {
                    xtype: 'xappviewquick',
                    margin: '0 0 0 22',
                    targetid: 'appviewent6',
                    html: '6、其他'
                },
                {
                    xtype: 'xappviewquick',
                    targetid: 'xappviewplanid',
                    html: '工作设想'
                },
                {
                    xtype: 'xappviewquick',
                    targetid: 'xappviewagreementid',
                    html: '竞业禁止协议'
                }
            ]);

            Ext.Array.push(mainPanels, [{
                    xtype: 'panel',
//                    padding: 10,
                    items: [
                        {
                            xtype: 'label',
                            padding: 10,
                            text: '专长及代表性成果'
                        },
                        {
                            xtype: 'panel',
//                            padding: 10,
                            title: '',
                            items: [
                                {
                                    xtype: 'label',
                                    padding: 10,
                                    id: 'appviewent1',
                                    text: '1、个人专长'
                                },
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'expertTo'
                                },
                                {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    padding: 10,
                                    id: 'appviewent2',
                                    text: ' 2、领导参与过的主要项目'
                                },
                                {
                                    xtype: 'xappviewproject'
//                                    cls:'simpleborder',
//                                    name: 'projectsmsg'
                                },
                                {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    padding: 10,
                                    id: 'appviewent3',
                                    text: '3、论著(论文)'
                                },
                                {
                                    xtype: 'xappviewpaper'
//                                    cls:'simpleborder',
//                                    name: 'papersmsg'
                                },
                                {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    padding: 10,
                                    id: 'appviewent4',
                                    text: '4、专利'
                                },
                                {
                                    xtype: 'xappviewpatent'
//                                    cls:'simpleborder',
//                                    name: 'patentsmsg'
                                },
                                {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    id: 'appviewent5',
                                    padding: 10,
                                    text: '5、产品'
                                },
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'product'
                                }, {
                                    html: '&nbsp'
                                },
                                {
                                    xtype: 'label',
                                    id: 'appviewent6',
                                    padding: 10,
                                    text: '5、其他'
                                },
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'otherProduct'
                                }
                            ]
                        }
                    ]
                }, {
                    xtype: 'panel',
                    margin:'10 0 0 0',
//                    padding: 10,
                    id: 'xappviewplanid',
                    items: [
                        {
                            xtype: 'label',
                            padding: 10,
                            text: '工作设想'
                        },
                        {
                            xtype: 'panel',                            
//                            padding: 10,
                            items: [
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'objectives'
                                }
                            ]
                        }
                    ]
                }, {
                    xtype: 'panel',
                    margin:'10 0 0 0',
//                    padding: 10,
                    id: 'xappviewagreementid',
                    items: [
                        {
                            xtype: 'label',
                            padding: 10,
                            text: '竞业禁止协议'
                        },
                        {
                            xtype: 'panel',
//                            padding: 10,
                            items: [
                                {
                                    xtype: 'xappviewhtml',
                                    cls:'simpleborder',
                                    name: 'agreement'
                                }
                            ]
                        }
                    ]
                }
            ]);

        }

        Ext.Array.push(quickMenus, [
            {
                xtype: 'xappviewquick',
                targetid: 'downloadpdfid',
                html: '附件'
            }
        ]);

        Ext.Array.push(mainPanels, [
            {
                xtype: 'button',
                name: 'downloadpdf',
                id: 'downloadpdfid',
                margin: '0 0 0 20',
                text: '下载附件'
            }
        ]);

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'west',
                    width: 209,
                    bodyStyle: {
                        'background-image': 'url("resources/images/appviewbk.png")',
                        'background-size': '100%',
                        'background-repeat': 'no-repeat'
                    },
                    padding: 10,
                    bodyPadding: 0,
                    layout: {
                        type: 'vbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'panel',
                            padding: 10,
                            width: 209,
                            bodyPadding: 0,
                            layout: {
                                type: 'vbox',
                                align: 'stretch'
                            },
                            items: quickMenus
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    padding: 0,
                    layout: 'auto',
                    autoScroll: true,
                    id: 'xappviewscrollable',
                    items: [
                        {
                            xtype: 'panel',
                            items: mainPanels
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
        
    }

});