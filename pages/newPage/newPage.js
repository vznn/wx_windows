Page({


  data: {
    goods: ["http://pxy-10024049.cossh.myqcloud.com/chuanglian/all/1.JPG",
      "http://pxy-10024049.cossh.myqcloud.com/chuanglian/all/2.JPG",
      "http://pxy-10024049.cossh.myqcloud.com/chuanglian/all/3.JPG",
      "http://pxy-10024049.cossh.myqcloud.com/chuanglian/all/4.JPG",
      "http://pxy-10024049.cossh.myqcloud.com/chuanglian/all/5.JPG",
      "http://pxy-10024049.cossh.myqcloud.com/chuanglian/all/6.JPG"]
  },


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
  previewImage: function (e) {
    var src = e.currentTarget.dataset.src; //获取data-src
    wx.previewImage({
      urls: [src],
    })
  }
})