// pages/square/square.js
const {
  default: api
} = require("../../http/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    playlists: [],
    playlistsl: [],
    active: 0,
    playlistss: [],
    cat: "华语",
    swiperIndex: 0,
    hotSongs:[],
  },
  bindchange(e) {
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  bindsheet(e) {
    let id = e.currentTarget.dataset.item.id
    // console.log(e)
    wx.navigateTo({
      url: `/pages/seet/seet?id=${id}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // 推荐
    api.gettop().then(res => {
      this.setData({
        playlists: res.playlists.slice(0, 3),
        playlistsl: res.playlists.slice(3)
      })
      // console.log(res) 
    }).catch(err => {})
    // 精品
    api.gethighquality().then(res => {
      // console.log(res)
      this.setData({
        playlistss: res.playlists
      })
    }).catch(err => {})
    // 华语
    api.gethighqualityhu(this.data.cat).then(res => {
      // console.log(res)
      this.setData({
        playlistshu: res.playlists
      })
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