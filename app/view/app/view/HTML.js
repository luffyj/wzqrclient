Ext.define('wzqr.view.app.view.HTML', {
    extend: 'Ext.Component',
    alias: 'widget.xappviewhtml',
    initComponent: function() {
        var me = this;

        me.callParent(arguments);
    },
    setValue: function(value) {
        if (Ext.isDate(value)) {
            this.html = (Ext.Date.format(value, 'Y年m月d日'));
        } else {
            this.html = (value);
        }
    }

});