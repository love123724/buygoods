// pages/search/search.js
import {getSearch} from "../../service/search.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    searcher:[],
    isFocus:false,
    inputvalue:''
  },
  timeid:-1,
  _getSearch(query){
    getSearch(query).then(res=>{
     console.log(res)
     const searcher=res.data.message
     this.setData({
      searcher
     })
    }).catch(err=>{
      console.log(err)
    })
  },
  handleInput(e){
//console.log(e)
    const query=e.detail.value
    if(!query.trim()){
      this.setData({
        searcher:[],
        isFocus:false
      })
      return;
    }
    //console.log(query)
   this.setData({
    isFocus:true
  })
    clearTimeout(this.timeid)
    this.timeid=setTimeout(()=>{
      this._getSearch(query)
    },1000)
     console.log(this.data.inputvalue)
   
  },
  btnClick(){
      this.setData({
        searcher:[],
        inputvalue:'',
        isFocus:false
      })
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