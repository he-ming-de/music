const {
  default: api
} = require("../../http/api")

// pages/ranking/ranking.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    list:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //所有榜单
    // api.gettoplists().then(res => {
    //   this.setData({
    //     list: res.list
    //   })
    //   console.log(res)
    // }).catch(err => {})
    //所有榜单摘要
    api.getdetail().then(res => {
      this.setData({
        list: res.list.slice(0,4),
        lista:res.list.slice(0,3),
        listb:res.list.slice(5,8),
        listc:res.list.slice(15,21),
        listd:res.list.slice(23,26),
        liste:res.list.slice(27,34),
        listf:res.list.slice(9,23),
      })
      console.log(res)
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