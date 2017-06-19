//index.js
//获取应用实例
var app = getApp();
Page({
    data: {
        name: '天天漂亮',
        userInfo: {},
        ceshi: '',
        loading: false,
        hidden: true,
        //swiper配置信息
        background: ['http://testadmin.iloveqianmo.com/service/public/upload/image/20170612/6a821f97eeffad141477d1bb11864b61.jpg',
            'http://testadmin.iloveqianmo.com/service/public/upload/image/20170612/90d167a107c626e6672af5b222d6fb4a.jpg',
            'http://testadmin.iloveqianmo.com/service/public/upload/image/20170613/790a8cdb50e07f50d4a485cfe16f0589.jpg'],
        indicatorDots: true,
        vertical: false,
        autoplay: true,
        interval: 2000,
        duration: 500,
        //列表信息
        list: [
            {
                id: 0,
                avatar: 'http://testadmin.iloveqianmo.com/service/public/upload/image/20170612/90d167a107c626e6672af5b222d6fb4a.jpg',
                title: '随意剪'
            },
            {
                id: 1,
                avatar: 'http://testadmin.iloveqianmo.com/service/public/upload/image/20170613/eeb8a987c00a13d2950312801f7c8732.jpg',
                title: '梨花卷'
            },
            {
                id: 2,
                avatar: 'http://testadmin.iloveqianmo.com/service/public/upload/image/20170613/a8bcd5b1f47f04bcb2cf50120d16e5c1.jpeg',
                title: '烫染'
            },
            {
                id: 3,
                avatar: 'http://testadmin.iloveqianmo.com/service/public/upload/image/20170613/fac63b2daf4c1fd8e81344c03d174592.jpg',
                title: '洗剪吹'
            },
            {
                id: 4,
                avatar: 'http://testadmin.iloveqianmo.com/service/public/upload/image/20170613/5ce0a4a701c379ba69acf27cde7ab7af.jpg',
                title: '软化'
            }
        ]
    },

    //页面载入函数
    onLoad: function () {
        var that = this;
        //调用应用实例的方法获取全局数据
        app.getUserInfo(function (userInfo) {
            console.log(userInfo);
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        })
        //调用全局函数
        app.test('测试全局函数全局变量');
        console.log(app.globalData);
        //测试request获取数据ok
        // wx.request({
        //     method:'GET',
        //     url: app.globalData.domain+'/api/Index/getShopsInfo', //仅为示例，并非真实的接口地址
        //     data: {
        //         user_id: '11e709ef-e1d8-5dd4-9550-00163e005172',
        //         role: '1'
        //     },
        //     header: {
        //         'content-type': 'application/json'
        //     },
        //     success: function (result) {
        //         console.log(result.data.data);
        //     }
        // })
    },


    //下拉刷新监控事件
    onPullDownRefresh: function () {
        //隐藏下拉刷新动画icon
        //wx.stopPullDownRefresh();
        var that = this;
        var list = that.data.list;
        that.setData({
            hidden: false
        });
        //重新获取数据
        setTimeout(function () {
            that.setData({
                // hidden:false,
                //注意此处有坑,wx:key="title,所以title不能一样,否则会将title相同的的avatar全都变成一样的
                list: [
                    {
                        avatar: 'http://testadmin.iloveqianmo.com/service/public/upload/image/20170613/edeaa36129a9d8bec831398551342164.jpg',
                        title: '刷新过'
                    },
                    {
                        avatar: 'http://testadmin.iloveqianmo.com/service/public/upload/image/20170613/5ce0a4a701c379ba69acf27cde7ab7af.jpg',
                        title: '刷新过啦'
                    }
                ]
            }),
                that.setData({
                    hidden: true
                });
        }, 2000)
        console.log(that.data.list)
    },

    //上拉加载更多
    bindDownLoad: function () {
        var that = this;
        console.log("that");
    },


    //事件处理函数
    bindViewTap: function () {
        // wx.navigateTo({
        //     url: '../logs/logs'
        // })
        console.log(idx)
    },
    //获取获取data-id
    test: function (event) {
        console.log(event.currentTarget.dataset);
    },

    //路由带参跳转,前面标签要有data-id才行
    goDetail: function (event) {
        // console.log(event.currentTarget.dataset.id);
        wx.navigateTo({
            url: '../logs/logs?id=' + event.currentTarget.dataset.id
        })
    },


    //测试swiper
    changeIndicatorDots: function (e) {
        this.setData({
            indicatorDots: !this.data.indicatorDots
        })
    },
    changeAutoplay: function (e) {
        this.setData({
            autoplay: !this.data.autoplay
        })
    },
    intervalChange: function (e) {
        this.setData({
            interval: e.detail.value
        })
    },
    durationChange: function (e) {
        this.setData({
            duration: e.detail.value
        })
    }
});
