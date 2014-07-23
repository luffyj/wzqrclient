/**
 * list
 * 
 * 验证码难度降低
 * 左侧统计管理处，增加一个按管理部门统计（由一级管理账号建立二级管理账号申报情况）
 * 
 * */
function error() {
//<debug>    
    if (typeof console !== 'undefined') {
        if ((console.error || console.log).apply) {
            (console.error || console.log).apply(console, [].slice.call(arguments));
        } else {
            if (console.error) {
                console.error(arguments);
            } else if (console.log) {
                console.log(arguments);
            }
        }
    }
//</debug>    
}

function log() {
//<debug>    
    if (typeof console !== 'undefined') {
        if ((console.log || console.error).apply) {
            (console.log || console.error).apply(console, [].slice.call(arguments));
        } else {
            if (console.log) {
                console.log(arguments);
            } else if (console.error) {
                console.error(arguments);
            }
        }
    }
//</debug>    
}
debug = log;


Ext.define('wzqr.Application', {
    name: 'wzqr',
    extend: 'Ext.app.Application',
    requires: [
        'wzqr.spring.data.RestProxy',
        'wzqr.Utils'
    ],
    views: [
        // TODO: add views here
    ],
    controllers: [
        // TODO: add controllers here


        'LoaderController',
        'Login',
        'ManageOrg',
//        'ManagePeople',
        'EditApplication',
        'ManageApplication'
    ],
    stores: [
        // TODO: add stores here
    ],
    onLaunch: function(app) {
//        Ext.Loader.loadScript({
//            url: url
//        });
    }
});
