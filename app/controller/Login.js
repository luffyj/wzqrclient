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
            'button[name=savePassword]': {
                click: function(button) {
                    debug('保存密码');

                    var oldPassword = button.up('form').down('textfield[name=oldPassword]').getValue();
                    var password = button.up('form').down('textfield[name=password]').getValue();
                    var cpassword = button.up('form').down('textfield[name=cpassword]').getValue();

                    if (password !== cpassword) {
                        Ext.Msg.alert('错误', '您2次输入的密码并不一致');
                        return;
                    }
                    Utils.startLoading();

                    Ext.Ajax.request({
                        url: Utils.toApi('cpassword'),
                        params: {
                            oldPassword: oldPassword,
                            password: password
                        },
                        callback: function(options, success, response) {
                            debug('cpassword response:', response);
                            Utils.stopLoading();
                            if (success) {
                                Ext.Msg.alert('提示', '修改成功');
                            } else {
                                var data = Utils.extraResponseData(response);
                                var message = data.message;
                                Ext.Msg.alert('错误', message);
                            }
                        },
                        scope: this
                    });
                }
            },
            'xinfopeople button[name=save]': {
                click: function(button) {
                    Utils.startLoading();
                    var values = button.up('form').form.getValues();
                    debug('recived values', values);
                    this.getApplication().userModel.set('contact', values);
                    this.getApplication().userModel.save({
                        callback: function(record, operation, success) {
                            Utils.stopLoading();
                            if (success) {
                                Ext.Msg.alert('提示', '保存成功！');
                            }
                        }
                    });
                }
            },
            'xinfoorg button[name=save]': {
                click: function(button) {
                    Utils.startLoading();
                    var values = button.up('form').form.getValues();
                    debug('recived values', values);
                    this.getApplication().orgModel.set('contact', values);
                    this.getApplication().orgModel.save({
                        callback: function(record, operation, success) {
                            Utils.stopLoading();
                            if (success) {
                                Ext.Msg.alert('提示', '保存成功！');
                            }
                        }
                    });
                }
            },
            'panel[name=info]': {
                activate: function(panel) {
                    debug('activate', panel);
                    //xinfoorg
                    var xinfoorg = panel.down('xinfoorg');
                    if (xinfoorg) {
                        this.getModel('Org').load(this.getMyorgModel().getId(), {
                            scope: this,
                            callback: function(record, operation, success) {
                                if (success) {
                                    this.getApplication().orgModel = record;
                                }
                                xinfoorg.form.setValues(this.getApplication().orgModel.get('contact'));
                                xinfoorg.down('displayfield[name=name]').setValue(this.getApplication().orgModel.get('name'));
                            }
                        });
                    }
                    var xinfopeople = panel.down('xinfopeople');

                    if (xinfopeople) {
                        this.getModel('User').load(this.getUserId(), {
                            scope: this,
                            callback: function(record, operation, success) {
                                if (success) {
                                    this.getApplication().userModel = record;
                                }
                                if (this.getApplication().userModel) {
                                    xinfopeople.form.setValues(this.getApplication().userModel.get('contact'));
                                    xinfopeople.down('displayfield[name=realName]').setValue(this.getApplication().userModel.get('realName'));
                                    xinfopeople.down('displayfield[name=realEnglishName]').setValue(this.getApplication().userModel.get('realEnglishName'));
                                } else {
                                    xinfopeople.form.setValues(this.getApplication().currentUser.contact);
                                    xinfopeople.down('displayfield[name=realName]').setValue(this.getApplication().currentUser.realName);
                                    xinfopeople.down('displayfield[name=realEnglishName]').setValue(this.getApplication().currentUser.realEnglishName);
                                }

                            }
                        });
                    }
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
