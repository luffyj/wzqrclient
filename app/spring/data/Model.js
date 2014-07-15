/**
 * 在执行save之前 必须确保所有关联数据并非obj而是一个link!!!
 * 检查每一个量 如果发现这个量是Model而且拥有self 则直接设置为self
 * */
Ext.define('wzqr.spring.data.Model', {
    extend: 'Ext.data.Model',
    requires: [
        'wzqr.spring.data.Reader',
        'wzqr.spring.data.RestProxy'
    ],
    get: function(field) {
        //查找.
        if (!field)
            return null;
        var index = field.indexOf('.');
        if (index === -1) {
            return this.callParent(arguments);
        }
        var objName = field.substring(0, index);
        var propertyName = field.substring(index + 1, field.length);
        var obj = this.callParent([objName]);
        if (!Ext.isDefined(obj))
            return null;
//        debug('obj',obj);
        if (obj.isModel) {
            return obj.get(propertyName);
        }
        return obj[propertyName];
    },
    getLink: function(name) {
        var value = this._links[name];
        if (value)
            return value.href;
    },
    constructor: function(data, id, raw, convertedData) {
        //新建model时 将_links 保存起来
        //raw._links
        if (raw && raw._links) {
            this._links = raw._links;
        }
        if (data && data._links) {
            this._links = data._links;
        }
        this.callParent(arguments);
    },
    onClassExtended: function(cls, data, hooks) {
        cls.setProxy({
            type: 'springrest',
            reader: 'springReader',
            writer: 'json',
            url: data.resourceURI
        });
//        var onBeforeClassCreated = hooks.onBeforeCreated;
//        debug('onClassExtended',data)
//        hooks.onBeforeCreated = function(cls, data) {
//            cls.setProxy({
//                type: 'springrest',
//                reader: 'json',
//                writer: 'json',
//                url: data.resourceURI
//            });
////            debug('onBeforeCreated',data)
//        };
    },
    inheritableStatics: {
        /**
         * 资源的URL
         * 比如
         * http://localhost/app/api/User
         * */
        resourceURI: null,
        /**
         * 从URI中载入单个资源
         * 如果为空 则返回null
         * 否则返回Model实例
         * */
        loadFromURI: function(uri) {
            //Ext.decode
            var me = this;
            if (typeof uri === 'string') {
                uri = {
                    uri: uri,
                    success: Ext.emptyFn,
                    failure: Ext.failure,
                    scope: this
                };
            }
            // assert uri is not null 
            if (!uri.success) {
                uri.success = Ext.emptyFn;
            }
            if (!uri.failure) {
                uri.failure = Ext.emptyFn;
            }
            if (!uri.scope) {
                uri.scope = this;
            }
//            uri.success = uri.success|Ext.emptyFn;
//            uri.failure = uri.failure|Ext.emptyFn;
//            uri.scope = uri.scope|this;

            Ext.Ajax.request({
                url: uri.uri,
                scope: uri.scope,
                success: function(response) {
                    var text = response.responseText;
                    if (text === null || text.trim().length === 0) {
                        Ext.callback(uri.success, uri.scope);
                        return;
                    }
                    var model = me.create(Ext.decode(text));
                    model.phantom = false;
                    Ext.callback(uri.success, uri.scope, [model]);
                },
                failure: uri.failure
            });
        }
    }
}, function(model) {
//    debug(arguments);
});