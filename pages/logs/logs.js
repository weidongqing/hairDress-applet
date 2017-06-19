//logs.js
var util = require('../../utils/util.js')
Page({
  data: {
    logs: [],
    id:''
  },
  onLoad: function (option) {
    console.log(option.id);
    this.setData({
      id:'路由带过来的参数id:'+option.id,
      logs: (wx.getStorageSync('logs') || []).map(function (log) {
        return util.formatTime(new Date(log))
      })
    })
  }
})
