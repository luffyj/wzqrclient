
Ext.define('wzqr.spring.data.Writer', {
    extend: 'Ext.data.writer.Json',
    alternateClassName: 'Ext.data.SpringDataWriter',
    alias: 'writer.springWriter',
    dateFormat:'time',
    writeValue: function(data, field, record) {
        var value = record.get(field.name);

        if (value && value.isModel && value.getLink('self')) {
            var name = field[this.nameProperty];
            if (name === null) {
                name = field.name;
            }
            data[name] = value.getLink('self');
        } else if (field.link) {
            //如果设置为link且无对象就无需进行任何操作
        } else if (field.noarray && Ext.isArray(value)) {
            var finalValue;
            for(var i=0;i<value.length;i++){                
                if(!finalValue){
                    finalValue  = value[i];
                }
                if (Utils.isValidField(value[i], field)) {
                    finalValue  = value[i];
                    break;
                }
            }
            record.set(field.name,finalValue);
            this.callParent(arguments);
        } else {
            this.callParent(arguments);
        }
    }
});