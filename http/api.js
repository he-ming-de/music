const fly = require('./index')

export default {
  // 接口根路径:  http://49.233.66.125:3000
  //轮播图
  getbanner() {
    return fly.get(`/banner`)
  },
  //推荐歌单
  getpersonalized() {
    return fly.get(`/personalized`)
  },
  //新碟
  getalbum() {
    return fly.get(`/top/album`)
  },
  //新歌
  getsong() {
    return fly.get(`/top/song`)
  },
  //新势力
  getnewsong() {
    return fly.get(`/personalized/newsong`)
  },
  //推荐电台
  getdjprogram() {
    return fly.get(`/personalized/djprogram`)
  },
  //推荐节目
  getrecommend() {
    return fly.get(`/program/recommend`)
  },
  //热门歌手
  getartists(){
    return fly.get(`/top/artists`)
  },
  //歌手分类
  getartist(type,area,initial) {
    return fly.get(`/artist/list?type=${type}&area=${area}&initial=${initial}`)
  },
  //歌手榜
  gettoplist() {
    return fly.get(`/toplist/artist`)
  },
  //注册
  getregister(phone, password, captcha, nickname) {
    return fly.get(`/register/cellphone?phone=${phone}&password=${password}&captcha=${captcha}&nickname=${nickname}`)
  },
  // 发送验证码
  getcaptcha(phone) {
    return fly.get(`/captcha/sent?phone=${phone}`)
  },
  // 手机登录
  getlogin(phone, password) {
    return fly.get(`/login/cellphone?phone=${phone}&password=${password}`)
  },
  // 邮箱登录
  getlogins(email, pass) {
    return fly.get(`/login?email=${email}&password=${pass}`)
  },
  //检测手机号是否已注册
  getcellphone(phone) {
    return fly.get(`/cellphone/existence/check?phone=${phone}`)
  },
  //验证验证码
  getverify(phone, captcha) {
    return fly.get(`/captcha/verify?phone=${phone}&captcha=${captcha}`)
  },
  //用户信息
  getuser(uid) {
    return fly.get(`/user/detail?uid=${uid}`)
  },
  //更新用户信息
  getusers(gender, signature, city, nickname, birthday, province) {
    return fly.get(`/user/update?gender=${gender}&signature=${signature}&city=${city}&nickname=${nickname}&birthday=${birthday}&province=${province}`)
  },
  //退出登录
  getlogout() {
    return fly.get(`/logout`)
  },
  //歌单( 网友精选碟 )
  gettop(cat) {
    return fly.get(`/top/playlist`)
  },
  // 歌单( 网友精选碟 ) 分类
  gettops() {
    return fly.get(`/top/playlist?cat=${cat}`)
  },
  //精品歌单
  gethighquality() {
    return fly.get(`/top/playlist/highquality`)
  },
  //精品歌单 分类s
  gethighqualitys(cat) {
    return fly.get(`/top/playlist/highquality?cat=${cat}`)
  },
  //歌单分类
  getcatlist() {
    return fly.get(`/playlist/catlist`)
  },
  // 所有榜单
  gettoplists() {
    return fly.get(`/toplist`)
  },
  // 所有榜单内容摘要
  getdetail() {
    return fly.get(`/toplist/detail`)
  },
  //电台 banner
  getdj() {
    return fly.get(`/dj/banner`)
  },
  //电台分类
  getcatelist(){
    return fly.get(`/dj/catelist`)
  },
  // 精品歌单 华语
  gethighqualityhu(cat){
    return fly.get(`/top/playlist/highquality?cat=${cat}`)
  },
  //歌单详情
  getdetails(id){
    return fly.get(`/playlist/detail?id=${id}`)
  },
  // 歌手单曲
  getartistsg(id){
    return fly.get(`/artists?id=${id}`)
  },
  // 搜索建议
  getsuggest(keywords){
    return fly.get(`/search/suggest?keywords=${keywords}&type=mobile`)
  },
  //搜索
  getsearch(keywords,type){
    return fly.get(`/search?keywords=${keywords}&type=${type}`)
  },
  //搜索默认关键字
  getdefault(){
    return fly.get(`/search/default`)
  },
  //热搜列表详细
  getsearchhot(){
    return fly.get(`/search/hot/detail`)
  },
  //音乐 url
  getsongurl(id){
    return fly.get(`/song/url?id=${id}`)
  },
  // 获取音乐详情
  getsongdetail(id){
    return fly.get(`/song/detail?ids=${id}`)
  },
  //获取歌词
  getlyric(id){
    return fly.get(`/lyric?id=${id}`)
  }
}