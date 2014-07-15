
function error() {
//<debug>    
    if (typeof console !== 'undefined') {
        (console.error || console.log).apply(console, [].slice.call(arguments));
    }
//</debug>    
}

function log() {
//<debug>    
    if (typeof console !== 'undefined') {
        (console.log || console.error).apply(console, [].slice.call(arguments));
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
