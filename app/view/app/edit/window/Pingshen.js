Ext.define('wzqr.view.app.edit.window.Pingshen', {
    extend: 'Ext.window.Window',
    alias: 'widget.xappeditpingshen',

    requires: [
        'wzqr.view.app.edit.Submit',
        'wzqr.view.app.edit.Xingshen',
        'wzqr.view.app.edit.Fushen',
        'wzqr.view.app.edit.Pingshen',
        'Ext.form.Panel',
        'Ext.tab.Panel',
        'Ext.tab.Tab'
    ],

    ui:'wzwindow',
		id:'psdialogBox1',
    height: 472,
    width: 706,
    layout: 'fit',
    title: '评审',
    
    constructor: function(app) {
        this.app = app;
        //对复审已通过的重审 无法继续通过
        this.callParent();
    },

    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
						id:'psdialogBox2',
                    layout: 'fit',
                    bodyPadding: 0,
                    title: '',
                    items: [
                        {
                            xtype: 'tabpanel',
								id:'psdialogBox3',
                            bodyPadding: 10,
                            activeTab: 3,
                            items: [
                                {
                                    xtype: 'appeditsubmit',
										id:'psdialogBox4',
                                    removeButtons: true
                                },
                                {
                                    xtype: 'appeditxingshen',
										id:'psdialogBox5',
                                    removeButtons: true
                                },
                                {
                                    xtype: 'appeditfushen',
										id:'psdialogBox6',
                                    removeButtons: true,
                                    height: 492
                                },
                                {
                                    xtype: 'appeditpingshen',
										id:'psdialogBox7',
                                    nofs:me.app.get('status')==='复审通过'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },

    toReason: function() {
        return this.down('textarea[name=managerReason]').getValue();
    }

});