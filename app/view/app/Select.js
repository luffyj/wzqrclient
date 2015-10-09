Ext.define('wzqr.view.app.Select', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappselect',
    requires: [
        'Ext.form.field.Hidden',
        'Ext.form.Panel',
        'Ext.form.field.ComboBox',
        'Ext.toolbar.Toolbar',
        'Ext.button.Button'
    ],
    height: 81,
    width: 903,
    layout: 'fit',
    title: '',
    isAdmin: function() {
        var user = this.currentUser;
        if (!user)
            return false;
        var auths = user.authorities;
        return Ext.Array.some(auths, function(auth) {
            return auth.authority === 'admin';
        });
    },
    isCross: function() {
        var user = this.currentUser;
        if (!user)
            return false;
        var auths = user.authorities;
        return this.isAdmin() || Ext.Array.some(auths, function(auth) {
            return auth.authority === 'cross';
        });
    },
    initComponent: function() {
        var me = this;
        debug('currentUser', me.currentUser, me.isCross());

        me.addEvents(
                'query'
                );

        // create a array from 2012 to current year
        var years = [];
        var currentYear = new Date().getFullYear();
        var year = 2012;
        var countFlag = 0;
        while(year == 2012 || year <=currentYear){
            years[countFlag++] = ''+year;
            year++;
        }

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'form',
                    style: {
                        'border-width': '1px',
                        'border-style': 'solid'
                    },
                    defaults: {
                        labelAlign: 'right',
                        emptyText: '全部',
                        margin: '3 0 3 0'
                    },
                    layout: 'column',
                    bodyPadding: 10,
                    title: '',
                    items: [
                        {
                            xtype: 'combobox',
                            anchor: '100%',
                            columnWidth: 0.25,
                            fieldLabel: '申报批次',
                            name: 'batch',
                            store: years
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: me.isCross() ? 0.25 : 0.375,
                            fieldLabel: '申报人',
                            name: 'realName'
                        },
                        me.isCross() ? {
                            xtype: 'combobox',
                            columnWidth: 0.25,
                            store: 'SubOrg',
                            fieldLabel: '管理单位',
                            displayField: 'name',
                            name: 'subName'
                        } : {
                            xtype: 'hiddenfield',
                            name: 'subName'
                        },
                        {
                            xtype: 'textfield',
                            columnWidth: me.isCross() ? 0.25 : 0.375,
                            fieldLabel: '申报单位',
                            name: 'appOrgName'
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 0.25,
                            fieldLabel: '人才类型',
                            name: 'type',
                            store: [
                                '创新人才',
                                '创业人才'
                            ]
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 0.25,
                            fieldLabel: '专业领域',
                            name: 'specialty',
                            store: 'SpecialtyStore'
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 0.25,
                            fieldLabel: '单位性质',
                            name: 'appOrgType',
                            store: [
                                '县市区',
                                '高校',
                                '科研院所',
                                '国有企业'
                            ]
                        },
                        {
                            xtype: 'combobox',
                            columnWidth: 0.25,
                            fieldLabel: '申报状态',
                            name: 'status',
                            store: 'AppStatusStore'
                        }
                    ],
                    dockedItems: [
                        {
                            xtype: 'toolbar',
                            dock: 'right',
                            items: [
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var xappselect = button.up('xappselect');
                                        xappselect.doQuery();
                                    },
                                    text: '查询'
                                },
                                {
                                    xtype: 'button',
                                    handler: function(button, e) {
                                        var form = button.up('form');
                                        var xappselect = form.up('xappselect');
                                        form.getForm().getFields().each(function(field) {
                                            field.reset();
                                        });
                                        xappselect.doQuery();
                                    },
                                    text: '清除'
                                }
                            ]
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    },
    doQuery: function() {
        var form = this.down('form');
        this.fireEvent('query', this, form, form.getForm().getFields());
    }

});