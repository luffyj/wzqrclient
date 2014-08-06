Ext.define("wzqr.view.Login", {
//    extend: 'Ext.container.Container',
    extend: 'Ext.panel.Panel',
    requires: [
        'Ext.draw.Text',
        'Ext.form.field.Checkbox',
        'Ext.layout.container.Form',
        'Ext.ux.layout.Center'
    ],    
    xtype: 'xlogin',
    layout: 'ux.center',
//<debug>                        
    dockedItems: [{
            dock: 'top',
            xtype: 'text',
            text: ''
        }, {
            dock: 'bottom',
            xtype: 'text',
            text: ''
        }, {
            dock: 'left',
            xtype: 'text',
            degrees: 90,
            text: ''
        }, {
            dock: 'right',
            xtype: 'text',
            degrees: 90,
            text: ''
        }],
//</debug>                        
    items: [
        {
            xtype: 'form',
            id:'loginBox',
//            url:Utils.toApi('ajaxLogin'),            
            url: Utils.toApi('login'),
            standardSubmit: false,
            jsonSubmit: false,
            baseParams: {
                ajax: true
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
//            layout: 'form',
            padding: '40 0 0 0',
            center: true,
            title: '登录',
            width: 330,
            maxHeight: 340,
            defaults: {
                padding: '15 15 0 15'
            },
            items: [
                {
                    xtype: 'textfield',
						cls:'nameBox',
                    name: 'username',
                    emptyText: '请输入登录账号',
                    blankText: '请输入登录账号',
                    allowBlank: false
                }, {
                    xtype: 'textfield',
						cls:'passBox',
                    name: 'password',
                    inputType: 'password',
                    emptyText: '请输入登录密码',
                    blankText: '请输入登录密码',
                    allowBlank: false
                }, {
                    xtype: 'image',
						cls:'wlogimgBox',
                    style: 'cursor: pointer;',
                    alt: '点击刷新',
                    name:'ccdd',
                    title: '点击刷新',
//                            style:'width:100%;height:100%;',
                    src: Utils.toApi('jcaptcha.jpg'),
                    padding: 0,
                    height: 100,
                    listeners: {
                        el: {                            
                            click: function(e,t) {                                                                
                                var dom = this.dom;
                                var src = dom.src;
                                if(!dom.orcSrc){
                                    dom.orcSrc = src;
                                }
                                dom.src = dom.orcSrc+'?rdm='+new Date().getTime();
                            }
                        }
                    }
                }, {
                    xtype: 'container',
						cls:'yzmBox',
                    padding: '5 0 0 15',
                    layout: {
                        type: 'hbox',
							cls:'whbox',
                        align: 'stretch'
                    },
                    items: [
                        {
                            xtype: 'textfield',
								cls:'wtextBox',
                            name: 'jcaptcha',
                            emptyText: '请输入验证码',
                            blankText: '请输入验证码',
                            allowBlank: false,
                            margin: '0 20 0 0'
                        }, {
                            margin: '0 0 0 10',
                            xtype: 'label',
								cls:'wforgBox',
                            cls:'pass',
                            text: '忘记密码？'
                        }
                    ]
                }
//                , {
//                    xtype: 'checkboxfield',
//                    boxLabel: '自动登录',
//                    name: 'rememberme'
//                }
            ],
            //buttonAlign is fine
            //but 
            //NOTE: The prefered way to specify toolbars is to use the dockedItems config. 
            //Instead of buttonAlign you would add the layout: 
            //{ pack: 'start' | 'center' | 'end' } option to the dockedItem config.
//            dockedItems:[{
//                    dock: 'bottom',
//                    pack:'center'
//            }],
            buttonAlign: 'center',
            buttons: [
                {
                    formBind: true,
                    text: '立即登录',
						cls:'wsimiBox',
//<debug>               
                    tooltip: '',
//</debug>                    
                    name: 'login'
                }
            ]
        }
    ],
    initComponent: function() {
        var me = this;
        me.callParent();
    }
});