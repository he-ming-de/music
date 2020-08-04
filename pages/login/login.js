const {
  default: api
} = require("../../http/api")

// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    flag: 0,
    phone: '',
    password: '',
    email: '',
    pass: '',
  },
  bindmobilephone() {
    this.setData({
      flag: 0
    })
  },
  bindmailbox() {
    this.setData({
      flag: 1,
      uid:'',
    })
  },
  //注册
  getregister() {
    wx.navigateTo({
      url: `/pages/register/register`,
    })
  },
  bindinput(e) {
    this.setData({
      phone: e.detail
    })
    // console.log(this.data.phone)
  },
  bindinputs(e) {
    this.setData({
      password: e.detail
    })
    // console.log(this.data.password)
  },
  //手机登录
  bindlogin() {
    if (this.data.phone === '' || this.data.password === '') {
      wx.showToast({
        title: '手机号或用户名为空',
        icon: 'none'
      })
    } else if (this.data.phone.length !== 11) {
      wx.showToast({
        title: '手机号格式错误',
        icon: 'none'
      })
    } else {
      api.getlogin(this.data.phone, this.data.password).then(res => {
        if (res.code === 200) {
          wx.switchTab({
            url: '/pages/my/my',
          })
          wx.showToast({
            title: "登录成功",
          })
        } else {
          wx.showToast({
            title: res.msg,
            icon: 'none'
          })
        }
        
        this.setData({
          uid:res.profile.userId
        })
        wx:wx.setStorageSync('uid', this.data.uid)
        // console.log(this.data.uid)
      }).catch(err => {
        wx.showToast({
          title: err.engine.response.msg,
          icon: 'none'
        })
      })
    }
  },
  bindemail(e) {
    this.setData({
      email: e.detail
    })
    // console.log(this.data.email)
  },
  bindpass(e) {
    this.setData({
      pass: e.detail
    })
    // console.log(this.data.pass)
  },
  //邮箱登录
  bindls() {
    api.getlogins(this.data.email, this.data.pass).then(res => {
      if (res.code === 200) {
        wx.switchTab({
          url: '/pages/my/my',
        })
        wx.showToast({
          title: '登录成功',
        })
      } else {
        wx.showToast({
          title: res.msg,
        })
      }
      // console.log(res)
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
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

  }
})