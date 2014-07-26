/**
 * 真正的form label
 * 主要是为了让他拥有独特的样式 所有单独成列
 * */
Ext.define("wzqr.view.common.TitleLabel", {
    extend: 'wzqr.view.common.CommonLabel',
    xtype: 'tlabel',
    cellCls: 'wzformlabel',
    tdAttrs: {
        align: 'right'
    },
    align: 'right'
});