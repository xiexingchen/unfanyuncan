// pages/demo1/index.js
import Toast from 'path/to/@vant/weapp/dist/toast/toast';

Page({

  /**
   * 页面的初始数据
   */
  data: {
    background:'https://test.rongdaufun.com/attachment/images/4/2020/06/p4RrTPD6XBGKqKmL9L98OlsV3wtOPHS51Mz.png',
    indicatorDots: true,
    vertical: false,
    autoplay: false,
    interval: 2000,
    duration: 500,
    bannerInfo:[
      {imgUrl:"https://test.rongdaufun.com/platform/Application/College/Public/img/banner-index1.png",title:"超值套餐",price:"9.9起"},
      {imgUrl:"https://test.rongdaufun.com/platform/Application/College/Public/img/banner-index2.png",title:"热卖单品",price:""},
      {imgUrl:"https://test.rongdaufun.com/platform/Application/College/Public/img/banner-index3.png",title:"好评餐品",price:""}
    ],
    active: 0,
    show: false,
    columns: ['杭州', '宁波', '温州', '嘉兴', '湖州'],

  },

  onChange(event) {
    wx.showToast({
      title: `切换到标签 ${event.detail.name}`,
      icon: 'none',
    });
  },

  showPopup() {
    this.setData({ show: true });
  },
  onClose() {
    this.setData({ show: false });
  },
  onChange(event) {
    const { picker, value, index } = event.detail;
    Toast(`当前值：${value}, 当前索引：${index}`);
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