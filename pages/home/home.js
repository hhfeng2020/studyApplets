const app = getApp();//获取App对象
var haha = app.globalData.haha;
console.log(haha);

//注册页面
Page({
  data: {
    
  },
  handleGetUserInfo: function (event) {
    console.log('用户信息获取方式二');
    console.log(event);
  }
})