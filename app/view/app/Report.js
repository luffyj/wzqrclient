Ext.define('wzqr.view.app.Report', {
    extend: 'Ext.panel.Panel',
    alias: 'widget.xappreport',
    requires: [
        'Ext.panel.Panel',
        'Ext.Img',
        'Ext.form.Label'
    ],
    height: 250,
    width: 160,
    layout: 'border',
    title: '',
    titleCollapse: false,
    initComponent: function() {
        var me = this;

        Ext.applyIf(me, {
            items: [
                {
                    xtype: 'panel',
                    region: 'north',
                    height: 23,
                    style: {
                        'background-image': 'url(\'resources/images/groupheader.png\')'
                    },
                    title: '',
                    items: [
                        {
                            xtype: 'image',
                            height: 16,
                            width: 16,
                            src: 'resources/images/group.png'
                        },
                        {
                            xtype: 'label',
                            text: '统计信息'
                        },
                        {
                            xtype: 'label',
                            margin: '0 0 0 30',
                            text: '【总数'
                        },
                        {
                            xtype: 'label',
                            name: 'count',
                            text: '0'
                        },
                        {
                            xtype: 'label',
                            text: '】'
                        }
                    ]
                },
                {
                    xtype: 'panel',
                    region: 'center',
                    name:'subroot',
                    layout: 'accordion',
                    bodyPadding: 5,
                    title: '',
                    items: [
                        {
                            xtype: 'panel',
                            title: 'My Panel'
                        },
                        {
                            xtype: 'panel',
                            width: 150,
                            title: 'My Panel'
                        },
                        {
                            xtype: 'panel',
                            width: 150,
                            title: 'My Panel'
                        },
                        {
                            xtype: 'panel',
                            width: 150,
                            title: 'My Panel'
                        },
                        {
                            xtype: 'panel',
                            width: 150,
                            title: 'My Panel'
                        }
                    ]
                }
            ]
        });

        me.callParent(arguments);
    }

});