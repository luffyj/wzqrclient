Ext.define('wzqr.view.app.view.HTML', {
    extend: 'Ext.Component',
    alias: 'widget.xappviewhtml',
    initComponent: function () {
        var me = this;
        me.p1 = /<font[^<>]+>/g;
        me.p2 = /font-size:\s*[^;]+;\s*font-family:[^;]+;/ig;
        me.p3 = /font-family:[^;]+;/ig;
        me.p4 = /font:[^;]+;/ig;
        me.p5 = /font-size:[^;]+;/ig;
        //me.p2 = /<font\s+face="\w+"\s*>/;
        me.callParent(arguments);
    },
    setValue: function (value) {
        if (Ext.isDate(value)) {
            this.html = (Ext.Date.format(value, 'Y年m月d日'));
        } else {
            if(value && value.replace){
                value = value.replace(this.p1,'<font face="宋体">');
                value = value.replace(this.p2,'');
                value = value.replace(this.p3,'');
                value = value.replace(this.p4,'');
                value = value.replace(this.p5,'');
            }
//            if (console && console.info) {
//                console.info(value);
//            }
            this.html = (value);
        }
    }

});