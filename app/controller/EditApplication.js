/**
 * 权限说明
 * 点击申报人 名字 一般都是打开预览window 包括 申报信息 个人信息 汇总信息
 * 
 * 申报人 可以编辑和删除 未上报 自己的申报
 * 
 * 申报单位 可以上报 编辑 删除 未上报 和各种退回  以及修改申报个人账号
 * 
 * 次级机构管理员 可以 编辑 形审（重审） （形审通过，等待形审，形审未过） 导出所有的
 * 
 * 部门管理 可以复审 形审通过 的 导出所有的
 * 
 * 市管理员 可以编辑 复审 形审通过 的 也可以编辑 评审（重审） 复审通过 复审  还编辑可以评审通过的
 * */
Ext.define('wzqr.controller.EditApplication', {
    extend: 'wzqr.controller.BaseController',
    views:['app.Edit'],
    models: ['Application', 'User'],
    init: function(app) {
        this.control({
            'jcgridview': {
                actionedit: function(grid, record, rowIndex, colIndex, row, item, e) {
                    this.getView('app.Edit').create(record).show();
                }, actiondelete: function(grid, record, rowIndex, colIndex, row, item, e) {
                    debug(record,record.get('owner'));
                    record.set('status','已删除');
                    record.save({
                        success: function() {
                            grid.getStore().reload();
                        }
                    });
                }
            }
        });
    }
});