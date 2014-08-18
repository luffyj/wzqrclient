/**
 * 在xappviewscrollable中 移动 传入目标和xappviewbasicid的y差别
 * */
Ext.define('wzqr.view.app.view.AppQuick', {
    extend: 'Ext.Component',
    alias: 'widget.xappviewquick',
    style: {
        color: 'blue'
    },
    autoEl: {
        tag: 'a',
        href: '#'
    },
    initComponent: function() {
        var me = this;

        me.listeners = {
            el: {
                click: function(e, t) {
                    var box = Ext.getCmp('xappviewscrollable');

                    var basic = Ext.getCmp('xappviewbasicid');
                    var my = Ext.getCmp(me.targetid);                    
                    box.body.scrollTo('top', my.el.getY() - basic.el.getY());
                }
            }
        };

        me.callParent(arguments);
    }
});