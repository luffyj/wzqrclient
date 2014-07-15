Ext.define('wzqr.controller.Login', {
    extend: 'wzqr.controller.BaseController',
    models: ['Org', 'User'],
    submitLogin: function(button) {
        var me = this;
        var image = button.up('form').down('image');
        var form = button.up('form').getForm();
        if (form.isValid()) {
            Utils.startLoading('登录中……');
            form.submit({
                success: function(form, action) {
                    Utils.stopLoading();
                    //redriver
                    me.checkAuth();
                },
                failure: function(form, action) {
                    Utils.stopLoading();
                    if (action.response.status === 306 || action.response.status === 401) {
                        Ext.Msg.alert('错误', '您输入了错误的登录账号或登录密码。');
                    }
                    if (action.response.status === 410) {
                        Ext.Msg.alert('错误', '验证码错误。');
                    }
                    // 没有必要重置验证码吧？
//                    image.setSrc(image.src);
                }
            });
        }
    },
    init: function(app) {
        this.control({
            'xlogin button[name=login]': {
                click: this.submitLogin
            },
            'button[name=quit]': {
                click: function(button) {
                    Ext.Ajax.request({
                        url: Utils.toApi('login?logout'),
                        callback: function(options, success, response) {
                            this.checkAuth();
                        },
                        scope: this
                    });

                }
            },
            'panel[name=info]': {
                activate: function(panel) {
                    debug('activate', panel);
                    //xinfoorg
                }
            },
            'displayfield[name=loginName]': {
                render: function(label) {
                    label.setValue(this.getApplication().currentUser.loginName);
                }
            },
            'xtop component[name=labelName]': {
                show: function(label) {
                    debug(label);
                    label.html = this.getApplication().currentUser.realName;
                }
            }
        });
    }
});
