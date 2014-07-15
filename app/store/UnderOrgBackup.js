
/**
 * 使用findBySuperOrg 
 * load之前必须设置extraParams
 * */
Ext.define('wzqr.store.UnderOrg', {
    extend: 'Ext.data.Store',
    requires: [
        'wzqr.model.User'
    ],
    model: 'wzqr.model.Org',
    pageSize: 10,
    proxy: {
        type: 'springrest',
        url: Utils.toApi('api/org/search/findBySuperOrg')
    },
    listeners: {
        load: function(store, records, successful, eOpts) {
            if (successful) {
//                debug('卡主他');
                store.suspendEvent('load');
                store.suspendEvent('refresh');
                var conti = function() {
                    if (records.every(function(item) {
                        return item['_' + 'manager' + '_done'];
                    })) {
//                        debug('完成了');
                        store.resumeEvent('load');
                        store.resumeEvent('refresh');
                        store.fireEvent('refresh', store, eOpts);

//尝试手动触发
//                        var listeners = store.events.load.listeners,
//                                count = listeners.length;
//                        for (var i = 0; i < count; i++) {
//                            var listener = listeners[i];
//                            debug(listener);
//                            if (listener && listener.scope !== store && listener.fireFn.apply(listener.scope || store, [store, records, successful, eOpts]) === false) {
//                            }
//                        }

//                        store.fireEvent('load', store, records, successful, eOpts);
                    }
                };
                //手工设置 manager
                records.forEach(function(item) {
                    var managerLink = item.getLink('manager');
                    if (managerLink && managerLink.length > 0) {
                        var aobj = item.get('manager');
                        if (aobj && aobj.isModel) {
                            conti();
                            return;
                        }
                        wzqr.model.User.loadFromURI({
                            uri: managerLink,
                            scope: item,
                            success: function(manager) {
                                this.set('manager', manager);
                                this['_' + 'manager' + '_done'] = true;
                                conti();
                                return;
                            },
                            failure: function(response) {
                                this['_' + 'manager' + '_done'] = true;
                                conti();
                                return;
                            }
                        });
                    } else {
                        item['_' + 'manager' + '_done'] = true;
                        conti();
                    }
                });
            }
//            return false;
        }
    },
    autoLoad: false
});