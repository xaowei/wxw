// pages/starry_sky/starry_sky.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;
    /**生成背景星星-开始 */
    var stars = 400;
    var r = 0;
    var stararray = [];
    for (var i = 0; i < stars; i++) {
      var s = 0.2 + Math.random() * 1;
      var curR = r + Math.random() * 300;
      var rotateY = Math.random() * 360;
      var rotateX = Math.random() * -50;
      stararray[i] = { curR: curR, rotateY: rotateY, rotateX: rotateX, s: s };
    }
    // console.log(stararray) 
    this.setData({
      stararray: stararray,
    })
    /**生成背景星星-结束 */
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

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
  tell: function () {
    wx.makePhoneCall({
      phoneNumber: '18328459454'
    })
  }
})