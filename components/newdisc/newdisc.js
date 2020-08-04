// components/newdisc/newdisc.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    albums: {
      type: Array,
    },
    data: {
      type: Array
    }
  },
  
  /**
   * 组件的初始数据
   */
  data: {
    flag: 0,
    hotSongs:[]
  },

  /**
   * 组件的方法列表
   */
  methods: {
    binddish() {
      this.setData({
        flag: 0
      })
    },
    bindsong() {
      this.setData({
        flag: 1
      })
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
    }
  }
})