const { default: api } = require("../../http/api")

// components/recommend/recommend.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindsong(){
      wx.navigateTo({
        url: '/pages/square/square',
      })
    },
    bindrank(){
      wx.navigateTo({
        url: '/pages/ranking/ranking',
      })
    },
    binddj(){
      wx.navigateTo({
        url: '/pages/dj/dj',
      })
    },
  }
})
