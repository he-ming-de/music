const {
  default: api
} = require("../../http/api")

// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    uid: '',
    obj: {},
    Object: {},
  },
  getregister() {
    wx.navigateTo({
      url: `/pages/login/login`,
    })
  },
  edit() {
    let nickname = this.data.obj.nickname
    let gender = this.data.obj.gender
    let birthday = this.data.obj.birthday
    let city = this.data.obj.city
    let signature = this.data.obj.signature
    let province = this.data.obj.province
    wx.navigateTo({
      url: `/pages/edit/edit?nickname=${nickname}&gender=${gender}&birthday=${birthday}&city=${city}&signature=${signature}&province=${province}`,
    })
  },
  bouttom() {
    api.getlogout().then(res => {
      if (res.code === 200) {
        wx.removeStorageSync('uid')
        wx: wx.switchTab({
          url: '/pages/index/index',
        })
      }
      // console.log(res)
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.data.uid = wx.getStorageSync('uid')
    // console.log(this.data.uid)
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
    this.setData({
      uid: wx.getStorageSync('uid')
    })
    if (this.data.uid !== "") {
      api.getuser(this.data.uid).then(res => {
        this.setData({
          obj: res.profile,
          Object: res
        })
        console.log(res)
      }).catch(err => {})
    } else {}
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