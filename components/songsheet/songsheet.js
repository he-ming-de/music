// components/songsheet/songsheet.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    result: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    hotSongs: []
  },

  /**
   * 组件的方法列表
   */
  methods: {
    bindge() {
      wx.navigateTo({
        url: '/pages/square/square',
      })
    },
    bindsheet(e) {
      let id = e.currentTarget.dataset.item.id
      // console.log(e)
      wx.navigateTo({
        url: `/pages/seet/seet?id=${id}`,
      })
    },
  }
})