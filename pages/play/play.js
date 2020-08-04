// pages/play/play.js
const {
  default: api
} = require("../../http/api")
const manager = wx.getBackgroundAudioManager()
import dayjs from "../../lib/dayjs.min.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: '',
    name: '',
    url: [],
    songs: [],
    lyric: '',
    flag: 0,
    flags: 0,
    flaga: 0,
    lyricArray: [],
    maringTop: 0,
    currentindex: 0,
    ids: [],
    names: [],
    index: 0,
    dt: '',
    value: '',
    values: '',
    duration: '',
    durations: '',
  },
  bindtx() {
    this.setData({
      flag: 1
    })
  },

  bindhtx() {
    this.setData({
      flag: 0
    })
  },

  bindloop() {
    this.setData({
      flags: 1
    })
  },

  bindrandom() {
    this.setData({
      flags: 2
    })
  },

  bindsinglecycle() {
    this.setData({
      flags: 0
    })
  },

  bindplay() {
    this.setData({
      flaga: 0
    })
  },

  bindsuspend() {
    this.setData({
      flaga: 1
    })
  },

  //播放
  unplay() {
    manager.play()
  },
  //暂停
  suspend() {
    manager.pause()
  },
  // 歌词结束时触发
  getmanagers() {
    manager.onEnded(() => {
      //顺序播放
      if (this.data.flags === 0) {
        this.nextsong()
      }
      //随机循环
      if (this.data.flags === 1) {
        let ids = Math.floor(Math.random() * this.data.ids.length)
        this.setData({
          id: this.data.ids[ids]
        })
        console.log(this.data.id)
        this.unplay()
        this.getsongdetail()
      }
      // 单曲循环
      if (this.data.flags === 2) {
        this.setData({
          id: this.data.id
        })
        this.unplay()
        this.getsongdetail()
      }
      this.setData({
        maringTop: 0,
        currentindex: 0,
      })
    })
  },
  //上一首
  lastsong() {
    this.setData({
      flaga: 0
    })
    let subid = this.data.id
    let subids = this.data.ids
    let index = 0
    for (var i = 0; i < subids.length; i++) {
      if (subid == subids[i]) {
        index = i
        break
      }
    }
    let perindex = index == 0 ? subids.length - 1 : index - 1
    let perid = subids[perindex]
    this.setData({
      id: perid
    })
    this.unplay()
    this.setData({
      maringTop: 0,
      currentindex: 0,
    })
    this.getsongdetail()
    this.getlyric()
  },
  //下一首
  nextsong() {
    this.setData({
      flaga: 0
    })
    let subid = this.data.id
    let subids = this.data.ids
    let index = 0
    for (var i = 0; i < subids.length; i++) {
      if (subid == subids[i]) {
        index = i
        break
      }
    }
    let nextindex = index == subids.length - 1 ? 0 : index + 1
    let nextid = subids[nextindex]
    this.setData({
      id: nextid,
    })
    this.setData({
      action: {
        method: "play"
      }
    })
    this.setData({
      maringTop: 0,
      currentindex: 0,
    })
    this.getsongdetail()
    this.getlyric()
  },
  // 解析歌词的方法
  parseLyric(lyric) {
    // 定义一个数组,存储歌词和时间,而且能够一一对应
    let lyricResult = []
    // 使用split(切割方法)对换行字符进行切割
    let lyricArray = lyric.split("\n")
    // 判断最后一个元素(歌词和时间)是否为空,如果为空 删掉
    if (lyricArray[lyricArray.length - 1] == "") {
      // 删除元素
      lyricArray.pop()
    }
    // 书写时间正则表达式
    let pattern = /\[\d{2}:\d{2}\.\d{2,3}\]/
    // 遍历数组中的每一个元素
    lyricArray.forEach(function (v, i, a) {
      // 使用正则表达式进行正则替换
      // replace: 替换的意思
      let realLyric = v.replace(pattern, "")
      // 对每一句歌词进行处理,将时间单独提取出来
      let time = v.match(pattern)

      // 判断time是否为空
      if (time != null) {
        // 去除中括号 slice: 截取
        let result = time[0].slice(1, -1)
        // 对result结果进行切割
        let timeArray = result.split(":")
        let finalTime = parseFloat(timeArray[0]) * 60 + parseFloat(timeArray[1])
        // 将对应的歌词和时间添加到数组中
        lyricResult.push([finalTime, realLyric])
      }

    })
    // 返回歌词数组
    return lyricResult
  },
  // 去掉空歌词 保留非空歌词
  sliceNull(lyricArray) {
    // 定义一个空数组
    let result = []
    // 遍历每个元素
    for (let i = 0; i < lyricArray.length; i++) {
      // 判断歌词是否为空
      if (lyricArray[i][1] != "") {
        result.push(lyricArray[i])
      }
    }
    return result
  },
  // 获取音乐详情
  getsongdetail() {
    api.getsongdetail(this.data.id).then(res => {
      this.setData({
        songs: res.songs,
        name: res.songs[0].name,
        dt: dayjs(res.songs[0].dt * 1).format("mm : ss")
      })
      //音乐 url
      api.getsongurl(this.data.id).then(res => {
        this.setData({
          url: res.data[0].url,
        })
        // console.log(res)
        manager.src = this.data.url
        manager.title = this.data.name
        this.getmanagers()
      }).catch(err => {})
    }).catch(err => {})
  },
  //获取歌词
  getlyric() {
    api.getlyric(this.data.id).then(res => {
      this.setData({
        lyric: res.lrc.lyric
      })
      let result = this.parseLyric(this.data.lyric)
      let finaResult = this.sliceNull(result)
      this.setData({
        lyricArray: finaResult
      })
    }).catch(err => {})
  },
  slider3change(e) {
    manager.seek(e.detail.value)
    // console.log(e)
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    console.log(options)
    let idsStr = options.ids
    let ids = idsStr.split(",")
    this.setData({
      ids: ids,
      id: options.id
    })
    // console.log(this.data.ids)
    this.getsongdetail()
    this.getlyric()

    manager.onTimeUpdate(() => {
      let currentTime = manager.currentTime
      let lyricArray = this.data.lyricArray
      if (this.data.currentindex >= 4) {
        this.setData({
          maringTop: (this.data.currentindex - 4) * 40
        })
      }
      if (this.data.currentindex == lyricArray.length - 2) {
        if (currentTime >= lyricArray[lyricArray.length - 1][0]) {
          this.setData({
            currentindex: lyricArray.length - 1
          })
        }
      } else {
        for (var i = 0; i < lyricArray.length - 1; i++) {
          if (currentTime >= lyricArray[i][0] && currentTime < lyricArray[i + 1][0]) {
            this.setData({
              currentindex: i
            })
          }
        }
      }
      this.setData({
        value: dayjs(manager.currentTime * 1000).format("mm : ss"),
        duration: dayjs(manager.duration * 1000).format("mm : ss"),
        values: manager.currentTime,
        durations: manager.duration
      })
    })

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