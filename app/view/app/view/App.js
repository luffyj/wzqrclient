Ext.define('wzqr.view.app.view.App', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappviewapp',
    requires: [
        'wzqr.view.app.view.Work',
        'wzqr.view.app.view.Education',
        'wzqr.view.app.view.AppQuick',
        'wzqr.view.app.view.Basic',
        'wzqr.view.app.view.HTML',
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
                            items: [
                                {
                                    xtype: 'label',
                                    margin: '10 10 10 20',
                                    text: '快速导航'
                                },                                
                                {
                                    xtype: 'xappviewquick',
                                    targetid:'xappviewbasicid',
                                    html: '基本信息'
                                },
                                {
                                    xtype: 'xappviewquick',
                                    targetid:'xappvieweducationid',
                                    html: '教育经历'
                                },
                                {
                                    xtype: 'xappviewquick',
                                    targetid:'xappviewworkid',
                                    html: '工作经历'
                                },
                                {
                                    xtype: 'label',
                                    text: '企业发展情况、优势和前景'
                                },
                                {
                                    xtype: 'xappviewquick',
                                    margin: '0 0 0 22',   
                                    targetid:'appviewent1',
                                    html: '1、企业基本情况'
                                },
                                {
                                    xtype: 'label',
                                    margin: '0 0 0 22',
                                    text: '2、资本构成和股权结构'
                                },
                                {
                                    xtype: 'label',
                                    margin: '0 0 0 22',
                                    text: '3、技术团队和管理团队'
                                },
                                {
                                    xtype: 'label',
                                    margin: '0 0 0 22',
                                    text: '4、创业项目'
                                },
                                {
                                    xtype: 'label',
                                    margin: '0 0 0 22',
                                    text: '5、市场前景'
                                },
                                {
                                    xtype: 'label',
                                    text: '申报情况'
                                },
                                {
                                    xtype: 'label',
                                    text: '附件'
                                }
                            ]
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    padding: 0,
                    layout: 'auto',
                    autoScroll: true,                    
                    id:'xappviewscrollable',
                    items: [
                        {
                            xtype: 'panel',
                            items: [
                                {
                                    xtype: 'xappviewbasic',
                                    id:'xappviewbasicid'
                                },
                                {
                                    xtype:'xappvieweducation',
                                    id:'xappvieweducationid'
                                },
                                {
                                    xtype:'xappviewwork',
                                    id:'xappviewworkid'
                                },                                
                                {
                                    xtype: 'panel',
                                    padding: 10,
                                    items: [
                                        {
                                            xtype: 'label',
                                            text: '企业发展情况、优势和前景'
                                        },
                                        {
                                            xtype: 'panel',
                                            padding: 10,
                                            title: '',
                                            items: [
                                                {
                                                    xtype: 'label',
                                                    id:'appviewent1',
                                                    text: '1、企业基本情况'
                                                },
                                                {
                                                    xtype: 'xappviewhtml',
                                                    name: 'entInfo'
                                                },
                                                {
                                                    xtype: 'label',
                                                    text: ' 2、资本构成和股权结构'
                                                },
                                                {
                                                    xtype: 'xappviewhtml',
                                                    name: 'zbgc'
                                                },
                                                {
                                                    xtype: 'label',
                                                    text: '3、技术团队和管理团队'
                                                },
                                                {
                                                    xtype: 'xappviewhtml',
                                                    name: 'entTeam'
                                                },
                                                {
                                                    xtype: 'label',
                                                    text: '4、创业项目'
                                                },
                                                {
                                                    xtype: 'xappviewhtml',
                                                    name: 'entProject'
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});