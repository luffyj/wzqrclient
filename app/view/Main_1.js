Ext.define('wzqr.view.Main', {
    extend: 'Ext.container.Container',
    requires: [
        'Ext.tab.Panel',
        'Ext.form.Panel',
        'Ext.button.Button',
        'Ext.form.field.Date',
        'Ext.layout.container.Border'
    ],
    xtype: 'app-main',
    layout: {
        type: 'border'
    },
    items: [{
            region: 'west',
            xtype: 'panel',
            title: 'west',
            width: 150
        }, {
            region: 'center',
            xtype: 'tabpanel',
            items: [
                {
                    title: 'Center Tab 1',
                    xtype: 'form',
                    method:'POST',
                    jsonSubmit:true,
                    url:'http://localhost:8084/wzqrserver/people',
                    waitTitle:'操作中',
                    defaultType: 'textfield',
                    items: [
                        {
                            fieldLabel: 'First Name',
                            name: 'firstName'
                        },
                        {
                            fieldLabel: 'Last Name',
                            name: 'lastName'
                        },
                        {
                            xtype: 'datefield',
                            fieldLabel: 'Date of Birth',
                            name: 'birthDate'
                        },{
                            xtype:'button',
                            text:'添加',
                            handler:function(){                                
                                this.up('form').submit({
                                    success:function(form,action){
                                        console.log('success',form,action);
                                        Ext.Msg.alert('','成功添加');
                                    },
                                    failure:function(form,action){
                                        console.log('failure',form,action);
                                    }
                                });
                            }
                        }
                    ]
                }
            ]
        }]
});