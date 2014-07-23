/**
 * 一个容器 内嵌了一个具体的field 
 * 然后某个位置具体增加了一个msg
 * xxtype:..
 * msg:
 * layout..
 * colspan
 * rowspan
 * columnWidth
 * */
Ext.define("wzqr.view.common.CommonField", {
    extend: 'Ext.container.Container',
    requires: [
        'wzqr.view.common.MessageLabel'
    ],
    xtype: 'cfield',
    constructor: function(config) {
        var fieldConfig = {};
        Ext.apply(fieldConfig, config);

        delete fieldConfig.xxtype;
        delete fieldConfig.layout;
        delete fieldConfig.colspan;
        delete fieldConfig.rowspan;
        delete fieldConfig.columnWidth;
        fieldConfig.xtype = config.xxtype;
        
        if(!config.layout){
            config.layout = {
                type: 'hbox',
                align:'middle'
            };
        }
        
        delete config.width;
        
        this.callParent(arguments);

        this.add(fieldConfig);

        if (config.msg) {
            this.add({
                xtype: 'mlabel',
                html: config.msg
            });
        }
    }
});