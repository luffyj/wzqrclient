/**
 * 根据textfield的高度 label的高度也应该是一定的
 * 一个label可以设置为几个field
 * 如果没有设置 也就不管了
 * */
Ext.define("wzqr.view.common.CommonLabel", {
    extend: 'Ext.form.Label',
    constructor: function(config) {
        if(config.rows){
            config.height = config.rows*32;
        }
        
        this.callParent(arguments);
    }
});