Ext.define('wzqr.controller.BaseController', {
    extend: 'Ext.app.Controller',
    models: ['Org', 'User', 'Role'],
    requires: [
        'wzqr.view.rr.Index',
        'Ext.Ajax',
//        'wzqr.view.ManagePeople',
        'wzqr.view.ManageApplication',
        'wzqr.view.ManageOrg',
        'wzqr.view.InfoOrg',
        'wzqr.view.InfoPeople',
        'wzqr.view.InfoPassword',
        'wzqr.view.Log',
        'wzqr.view.ManageUnit',
        'wzqr.view.Login',
        'wzqr.view.Dashboard'
    ],
    getUserId: function() {
        var user = this.getApplication().currentUser;
        if (!user)
            return null;
        return user.id;
    },
    getMyorgModel: function() {
        return this.getApplication().orgModel;
    },
    getMyorg: function() {
        var user = this.getApplication().currentUser;
        if (!user)
            return false;
        return user.org.id;
    },
    /**
     * 是管理者么？
     * @return {boolean} true for yes
     * */
    isCross: function() {
        var user = this.getApplication().currentUser;
        if (!user)
            return false;
        var auths = user.authorities;
        return this.isAdmin() || Ext.Array.some(auths, function(auth) {
            return auth.authority === 'cross';
        });
    },
    /**
     * 是一般申报人么？
     * @return {boolean} true for yes
     * */
    isPeople: function() {
        var user = this.getApplication().currentUser;
        if (!user)
            return false;
        return user.role.name === '申报人';
    },
    /**
     * 是申报单位？
     * @return {boolean} true for yes
     * */
    isUnit: function() {
        var user = this.getApplication().currentUser;
        if (!user)
            return false;
        return user.role.name === '申报单位';
    },
    isAdmin: function() {
        //authority
        var user = this.getApplication().currentUser;
        if (!user)
            return false;
        var auths = user.authorities;
        return Ext.Array.some(auths, function(auth) {
            return auth.authority === 'admin';
        });
    },
    isManagePeople: function() {
        //managePeople
        var user = this.getApplication().currentUser;
        if (!user)
            return false;
        var auths = user.authorities;
        return this.isAdmin() || Ext.Array.some(auths, function(auth) {
            return auth.authority === 'managePeople';
        });
    },
    /**
     * 是否允许打开操作日志界面
     * @return {boolean} true表示可以
     * */
    isManageLog: function() {
        var user = this.getApplication().currentUser;
        if (!user)
            return false;
        var auths = user.authorities;
        return this.isAdmin() || Ext.Array.some(auths, function(auth) {
            return auth.authority === 'log';
        });
    },
    /**
     * 如果cross 是否可以打开管理部门界面
     * 只有系统管理员和市委可以打开
     * 在权限组织关系中 只有获得了部门管理权力和跨部门管理权力才可以
     * 
     * 反之则是申报单位的管理
     * 
     * 普通的次级管理员也可以获得部门(单位)管理权力
     * @param {boolean} cross 是否要求跨部门
     * */
    isManageOrg: function(cross) {
        var user = this.getApplication().currentUser;
        if (!user)
            return false;
        var auths = user.authorities;
        return this.isAdmin() || (Ext.Array.some(auths, function(auth) {
            return auth.authority === 'manageOrganization';
        }) && (cross ? Ext.Array.some(auths, function(auth) {
            return auth.authority === 'cross';
        }) : true));
    },
    newDashboard: function() {

        var pages = [
            {
                title: '申报管理',
                xtype: 'xmanageapp',
                currentUser: this.getApplication().currentUser
            }];
        
        if (this.isManageOrg(true)) {
            pages.push({
                title: '管理部门',
                xtype: 'xmanageorg'
            });
            
            pages.push({
                title: '注册申请',
                xtype: 'xrrindex'
            });
        } else if (this.isManageOrg(false)) {
            pages.push({
                title: '申报单位',
                xtype: 'xmanageunit'
            });
        }
//        else if (this.isManagePeople()) {
//            pages.push({
//                title: '申报人',
//                xtype: 'xmanagepeople'
//            });
//        }

        pages.push({
            title: '我的账号',
            xtype: 'panel',
            name: 'info',
            layout: {
                type: 'vbox',
                align: 'center'
            },
            items: [
                {
                    xtype: this.isPeople() ? 'xinfopeople' : 'xinfoorg',
                    margin: '20 0 0 0'
                }, {
                    xtype: 'xinfopassword',
                    margin: '20 0 0 0'
                }
            ]
        });

        if (this.isManageLog()) {
            pages.push({
                title: '操作日志',
                xtype: 'xlog'
            });
        }

        var dashboard = this.getView('Dashboard').create({
            pages: pages
        });
        Utils.push(dashboard);
        return dashboard;
    },
    checkAuth: function() {
        debug('run checkAuth');
        Utils.startLoading();
        Ext.Ajax.request({
            url: Utils.toApi('queryUser'),
            scope: this,
            success: function(data, opts) {
                Utils.stopLoading();
                if (this._task_checkAuth) {
                    Ext.TaskManager.stop(this._task_checkAuth);
                    delete this._task_checkAuth;
                }
                if (data.responseText === 'anonymousUser') {
                    Utils.toLoginFrame(this.getView('Login'));
                } else {

                    var data = Ext.JSON.decode(data.responseText);
                    this.getApplication().currentUser = data;

                    this.getModel('Org').load(this.getApplication().currentUser.org.id, {
                        scope: this,
//                        failure: function(record, operation) {
//                            //do something if the load failed
//                            //record is null
//                        },
//                        success: function(record, operation) {
//                            //do something if the load succeeded
//                            this.getApplication().orgModel = record;
//                        },
                        callback: function(record, operation, success) {
                            //do something whether the load succeeded or failed
                            //if operation is unsuccessful, record is null
                            if (success) {

                                this._task_checkAuth = Ext.TaskManager.newTask({
                                    run: this.checkAuth,
                                    scope: this,
                                    interval: 600000
                                });
                                Ext.TaskManager.start(this._task_checkAuth);

                                this.getApplication().orgModel = record;
                                Ext.log('当前用户的部门为');
                                debug('login as ', data);
                                // 根据用户权限展开不同的管理页面

                                var dashboard = Utils.viewport().down('xmydashboard');
                                if (!dashboard) {
                                    Ext.log('没有找到dashboard');
                                    this.getApplication().lastRoleId = data.role.id;
                                    this.getApplication().lastOrgId = record.getId();
                                    dashboard = this.newDashboard();
                                } else {
                                    if (Ext.Array.equals(this.getApplication().lastRoleId, data.role.id)
                                            && this.getApplication().lastOrgId === record.getId()) {
                                        //保持一致了
                                    } else {
                                        Ext.log('权限变动了');
                                        this.getApplication().lastRoleId = data.role.id;
                                        this.getApplication().lastOrgId = record.getId();
                                        dashboard = this.newDashboard();
                                    }
                                }
                                Ext.log('Dash已插入！');

                                dashboard.down('xtop component[name=labelName]').update(data.realName);
//                                dashboard.down('xtop component[name=labelRole]').update(data.role.name);
//                    dashboard.down('xtop component[name=labelRole]').html  = data.role.name;
//                    dashboard.down('xtop').doLayout();
                            } else {
                                Utils.toLoginFrame(this.getView('Login'));
                            }
                        }
                    });
                }
            },
            failure: function(data, opts) {
                debug('fail', data, opts, this);
                //如果失败 则稍后重新查询
                if (this._task_checkAuth) {
                    Ext.TaskManager.stop(this._task_checkAuth);
                    delete this._task_checkAuth;
                }

                if (!this._task_checkAuth) {
                    this._task_checkAuth = Ext.TaskManager.newTask({
                        run: this.checkAuth,
                        scope: this,
                        interval: 5000
                    });
                    Ext.TaskManager.start(this._task_checkAuth);
                }
//                Ext.TaskManager.start(this._task_checkAuth);                
            }
        });
    }
});
