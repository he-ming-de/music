const {
  default: api
} = require("../../http/api")

// pages/searchList/searchList.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    keyword: '',
    type: '',
    active: 0,
    songs: [],
    song: [],
    moreText: '',
    hotSongs:[]
  },
  bindclick() {
    this.setData({
      active: 1,
    })
  },
  bindclicks() {
    this.setData({
      active: 6,
    })
  },
  bindclicka() {
    this.setData({
      active: 3,
    })
  },
  bindclickb() {
    this.setData({
      active: 2,
    })
  },
  bindclickd() {
    this.setData({
      active: 4,
    })
  },
  bindclickf() {
    this.setData({
      active: 5,
    })
  },
  bindclicke() {
    this.setData({
      active: 8,
    })
  },
  getsearch() {
    if (this.data.active === 0) {
      this.setData({
        type: 1018,
      })
      api.getsearch(this.data.keyword, this.data.type).then(res => {
        // console.log(res)
        this.setData({
          songs: res.result.song.songs,
          moreText: res.result.song.moreText,
          playLists: res.result.playList.playLists,
          moreTexts: res.result.playList.moreText,
          videos: res.result.video.videos,
          moreTexta: res.result.video.moreText,
          mlogs: res.result.mlog.mlogs,
          moreTextb: res.result.mlog.moreText,
          talks: res.result.talk.talks,
          moreTextc: res.result.talk.moreText,
          artists: res.result.artist.artists,
          moreTextd: res.result.artist.moreText,
          albums: res.result.album.albums,
          moreTextf: res.result.album.moreText,
          users: res.result.user.users,
          moreTexte: res.result.user.moreText,
        })
      }).catch(err => {})
    }
    if (this.data.active === 1) {
      this.setData({
        type: 1,
      })
      api.getsearch(this.data.keyword, this.data.type).then(res => {
        // console.log(res)
        this.setData({
          songs: res.result.songs,
        })
      }).catch(err => {})
    }
    if (this.data.active === 3) {
      this.setData({
        type: 1014,
      })
      api.getsearch(this.data.keyword, this.data.type).then(res => {
        // console.log(res)
        this.setData({
          videos: res.result.videos,
        })
      }).catch(err => {})
    }
    if (this.data.active === 4) {
      this.setData({
        type: 100,
      })
      api.getsearch(this.data.keyword, this.data.type).then(res => {
        // console.log(res)
        this.setData({
          artists: res.result.artists,
        })
      }).catch(err => {})
    }
    if (this.data.active === 5) {
      this.setData({
        type: 10,
      })
      api.getsearch(this.data.keyword, this.data.type).then(res => {
        // console.log(res)
        this.setData({
          albums: res.result.albums,
        })
      }).catch(err => {})
    }
    if (this.data.active === 6) {
      this.setData({
        type: 1000,
      })
      api.getsearch(this.data.keyword, this.data.type).then(res => {
        // console.log(res)
        this.setData({
          playlists: res.result.playlists,
        })
      }).catch(err => {})
    }
    if (this.data.active === 7) {
      this.setData({
        type: 1009,
      })
      api.getsearch(this.data.keyword, this.data.type).then(res => {
        // console.log(res)
        this.setData({
          djRadios: res.result.djRadios,
        })
      }).catch(err => {})
    }
    if (this.data.active === 8) {
      this.setData({
        type: 1002,
      })
      api.getsearch(this.data.keyword, this.data.type).then(res => {
        console.log(res)
        this.setData({
          userprofiles: res.result.userprofiles,
        })
      }).catch(err => {})
    }
  },
  bindchange(event) {
    // console.log(event)
    this.setData({
      active: event.detail.index
    })
    this.getsearch()
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
    // console.log(options)
    this.setData({
      keyword: options.keyword,
    })
    this.getsearch()
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