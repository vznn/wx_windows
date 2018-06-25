Page({

  /**
   * 页面的初始数据
   */
  data: {
    imgUrls: ["http://pxy-10024049.cossh.myqcloud.com/ban.jpg",
      "http://pxy-10024049.cossh.myqcloud.com/ban.jpg"
    ],
    icon: [{
        icon: "http://pxy-10024049.cossh.myqcloud.com/chuanglian/icon/favorite.png",
        text: '热销商品'
      },
      {
        icon: "http://pxy-10024049.cossh.myqcloud.com/chuanglian/icon/clock.png",
        text: '新上商品'
      },
      {
        icon: "http://pxy-10024049.cossh.myqcloud.com/chuanglian/icon/all1.png",
        text: '所有商品'
      },
      {
        icon: "http://pxy-10024049.cossh.myqcloud.com/chuanglian/icon/map.png",
        text: '联系我们'
      }
    ],
    showModalStatus: false
  },
  onLoad: function(options) {
    // http://pxy-10024049.cossh.myqcloud.com/ban.jpg
  },
  onChick: function(e) {
    var type = e.currentTarget.dataset.type;
    //type==0时跳转热销页面，type==1时跳转新品，type==2展示所有商品，type==3时展示联系我们
    if (type == 0) {
      wx.navigateTo({
        url: '../hotPage/hotPage'
      })
    }
    if (type == 1) {
      wx.navigateTo({
        url: '../newPage/newPage'
      })
    }
    if (type == 2) {
      wx.navigateTo({
        url: '../allPage/allPage'
      })
    }
    if (type == 3) {
      this.setData({
        showModalStatus: true
      });
    }
  },
  powerDrawer: function(e) {
    this.setData({
      showModalStatus: false
    });
  },
  address1: function(e) {
    //一店
    wx.openLocation({
      latitude: 24.958451,
      longitude: 103.044146,
      scale: 18,
      name: '小四川窗帘（一店）',
      address: '汤池农贸市场内',
      success: function(res) {}
    })
  },
  address2: function(e) {
    //二店
    wx.openLocation({
      latitude: 24.959307,
      longitude: 103.043641,
      scale: 18,
      name: '小四川窗帘（二店）',
      address: '汤池高保路变电站左侧大门内',
      success: function(res) {}
    })
  },
  Tel1:function(e){
    wx.makePhoneCall({
      phoneNumber: '18083866518',
    })
  },
  Tel2: function (e) {
    wx.makePhoneCall({
      phoneNumber: '18082768967',
    })
  }
})