var user=getApp();
Page({
    data:{
        name:'个人中心',
        userInfo:{}
    },
    onLoad: function () {
        console.log('user');
        var that = this;
        //调用应用实例的方法获取全局数据
        user.getUserInfo(function(userInfo){
            //更新数据
            that.setData({
                userInfo:userInfo
            })
        })
        user.test('user');
    },

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