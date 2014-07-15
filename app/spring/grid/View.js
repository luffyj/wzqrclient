Ext.define("wzqr.spring.grid.View", {
    extend: 'Ext.grid.View',
    alias: 'widget.jcgridview',
    renderCell: function(column, record, recordIndex, rowIndex, columnIndex, out) {
        var me = this,
                selModel = me.selModel,
                cellValues = me.cellValues,
                classes = cellValues.classes,
                fieldValue = record.get(column.dataIndex),
                cellTpl = me.cellTpl,
                fullIndex, value, clsInsertPoint;

        cellValues.record = record;
        cellValues.column = column;
        cellValues.recordIndex = recordIndex;
        cellValues.rowIndex = rowIndex;
        cellValues.columnIndex = columnIndex;
        cellValues.cellIndex = columnIndex;
        cellValues.align = column.align;
        cellValues.tdCls = column.tdCls;
        cellValues.innerCls = column.innerCls;
        cellValues.style = cellValues.tdAttr = "";
        cellValues.unselectableAttr = me.enableTextSelection ? '' : 'unselectable="on"';

        if (column.renderer && column.renderer.call) {
            fullIndex = me.ownerCt.columnManager.getHeaderIndex(column);
            value = column.renderer.call(column.scope || me.ownerCt, fieldValue, cellValues, record, recordIndex, fullIndex, me.dataSource, me);
            if (cellValues.css) {
                // This warning attribute is used by the compat layer
                // TODO: remove when compat layer becomes deprecated
                record.cssWarning = true;
                cellValues.tdCls += ' ' + cellValues.css;
                delete cellValues.css;
            }
        } else {
            value = fieldValue;
        }
        cellValues.value = (value == null || value === '') ? '&#160;' : value;

        // Calculate classes to add to cell
        classes[1] = column.getCellId();

        // On IE8, array[len] = 'foo' is twice as fast as array.push('foo')
        // So keep an insertion point and use assignment to help IE!
        clsInsertPoint = 2;

        if (column.tdCls) {
            classes[clsInsertPoint++] = column.tdCls;
        }
        if (me.markDirty && record.isModified(column.dataIndex)) {
            classes[clsInsertPoint++] = me.dirtyCls;
        }
        if (column.isFirstVisible) {
            classes[clsInsertPoint++] = me.firstCls;
        }
        if (column.isLastVisible) {
            classes[clsInsertPoint++] = me.lastCls;
        }
        if (!me.enableTextSelection) {
            classes[clsInsertPoint++] = me.unselectableCls;
        }
        if (cellValues.tdCls) {
            classes[clsInsertPoint++] = cellValues.tdCls;
        }
        if (selModel && selModel.isCellModel && selModel.isCellSelected(me, recordIndex, columnIndex)) {
            classes[clsInsertPoint++] = (me.selectedCellCls);
        }

        // Chop back array to only what we've set
        classes.length = clsInsertPoint;

        cellValues.tdCls = classes.join(' ');

        cellTpl.applyOut(cellValues, out);

        // Dereference objects since cellValues is a persistent var in the XTemplate's scope chain
        cellValues.column = null;
    }
});