/**
 * 在执行save之前 必须确保所有关联数据并非obj而是一个link!!!
 * 检查每一个量 如果发现这个量是Model而且拥有self 则直接设置为self
 * 映射关系的数据 到底应该如何储存呢
 * 还是应该和平时一样保存在实体
 * 举例 有一个映射名为manager
 * 
 * 正常状态 manager
 * 
 * save时...不对 应该是writer工作的时候 直接拿它的self!!
 * 
 * 设置field时 如果设置noarray为true 表示该属性不可以设置为array应该选择array其中有效的值
 * 如果设置为link表示是连接到其他model的
 * 
 * */
Ext.define('wzqr.spring.data.Model', {
    extend: 'Ext.data.Model',
    requires: [
        'Ext.data.Types',
        'wzqr.spring.data.Reader',
        'wzqr.spring.data.Writer',
        'wzqr.spring.data.RestProxy'
    ],
    /**
     * 覆盖
     * 增加了直接读取子object属性的功能
     * */
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
        if (!obj)
            return null;
//        debug('obj',obj);
        if (obj.isModel) {
            return obj.get(propertyName);
        }
        return obj[propertyName];
    },
    /**
     * 自动连接
     * 本来想再配置中直接配置对应关系 但涉及到互相引用的问题
     * 为了效率暂时放弃这个功能
     * force强制刷新
     * */
    link: function(config) {
        var me = this;
        if (typeof config === 'string') {
            config = {name: config};
        }

        Ext.applyIf(config, {
            scope: this,
            success: Ext.emptyFn,
            failure: Ext.emptyFn
        });

        var orcsuccess = config.success;

        var aobj = me.get(config.name);
        if (aobj && aobj.isModel && !config.force) {
            Ext.callback(orcsuccess, config.scope, [aobj]);
            return;
        }

        config.success = function(obj) {
            if (obj)
                debug('成功获取属性' + config.name, me, obj, orcsuccess);
            me.set(config.name, obj);
            Ext.callback(orcsuccess, config.scope, [obj]);
        };

        var orcfailure = config.failure;
        config.failure = function() {
            me.set(config.name, null);
            Ext.callback(orcfailure, config.scope);
        };

        var link = this.getLink(config.name);

        if ((!link || link.length === 0) && !config.uri) {
            Ext.callback(orcsuccess, config.scope);
            return;
        }

        Ext.applyIf(config, {
            uri: link
        });

        config.model.loadFromURI(config);
    },
    /**
     * 获取link
     * */
    getLink: function(name) {
        if (!this._links)
            return null;
        var value = this._links[name];
        if (value)
            return value.href;
        //如果没有值可以使用
        return null;
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

        var selfLink = this.getLink('self');
        if (selfLink) {
//            debug(selfLink);
            var index = selfLink.lastIndexOf('/');
            var idstr = selfLink.substring(index + 1, selfLink.length);
//            debug(idstr);
            this.setId(parseInt(idstr));
        }
    },
    onClassExtended: function(cls, data, hooks) {
        cls.setProxy({
            type: 'springrest',
            reader: 'springReader',
            writer: 'springWriter',
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
                    if (text === null || Ext.String.trim(text).length === 0) {
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

    Ext.data.Types.SDATE = {
        convert: function(v) {
            var df = this.dateReadFormat || this.dateFormat,
                    parsed;

            if (!v) {
                return null;
            }

            if (Ext.isArray(v)) {
                var finalValue;
                for (var i = 0; i < v.length; i++) {
                    // instanceof check ~10 times faster than Ext.isDate. Values here will not be cross-document objects
                    if (v[i] instanceof Date) {
                        return v[i];
                    }

                    if (!finalValue) {
                        finalValue = v[i];
                    }

                    if (v[i] && ((Ext.isNumber(v[i] && v[i] > 0)) || (Ext.isString(v[i]) && v[i].length > 0))) {
                        finalValue = v[i];
                        break;
                    }
                }

                if (df) {
                    return Ext.Date.parse(finalValue, df);
                }

                parsed = Date.parse(finalValue);
                return parsed ? new Date(parsed) : null;

            }

            // instanceof check ~10 times faster than Ext.isDate. Values here will not be cross-document objects
            if (v instanceof Date) {
                return v;
            }
            if (df) {
                return Ext.Date.parse(v, df);
            }

            parsed = Date.parse(v);
            return parsed ? new Date(parsed) : null;
        },
        sortType: Ext.data.SortTypes.asDate,
        type: 'sdate'
    };

    Ext.data.Types.SSTRING = {
        convert: function(v) {
            var defaultValue = this.useNull ? null : '';
            if (v === undefined || v === null) {
                return defaultValue;
            }
            if (Ext.isArray(v)) {
                var finalValue;
                for (var i = 0; i < v.length; i++) {
                    if (!finalValue) {
                        finalValue = v[i];
                    }
                    if (Utils.isValidField(v[i], this)) {
                        finalValue = v[i];
                        break;
                    }
                }
                return String(finalValue);
            }
            return String(v);
        },
        sortType: Ext.data.SortTypes.asUCString,
        type: 'sstring'
    };
//    debug(arguments);
});