Page({


  data: {
    goods: []
  },


  onLoad: function (options) {
    var goods = [];
    for (var i = 0; i < 11; i++) {
      goods[i] = "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521968657168&di=a67a8f3890640a304e9c1b0498b210c5&imgtype=0&src=http%3A%2F%2Fwww.baiheby.com%2Fuploads%2Fallimg%2F170205%2F1-1F2051ZA1.jpg", "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1521968657168&di=a67a8f3890640a304e9c1b0498b210c5&imgtype=0&src=http%3A%2F%2Fwww.baiheby.com%2Fuploads%2Fallimg%2F170205%2F1-1F2051ZA1.jpg"
    }
    this.setData({
      goods: goods
    })


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

  }
})