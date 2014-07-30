/* 
 * 多行 而且可变的panel
 */
Ext.define("wzqr.view.util.MutliRowPanel", {
    extend: 'Ext.panel.Panel',
    xtype: 'xmutliwowpanel',
    dockedItems: [
        {
            xtype: 'toolbar',
            dock: 'top',
            ui: 'footer',
            defaults: {minWidth: 75},
            items: [
                {xtype: 'component', flex: 1},
                {xtype: 'button', text: '添加行', handler: function(button) {
                        button.up('xmutliwowpanel').newRow();
                    }},
                {xtype: 'button', text: '删除行', handler: function(button) {
                        button.up('xmutliwowpanel').deleteRow();
                    }}
            ]
        }
    ],
    initComponent: function() {
        var me = this;
        me.processConfig(me);
        me.callParent(arguments);
    },
    processConfig: function(config) {
        //默认展示几行 最大几行 以及在编辑时 将获取事件 并且自动绘制
        //baseFields
        Ext.applyIf(config, {
            minRows: 3,
            maxRows: 10,
            padding: 2
        });
        config.currentRows = 0;
        config.items = [];
        config.layout = 'column';

        //表格头
        Ext.Array.each(config.baseFields, function(field) {
            config.items.push({
                xtype: 'label',
                html: '<center>' + field.title + '</center>',
                columnWidth: field.columnWidth
            });
        });

        //当前已经有多少行了 请自行脑补
        for (var i = 1; i <= config.minRows; i++) {
            this.newRow(config.items);
        }        
    },
    newRow: function(tobe) {
        this.currentRows = this.currentRows + 1;
        Ext.Array.each(this.baseFields, function(field) {
            var config = Ext.applyIf({
                rowid: this.currentRows
            }, field);
            config.name = config.name + this.currentRows;
            if (tobe)
                tobe.push(config);
            else
                this.add(config);
        }, this);
    },
    deleteRow: function() {
        if (this.currentRows <= 0)
            return;
        while (true) {
            var found = this.down('field[rowid=' + this.currentRows + ']');
            if (!found)
                break;
            this.remove(found);
        }
        this.currentRows = this.currentRows - 1;
    }
});