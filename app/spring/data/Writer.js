
Ext.define('wzqr.spring.data.Writer', {
    extend: 'Ext.data.writer.Json',
    alternateClassName: 'Ext.data.SpringDataWriter',
    alias: 'writer.springWriter',
    writeValue: function(data, field, record) {
        var value = record.get(field.name);

        if (value && value.isModel && value.getLink('self')) {
            var name = field[this.nameProperty];
            if (name === null) {
                name = field.name;
            }
            data[name] = value.getLink('self');
        } else {
            this.callParent(arguments);
        }
    }
});