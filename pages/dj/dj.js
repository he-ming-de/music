const { default: api } = require("../../http/api")

// pages/dj/dj.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    data:[],
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    api.getdj().then(res=>{
      this.setData({
        data:res.data
      })
      // console.log(res)
    }).catch(err=>{})

    api.getcatelist().then(res=>{
      this.setData({
        categories:res.categories.slice(0,6),
        categoriesd:res.categories.slice(6)
      })
      // console.log(res)
    }).catch(err=>{})

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