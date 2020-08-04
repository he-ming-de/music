// pages/edit/edit.js
import dayjs from "../../lib/dayjs.min.js"
import area from "../../lib/area"
import api from "../../http/api.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    birthday: '',
    city: '',
    gender: '',
    province:'',
    area: area,
    nickname: '',
    signature: '',
    obj: {},
    show: '',
    columns: ['保密', '男', '女'],
    currentDate: new Date().getTime(),
    minDate: new Date().getTime(),
    formatter(type, value) {
      if (type === 'year') {
        return `${value}年`;
      } else if (type === 'month') {
        return `${value}月`;
      }
      return value;
    },
  },
  onClose(){},
  getUserInfo(){},
  onChange(e){
    // console.log(e)
    this.setData({
      nickname:e.detail
    })
  },
  nickname() {
    this.setData({
      show: true
    })
  },
  gender() {
    this.setData({
      show1: true
    })
  },
  cance() {
    this.setData({
      show1: false
    })
  },
  confirm(e) {
    this.setData({
      gender: e.detail.value,
      show1: false
    })
  },
  birthday() {
    this.setData({
      show2: true
    })
  },
  cancels() {
    this.setData({
      show2: false
    })
  },
  confirms(e) {
    // console.log(e)
    this.setData({
      birthday: dayjs(e.detail * 1).format('YYYY-MM-DD'),
      show2: false
    })
  },
  simcity() {
    this.setData({
      show3: true
    })
  },
  cancelcity() {
    this.setData({
      show3: false
    })
  },
  confirmcity(e) {
    // console.log(e)
    let simcity = `${e.detail.values[0].name}${e.detail.values[1].name}`
    this.setData({
      simcity: simcity,
      show3: false
    })
  },
  bouttom() {
    api.getusers(
      this.data.gender,
      this.data.signature,
      this.data.city,
      this.data.nickname,
      this.data.birthday,
      this.data.province
      ).then(res => {
      console.log(res)
    }).catch(err => {})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options)

    // 省份
    let province_list = this.data.area.province_list
    this.data.province = options.province
    let arr = []
    for (let key in province_list) {
      let dict = {};
      dict.id = key,
        dict.name = province_list[key]
      arr.push(dict);
    }
    let provinceName = arr.filter(item => {
      return this.data.province === item.id
    })
    let provinces = provinceName[0].name
    // console.log(provinces)
    // 城市
    let city_list = this.data.area.city_list
     this.data.city = options.city
    let arrs = []
    for (let i in city_list) {
      let obj = {};
      obj.id = i,
        obj.name = city_list[i]
      arrs.push(obj);
    }
    let cityName = arrs.filter(item => {
      return this.data.city === item.id
    })
    let citys = cityName[0].name
    // console.log(citys)

    // // 详细地址
    let detailCity = `${provinces}${citys}`
    // console.log(detailCity)
    this.setData({
      nickname: options.nickname,
      birthday: dayjs(options.birthday * 1).format('YYYY-MM-DD'),
      simcity: detailCity,
      signature: options.signature
    })
    if (options.gender == 0) {
      this.setData({
        gender: '保密'
      })
    }
    // console.log(this.data.gender)
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