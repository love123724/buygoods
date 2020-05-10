// pages/home/home.js
import {getBanners,getCateItems,getFloorData} from '../../service/home.js'
Page({
  /**
   * 页面的初始数据
   */
  data: {
  banners:[],
  cateLists:[],
  floorData:[]
  },
  _getBanners(){
    getBanners().then(res=>{
      console.log(res.data.message)
      const banners=res.data.message
      this.setData({
        banners
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  _getCateItems(){
    getCateItems().then(res=>{
      //console.log(res.data.message)
      const cateLists=res.data.message
      this.setData({
        cateLists
      })
    }).catch(err=>{
      console.log(err)
    })
  },
  _getFloorData(){
    getFloorData().then(res=>{
      console.log(res.data.message)
      const floorData=res.data.message
      this.setData({
        floorData
      })
    }).catch(err=>{
      console.log(res)
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this._getBanners()
    this._getCateItems()
    this._getFloorData()
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