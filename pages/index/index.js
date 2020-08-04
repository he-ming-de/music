const {
  default: api
} = require("../../http/api")

Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners: [],
    result: [],
    albums: [],
    data: [],
    results: [],
    getresult: [],
    programs: [],
    value: '',
    flag: 0,
    allMatch: [],
    history: [],
    datas: [],
    type: '',
    keyword: '',
  },
  bindclick() {
    this.setData({
      flag: 1
    })
  },
  bindclicks() {
    this.setData({
      flag: 0
    })
  },
  //搜索跳转
  bindJump(e) {
    // console.log(e)
    let keyword = e.currentTarget.dataset.item.keyword
    let type = e.currentTarget.dataset.item.type
    this.setData({
      keyword: e.currentTarget.dataset.item.keyword,
      type: e.currentTarget.dataset.item.type
    })
    let history = this.data.history
    let obj = {}
    obj.value = e.currentTarget.dataset.item.keyword
    history.push(obj)
    wx.setStorageSync('history', history)
    this.setData({
      history: wx.getStorageSync('history')
    })
    wx.navigateTo({
      url: `/pages/searchList/searchList?keyword=${keyword}&type=${type}`,
    })
  },
  bindinput(e) {
    // console.log(e)
    this.setData({
      value: e.detail.value
    })
    //搜索建议
    api.getsuggest(this.data.value).then(res => {
      this.setData({
        allMatch: res.result.allMatch
      })
      // console.log(res)
    }).catch(err => {})
  },
  //确定跳转
  bindconfirm(e) {
    // console.log(e)
    let history = this.data.history
    let obj = {}
    obj.value = e.detail.value
    history.push(obj)
    wx.setStorageSync('history', history)
    this.setData({
      history: wx.getStorageSync('history')
    })
    let keyword = this.data.value
    wx.navigateTo({
      url: `/pages/searchList/searchList?keyword=${keyword}`,
    })
  },
  // 删除
  del() {
    wx.showModal({
      title: '提示',
      content: '是否确定删除',
      success: (res) => {
        if (res.confirm) {
          wx.removeStorageSync('history')
          this.setData({
            history: []
          })
        }
      }
    })
  },
  bingdels() {
    this.setData({
      value: ''
    })
  },
  // 热搜跳转
  binddatas(e) {
    // console.log(e)
    let keyword =e.currentTarget.dataset.item.searchWord
    let history = this.data.history
    let obj = {}
    obj.value = e.currentTarget.dataset.item.searchWord
    history.push(obj)
    wx.setStorageSync('history', history)
    this.setData({
      history: wx.getStorageSync('history')
    })
    wx.navigateTo({
      url: `/pages/searchList/searchList?keyword=${keyword}`,
    })
  },
  //历史跳转
  binddatasc(e){
    // console.log(e)
    let keyword = e.currentTarget.dataset.item.value
    wx.navigateTo({
      url: `/pages/searchList/searchList?keyword=${keyword}`,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //热搜列表 详细
    api.getsearchhot().then(res => {
      // console.log(res)
      this.setData({
        datas: res.data,
      })
    }).catch(err => {})
    //轮播图
    api.getbanner().then(res => {
      this.data.banners = res.banners
      this.setData({
        banners: this.data.banners
      })
      // console.log(res)
    }).catch(err => {})
    //推荐歌单
    api.getpersonalized().then(res => {
      this.data.result = res.result
      this.setData({
        result: this.data.result.slice(0, 6)
      })
      // console.log(this.data.result)
    }).catch(err => {})
    //新碟
    api.getalbum().then(res => {
      this.data.albums = res.albums.slice(0, 6)
      this.setData({
        albums: this.data.albums
      })
      // console.log(this.data.albums)
    }).catch(err => {})
    //新歌
    api.getsong().then(res => {
      this.data.data = res.data.slice(0, 6)
      this.setData({
        data: this.data.data
      })
      // console.log(this.data.data)
    }).catch(err => {})
    //新势力
    api.getnewsong().then(res => {
      this.data.results = res.result
      this.setData({
        results: this.data.results.slice(0, 6)
      })
      // console.log(this.data.results)
    }).catch(err => {})
    //推荐电台
    api.getdjprogram().then(res => {
      this.data.getresult = res.result.slice(0, 6)
      this.setData({
        getresult: this.data.getresult
      })
      // console.log(this.data.getresult);
    }).catch(err => {})
    //推荐节目
    api.getrecommend().then(res => {
      this.data.programs = res.programs.slice(0, 6)
      this.setData({
        programs: this.data.programs
      })
      // console.log(this.data.programs)
    }).catch(err => {})
    //歌手
    // api.gettoplist().then(res=>{
    //   console.log(res)
    // }).catch(err=>{})
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
    // 取
    let history = wx.getStorageSync('history')
    if (history) {
      this.setData({
        history: history
      })
    }
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