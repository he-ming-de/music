// pages/register/register.js
const {
  default: api
} = require("../../http/api")
Page({

  /**
   * 页面的初始数据
   */
  data: {
    phone: '',
    password: '',
    captcha: '',
    nickname: '',
  },
  //发送验证码
  bindcaptcha() {
    api.getcaptcha(this.data.phone).then(res => {
      // console.log(res)
    }).catch(err => {})
  },
  //手机号
  bindinput(e) {
    // console.log(e)
    this.setData({
      phone: e.detail
    })
    // console.log(this.data.phone)
  },
  //验证码
  bindin(e) {
    // console.log(e)
    this.setData({
      captcha: e.detail
    })
    // console.log(this.data.captcha)
  },
  //密码
  bindinputs(e) {
    // console.log(e)
    this.setData({
      password: e.detail
    })
    // console.log(this.data.password)
  },
  //昵称
  bindinputsh(e) {
    // console.log(e)
    this.setData({
      nickname: e.detail
    })
    // console.log(this.data.nickname)
  },
  //注册
  getregister() {
    //检测手机号是否已注册
    api.getcellphone(this.data.phone).then(res => {
      // console.log(res)
      if (res.exist === 1) {
        wx.showToast({
          title: '该号码已注册',
        })
      }
    }).catch(err => {})
    //验证验证码
    api.getverify(this.data.phone, this.data.captcha).then(res => {
      // console.log(res)

    }).catch(err => {
      if (err.response.data.code === 503) {
        wx.showToast({
          title: '验证码错误',
          icon: 'none'
        })
      }
    })
    //注册
    api.getregister(this.data.phone, this.data.password, this.data.captcha, this.data.nickname).then(res => {
      if (res.code === 200) {
        wx.navigateTo({
          url: '/pages/login/login',
        })
        wx.showToast({
          title: '注册成功',
        })
      } else {
        wx.showToast({
          title: res.msg
        })
      }
      // console.log(res)
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //注册

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