//app.js
const Promise = require('/lib/es6-promise/dist/es6-promise').Promise;
App({
    onLaunch: function () {
        var that = this;
        //调用API从本地缓存中获取数据
        var logs = wx.getStorageSync('logs') || [];
        logs.unshift(Date.now());
        wx.setStorageSync('logs', logs);
        this.globalData.domain = 'http://apitest.cyxsl.com';
        //收货地址
        // wx.chooseAddress({
        //     success: function (res) {
        //         // 地址作为局部变量
        //        that.changeAddr(res);
        //     }
        // })
    },
    getUserInfo: function (cb) {
        var that = this;
        if (this.globalData.userInfo) {
            typeof cb == "function" && cb(this.globalData.userInfo)
        } else {
            //调用登录接口
            wx.login({
                success: function (result) {
                    if (result.code) {
                        wx.getUserInfo({
                            success: function (data) {
                                that.globalData.userInfo = data;
                                wx.request({
                                    method: 'POST',
                                    url: 'https://hairdress.homelybeauty.com/users/applet',
                                    data: {
                                        encryptedData: data.encryptedData,
                                        iv: data.iv,
                                        code: result.code
                                    },
                                    header: {
                                        'content-type': 'application/json'
                                    },
                                    success: function (res) {
                                       
                                        wx.setStorage({
                                            key: "test",
                                            data: res
                                        })
                                    },
                                    fail: function (err) {
                                        console.log(err);
                                    },
                                    complete: function () {
                                        console.log("complete");
                                    }
                                });

                                // wx.request({
                                //     url: 'https://api.weixin.qq.com/sns/jscode2session?appid=wx8358e817b882aeb4&secret=0db53f018969c3461cf0b063577c5f1b&js_code=' + result.code + '&grant_type=authorization_code',
                                //     method: 'GET', // OPTIONS, GET, HEAD, POST, PUT, DELETE, TRACE, CONNECT
                                //     // header: {}, // 设置请求的 header
                                //     success: function (res) {
                                //         wx.request({
                                //             method: 'POST',
                                //             url: 'https://hairdress.homelybeauty.com/users/applet',
                                //             data: {
                                //                 appId: 'wx8358e817b882aeb4',
                                //                 encryptedData: data.encryptedData,
                                //                 iv: data.iv,
                                //                 sessionKey: res.data.session_key
                                //             },
                                //             header: {
                                //                 'content-type': 'application/json'
                                //             },
                                //             success: function (data) {
                                //                 console.log(data);
                                //                 wx.setStorage({
                                //                     key: "test",
                                //                     data: data
                                //                 })
                                //             },
                                //             fail: function (err) {
                                //                 console.log(err);
                                //             }
                                //         })
                                //     },
                                //     fail: function () {
                                //         // fail
                                //     },
                                //     complete: function () {
                                //         // complete
                                //     }
                                // });


                                typeof cb == "function" && cb(that.globalData.userInfo)
                            }
                        })
                    } else {
                        console.log('获取用户登录态失败！' + result.errMsg)
                    }
                }
            })
        }
    },
    //全局函数修改全局变量
    test: function (ccc) {
        this.globalData.ceshi = ccc;
        //console.log(this.globalData.ceshi);
    },
    //修改收货地址地址
    changeAddr: function (address) {
        this.globalData.addr = address;
    },
    //全局变量
    globalData: {
        userInfo: null,
        domain: null,
        ceshi: null,
        addr: null
    }
})