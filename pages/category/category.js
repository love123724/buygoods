// pages/category/category.js
import {getCategoryData} from "../../service/category.js"
Page({
  /**
   * 页面的初始数据
   */
  data: {
    categories:[],
    leftMenu:[],
    rightContent:[],
    currentIndex:0,
    scrollTop:0
  },
  _getCategoryData(){
    getCategoryData().then(res=>{
   // console.log(res)
    const categories=res.data.message
    wx.setStorageSync('cates', {time:Date.now(),data:categories})
    const leftMenu=categories.map(v=>v.cat_name)
    const rightContent=categories[0].children
    console.log(rightContent)
    this.setData({
      categories,
      leftMenu,
      rightContent,
    
    })
    }).catch(err=>{
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const cates=wx.getStorageSync('cates').categories
    if(!cates){
      console.log("没有")
      this._getCategoryData()
    }else{
      if(Date.now()-cates.time>1000*300){
        this._getCategoryData()
        console.log("新的")
      }else{
        console.log("旧")
        wx.setStorageSync('cates', cates)
      }
    }
   
  },
  menuClick(e){
    const index=e.currentTarget.dataset.index
    const rightContent=this.data.categories[index].children
    this.setData({
      currentIndex:index,
      rightContent,
      scrollTop:0
    })
    //console.log(rightContent)
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