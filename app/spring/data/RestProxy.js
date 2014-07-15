Ext.define('wzqr.spring.data.RestProxy', {
    extend: 'Ext.data.proxy.Rest',
    requires: ['wzqr.spring.data.Reader'],
    alternateClassName: 'Ext.data.SpringRestProxy',
    alias: 'proxy.springrest',
    limitParam: 'size',
    reader: 'springReader',
    /**
     * 覆盖错误处理
     * 因为编码限制我们无法在服务端给出更为具体的错误消息
     * 所以我们会在响应中给予更加具体的错误内容
     * 暂定标准为
     * code 错误编码 一般以此为准
     * message 一般性描述
     * originalMessage 技术错误信息 调试使用
     * */
    setException: function(operation, response) {
        this.callParent(arguments);
        var data = Ext.decode(response.responseText);
        if (data) {
            switch (data.code) {
                case 501:
                    data.message = '数据重复';
                    break;
                default:
                    data.message = '未知错误|'+data.originalMessage;
                    error('未识别的错误号', data);
            }
        }
        Ext.apply(operation.error, {
            result: data
        });
    },
    /**
     * 覆盖结果处理
     * 增加added以后设置Model id和selflink的功能
     * */
    processResponse: function(success, operation, request, response, callback, scope) {
        //records 必须有 而且只有一个！
        if (response.status === 201) {
            if (operation.records && operation.records.length === 1) {
                var model = operation.records[0];
                var link = response.getResponseHeader('Location');
                if (model && link) {
                    //设置self link 以及他们的id
                    model._links = Ext.apply(Ext.apply({}, model._links), {
                        self: {
                            href: link
                        }
                    });
                    //获取他的id
                    var index = link.lastIndexOf('/');
                    if (index !== -1) {
                        var newId = parseInt(link.substring(index + 1, link.length));
                        model.setId(newId);
                        model.internalId = newId;
                    } else {
                        error('这是什么Location?', link);
                    }
                }
            } else {
                error('创建后无法准确定位Model');
            }
        }
        this.callParent(arguments);
    },
    isValidId: function(id) {
        // || id === 0 如果是0一般是新增
        return id;
    },
    getParams: function() {
        var me = this;
        var params = me.callParent(arguments);
        var pageParam = me.pageParam;
        params[pageParam] = params[pageParam] - 1;
        return params;
    }, constructor: function(config) {
        //覆盖初始化 以更换reader中的各个方法
        //是否需要建立一个初始化函数 将实现者给予的url中的具体实例名 作为参数 传给reader
        this.callParent(arguments);
    }
});