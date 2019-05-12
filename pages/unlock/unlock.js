// pages/ceshi/ceshi.js
const app = getApp()

const backgroundAudioManager = wx.getBackgroundAudioManager();
backgroundAudioManager.title = ' '
backgroundAudioManager.epname = ' '
backgroundAudioManager.singer = ' '
backgroundAudioManager.src = 'http://other.web.np01.sycdn.kuwo.cn/resource/n3/80/98/3778645379.mp3'
// backgroundAudioManager.src = 'http://so.sycdn.kuwo.cn/resource/n3/90/76/159143351.mp3'

Page({

  /**
   * 页面的初始数据
   */
  data: {
    text: '',
    showView: false
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this
    //文字逐个显示
    var story = "我的爱人,我会牵着你的手，走到满头白发的那一天，我会守护你生命里的精彩，并陪伴你一路精彩下去。你的幸福快乐，是我一生的追求。我会每一天带着笑脸，和你说早安，我会每一晚与你道声晚安再入梦乡，我会带你去所有你想去的地方，陪你闹看你笑,历经你生命中所有的点点滴滴。我期待这一生与你一起走过，我期待与你慢慢变老,等我们老到哪儿也去不了，还能满载着一生的幸福快乐 ！我会为我们的未来撑起一片天空，为我们的将来担负起一生的责任，愿意为你去做每一件能让你开心快乐的事。所有我们经历的点点滴滴，都是我们一辈子最美的回忆。我愿意爱你直到老去！余生，我不会让你受任何委屈！";
    var i = 0;
    var time = setInterval(function () {
      var text = story.substring(0, i);
      i++;
      that.setData({
        text: text
      });
      if (text.length == story.length) {
        //   console.log("定时器结束！");
        clearInterval(time);
        that.setData({
          showView: true
        });
      }
    }, 200)

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
  tell:function(){
    wx.makePhoneCall({
      phoneNumber: '18328459454'
    })
  }
})
