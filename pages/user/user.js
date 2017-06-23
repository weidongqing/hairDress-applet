var user = getApp();
Page({
    data: {
        name: '个人中心',
        userInfo: {},
        address: {}
    },
    onLoad: function () {
        //console.log('user');
        var that = this;
        user.globalData.addr++;
        //调用应用实例的方法获取全局数据
        user.getUserInfo(function (userInfo) {
            //更新数据
            that.setData({
                userInfo: userInfo
            })
        });
        //
        user.test('user');
        //console.log(user.globalData)
    },
    
    //收货地址
    addAdress: function (event) {
           var that = this;
        wx.chooseAddress({
            success: function (res) {
                // 地址作为局部变量
                that.setData({
                    address: res
                })
               
            },
            complete: function (res) {
                console.log(that.data);
                 //地址作为全局变量
               user.changeAddr(res);
               console.log(user.globalData);
            }
        })
    }

});

// wx.getLocation({
//   type: 'gcj02', //返回可以用于wx.openLocation的经纬度
//   success: function(res) {
//     var latitude = res.latitude
//     var longitude = res.longitude
//     wx.openLocation({
//       latitude: latitude,
//       longitude: longitude,
//       scale: 28
//     })
//   }
// })