/* 
 * 多行 而且可变的panel
 * 
 * 增加功能 支持只读模式
 * readOnly:true
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
        if (config.readOnly) {
            config.dockedItems = null;
        }

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
            config.items.push(Ext.apply({
                xtype: 'label',
                html: '<center>' + field.title + '</center>',
                style: {
                    'background-color': '#dbeaf8'
                },
                columnWidth: field.columnWidth
            }, config.readOnly ? {
                cls: 'wztableelement'
            } : {}));
        });

        //当前已经有多少行了 请自行脑补
        if (!config.readOnly)
            for (var i = 1; i <= config.minRows; i++) {
                this.newRow(config.items);
            }
    },
    newRow: function(tobe) {
        if (this.currentRows >= this.maxRows)
            return;
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
    }, beforeLoadRecord: function(record) {
        //在load之前 如果发现有更多的存在 则立刻创建！
        //原则应该是任意一个数字有效
        //第一个事情 先提取namelist
        var names = [];
        Ext.Array.each(this.baseFields, function(field) {
            names.push(field.name);
        });

        while (true) {
            if (this.currentRows >= this.maxRows)
                return;
            var newRow = this.currentRows + 1;
            if (Ext.Array.some(names, function(name) {
                var data = record.get(name + newRow);
                return data && data !== '';
            })) {
                this.newRow();
            } else {
                return;
            }
        }
    }
});