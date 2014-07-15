
Ext.define('wzqr.spring.data.Store', {
    extend: 'Ext.data.Store',
    alias: 'store.springstore',
    /**
     * extraModels:{
     *    name:ModelClass
     *  }
     * */
    loadExtraEntity: function(store, records, successful, eOpts) {
        var extraModels = this.extraModels;
        if (!extraModels)
            return;
        var extraModelNames = [];
        for (var n in extraModels) {
            if (n && typeof n === 'string' && extraModels[n]) {
                extraModelNames.push(n);
            }
        }
        
        if(extraModelNames.length===0)
            return;
        
        debug('extraModelNames: ', extraModelNames);
        if (successful) {
            store.suspendEvent('load');
            store.suspendEvent('refresh');
            var conti = function() {
                if (records.every(function(item) {
                    return extraModelNames.every(function(name) {
                        return this['_' + name + '_done'];
                    }, item);
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

                extraModelNames.forEach(function(name) {
                    var managerLink = item.getLink(name);
                    if (managerLink && managerLink.length > 0) {
                        var aobj = item.get(name);
                        if (aobj && aobj.isModel) {
                            conti();
                            return;
                        }
                        extraModels[name].loadFromURI({
                            uri: managerLink,
                            scope: item,
                            success: function(manager) {
                                this.set(name, manager);
                                this['_' + name + '_done'] = true;
                                conti();
                                return;
                            },
                            failure: function(response) {
                                this['_' + name + '_done'] = true;
                                conti();
                                return;
                            }
                        });
                    } else {
                        item['_' + name + '_done'] = true;
                        conti();
                    }
                });


            });
        }
    },
    listeners: {
        load: 'loadExtraEntity'
    }
});