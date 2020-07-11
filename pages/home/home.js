// pages/home/home.js
// getApp()获取App()产生的示例对象
const app = getApp()
console.log(app.globalData.Name)
// 注册页面
Page({

  /**
   * 页面的初始数据化
   */
  data: {
    list: []
  },

  // 3.监听wxml相关的一些事情
  click() {
    console.log('我被点击了');

  },
  getUserInfo(event) {
    console.log(event);

  },

  /**
   * 监听页面的生命周期函数
   */
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    wx.request({
      url: 'http://152.136.185.210:8000/api/n3/category',
      success: (res) => {
        console.log(res);
        const data = res.data.data.category.list
        this.setData({
          list: data
        })
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

    // 监听页面的滚落
    onPageScroll(obj) {
      // console.log(obj);
    },
  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
    console.log('页面滚动到底部');
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})