
Ext.define('wzqr.spring.data.Reader', {
    extend: 'Ext.data.reader.Json',
    alternateClassName: 'Ext.data.SpringDataReader',
    alias: 'reader.springReader',
    /**
     * 建立函数的方法
     * */
    buildExtractors:function(){
        this.callParent(arguments);
        this.getTotal = this.getTotalStub;
        this.getRoot = this.getRootStub;
    },
    getTotalStub: function(data) {
        if (data.page) {
            return data.page.totalElements;
        }
        return 'k';
    },
    getRootStub: function(data) {
        var edata = data._embedded;
        // 里面应该只有一个值如何获取？
        for (var key in edata) {
            if (edata.hasOwnProperty(key) && Ext.isArray(edata[key])) {
                return edata[key];
            }
        }
        return data;
    }
});