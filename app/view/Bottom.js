/**
 * 底部
 * */
Ext.define("wzqr.view.Bottom", {
    extend: 'Ext.panel.Panel',
    xtype:'xbottom',
//    height:80,
    width:'100%',
    layout:{
        type:'hbox',
        align: 'stretch',
        pack:'center'
    },
    items:[{        
        xtype:'component',
        html:'版权所有：温州市海外高层次人次引进工作专项办公室'
    }]
});