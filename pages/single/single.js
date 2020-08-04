const {
  default: api
} = require("../../http/api")

// pages/single/single.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    picUrl: '',
    hotSongs: [],
  },
  bindplay(e) {
    // console.log(e)
    let hotSongs = this.data.hotSongs
    let ids = []
    for (var i = 0; i < hotSongs.length; i++) {
      ids.push(hotSongs[i].id)
    }
    // console.log(names)
    let id = e.currentTarget.dataset.item.id
    wx.navigateTo({
      url: `/pages/play/play?id=${id}&ids=${ids}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: options.name,
    })
    this.setData({
      id: options.id,
      picUrl: options.picUrl + "==/" + options.picId_str
    })
    // console.log(options)
    //歌手单曲
    api.getartistsg(this.data.id).then(res => {
      this.setData({
        hotSongs: res.hotSongs.slice(0, 10)
      })
      // console.log(res)
    }).catch(err => {})
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