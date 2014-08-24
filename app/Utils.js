/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
Ext.define('wzqr.Utils', {
    alternateClassName: "Utils",
    singleton: true,
    requires: [
        'Ext.Date'
    ],
    mixins: {
        myConfig: "wzqr.Config"
    },
    /**
     * 验证data是否是一个有效的field
     * TODO 目前只做了针对string的
     * */
    isValidField: function(data, field) {
        if ('string' === field.type || 'sstring' === field.type) {
            return Ext.isString(data) && data.length > 0;
        }
        return data !== null;
    },
    extraResponseData: function(response) {
        var data = Ext.decode(response.responseText);
        data.alert = function() {
            Ext.Msg.alert(this.success ? '提示' : '错误', this.message);
        };
        switch (data.code) {
            case 501:
                data.message = '数据重复';
                break;
            case 540:
                data.message = '密码不正确';
                break;
            default:
                if (data.code / 100 === 2) {
                    data.success = true;
                    if (!data.message && data.originalMessage) {
                        data.message = data.originalMessage;
                    }
                } else {
                    data.message = '未知错误|' + data.originalMessage;
                    error('未识别的错误号', data);
                }

        }
        return data;
    },
    /////兼容性    
    ////兼容性END

    /**
     * 是一个长度不小于0的字符串
     * @param {object} value description
     * */
    isValidString: function(value) {
        return Ext.isString(value) && value.length > 0;
    },
    insertData: function(obj, name, value) {
        //如果发现.
        var index = name.indexOf('.');
        if (index === -1) {
            obj[name] = value;
        } else {
            var nName = name.substring(0, index);
            var nObj = Ext.apply({}, obj[nName]);
            obj[nName] = nObj;
            Utils.insertData(nObj, name.substring(index + 1), value);
        }
    },
    /**
     * 将fields转换成一个obj
     * 
     * Ext.util.MixedCollection
     * */
    fieldsToObject: function(fields) {
        var object = {};
        fields.each(function(item) {
            Utils.insertData(this, item.name, item.getValue());
        }, object);
        return object;
    },
    /**
     * how to use for in correctly
     * http://stackoverflow.com/questions/9329446/how-to-do-for-each-over-an-array-in-javascript
     * */
    arrayHasOwnIndex: function(array, prop) {
        return array.hasOwnProperty(prop) && /^0$|^[1-9]\d*$/.test(prop) && prop <= 4294967294; // 2^32 - 2
    },
    /**
     * 获取api的具体url
     * @param {string} name api的具体名字
     * */
    toApi: function(name) {
        return this.getApiRoot() + name;
    },
    /**
     * 打开菊花界面
     * 
     * */
    startLoading: function(msg) {
        if (!msg)
            msg = '处理中……';
        Ext.getBody().mask(msg);
    },
    stopLoading: function() {
        Ext.getBody().unmask();
    },
    /**
     * 当前页面的viewport
     * */
    viewport: function() {
        return Ext.ComponentQuery.query('viewport')[0];
    },
    /**
     * 清除原来的界面 载入该界面
     * */
    push: function(view) {
        var vp = Utils.viewport();
        vp.removeAll();
        vp.add(view);
    },
    toLoginFrame: function(loginClass) {
        var isDebugMode = false;
//<debug>
        isDebugMode = true;
        Utils.push(loginClass.create());
//</debug>
        if (!isDebugMode)
            window.location.reload();

    },
    getValue:function(me,field){
        if (!me || !field)
            return null;
        if (me.isModel) {
            return me.get(field);
        }
        var index = field.indexOf('.');
        if (index === -1) {
            return me[field];
        }
        var objName = field.substring(0, index);
        var propertyName = field.substring(index + 1, field.length);
        var obj = Utils.getValue(me,objName);
        if (!Ext.isDefined(obj))
            return null;
        if (!obj)
            return null;
//        debug('obj',obj);
        if (obj.isModel) {
            return obj.get(propertyName);
        }
        return Utils.getValue(obj,propertyName);
    }
});

