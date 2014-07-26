Ext.define('wzqr.overrides.form.Basic', {
    override: 'Ext.form.Basic',
    setValues: function(values) {
        var me = this,
                v, vLen, val;

        function setVal(fieldId, val) {
            me.getFields().each(function(f) {
                if (f.id === fieldId || f.getName() === fieldId) {
                    if (f) {
                        f.setValue(val);
                        if (me.trackResetOnLoad) {
                            f.resetOriginalValue();
                        }
                    }
                }
            });
        }

        // Suspend here because setting the value on a field could trigger
        // a layout, for example if an error gets set, or it's a display field
        Ext.suspendLayouts();
        if (Ext.isArray(values)) {
            // array of objects
            vLen = values.length;

            for (v = 0; v < vLen; v++) {
                val = values[v];

                setVal(val.id, val.value);
            }
        } else {
            // object hash
            Ext.iterate(values, setVal);
        }
        Ext.resumeLayouts(true);
        return this;
    }
});