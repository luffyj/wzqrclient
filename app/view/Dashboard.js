Ext.define("wzqr.view.Dashboard", {
//    extend: 'Ext.panel.Panel',
    extend: 'Ext.container.Container',
    xtype: 'xmydashboard',
    requires: [
        'wzqr.view.Bottom',
        'wzqr.view.Top',
        'Ext.draw.Text',
        'Ext.ux.layout.Center'
    ],
    layout: 'ux.center',
//    top:0,
    items: [{
            xtype: 'panel',
			//id:'aaa',
//            top:0,
//            width: 1024,
            layout: 'fit',
            dockedItems: [
                {
                    xtype: 'xtop',
					id:'headBox',
                    dock: 'top'
                }, {
                    xtype: 'xbottom',
					id:'footer',
                    dock: 'bottom'
                }
            ],
            items: [{
                    xtype: 'panel',
					id:'centerBox',
                    name: 'mainpanel',
                    layout: 'card'
                }]
        }],
    /**
     * 实际起作用的页面
     * */
    pages: null,
    // @private
    initComponent: function() {
        var me = this;
        me.callParent(arguments);

        var mainpanel = me.down('panel[name=mainpanel]');
        var tabBar = me.down('xtop tabbar');
        Ext.Array.each(me.pages, function(item, index) {
            var added = mainpanel.add(item);
            var cfg = item.tabConfig || {};
            var defaultConfig = {
                xtype: 'tab',
				id: 'menu' + index ,
                ui: tabBar.ui,
                card: added,
                disabled: item.disabled,
                closable: item.closable,
                hidden: item.hidden && !item.hiddenByLayout, // only hide if it wasn't hidden by the layout itself
                tooltip: item.tooltip,
                tabBar: tabBar
//                position: me.tabPosition
            };

            cfg = Ext.applyIf(cfg, defaultConfig);

            added.tab = tabBar.add(cfg);

            added.on({
                scope: me,
                enable: me.onItemEnable,
                disable: me.onItemDisable,
                beforeshow: me.onItemBeforeShow,
                iconchange: me.onItemIconChange,
                iconclschange: me.onItemIconClsChange,
                titlechange: me.onItemTitleChange
            });

            added.tab.on({
                scope: me,
                activate: me.onTabActivate
            });

            if (index === 0) {
//                debug(added.tab);
                tabBar.setActiveTab(added.tab);
//                added.tab.activate();
//                added.tab.setActive(true);
//                added.tab.click(added.tab);
//                tabBar.onClick();
//                added.tab.enable();
//                me.onTabActivate(added.tab);
            }

            if (added.isPanel) {
                if (added.rendered) {
                    if (added.header) {
                        added.header.hide();
                    }
                } else {
                    added.header = false;
                }
            }
        });
    },
    onTabActivate: function(tab) {
//        debug(tab);
        var mainpanel = this.down('panel[name=mainpanel]');
        mainpanel.getLayout().setActiveItem(tab.card);
    },
    /**
     * @private
     * Enable corresponding tab when item is enabled.
     */
    onItemEnable: function(item) {
        item.tab.enable();
    },
    /**
     * @private
     * Disable corresponding tab when item is enabled.
     */
    onItemDisable: function(item) {
        item.tab.disable();
    },
    /**
     * @private
     * Sets activeTab before item is shown.
     */
    onItemBeforeShow: function(item) {
//        if (item !== this.activeTab) {
//            this.setActiveTab(item);
//            return false;
//        }
    },
    /**
     * @private
     * Update the tab icon when panel icon has been set or changed.
     */
    onItemIconChange: function(item, newIcon) {
        item.tab.setIcon(newIcon);
    },
    /**
     * @private
     * Update the tab iconCls when panel iconCls has been set or changed.
     */
    onItemIconClsChange: function(item, newIconCls) {
        item.tab.setIconCls(newIconCls);
    },
    /**
     * @private
     * Update the tab title when panel title has been set or changed.
     */
    onItemTitleChange: function(item, newTitle) {
        item.tab.setText(newTitle);
    }
});