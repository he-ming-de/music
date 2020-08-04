const {
  default: api
} = require("../../http/api")

// pages/Listdetails/Listdetails.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    arr: {},
    id: '',
    ids: [],
    tracks:[],
    hotSongs:[]
  },
  // 去听歌
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
  songdetail() {
    api.getdetails(this.data.id)
      .then(res => {
        console.log(res)
        res.playlist.subscribedCount = (res.playlist.subscribedCount / 10000).toFixed(1) + '万'
        res.playlist.tracks.map(item => {
          this.data.ids.push(item.id)
        })
        this.setData({
          ids: this.data.ids,
          arr: res,
          tracks:res.playlist.tracks
        })
        console.log(this.data.ids)
      })
      .catch(err => {})
  },
  rester() {
    wx.navigateBack({
      delta: 1,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id: options.id
    })
    this.songdetail()
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