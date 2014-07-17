
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
