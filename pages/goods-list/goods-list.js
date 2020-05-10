// pages/goods-list/goods-list.js
import {getGoodsList} from "../../service/goods-list.js"
Page({

  /**
   * 页面的初始数据
   */
  data: {
    titles:['综合','销量','价格'],
    goodsList:[],
    pagenum:1,
    totalPages:0,
    pageSize:10,
    cid:'',
    query:''
  },
  _getGoodsList(cid,pagenum,query){
    getGoodsList(cid,pagenum,query).then(res=>{
      console.log(res.data.message.goods)
      const data=res.data.message.goods
      const total=res.data.message.total
      const totalPages=Math.ceil(total/this.data.pageSize)
     // console.log(totalPages)
      this.setData({
        goodsList:[...this.data.goodsList,...data],
        totalPages
      })
      //console.log(totalPages)
      //this.data.pagenum+=1
     // console.log(this.data.goodsList)
    }).catch(err=>{
      console.log(err)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
           console.log(options)
           this.data.cid=options.cid||""
           this.data.query=options.query||""
           console.log( this.data.query)
           this._getGoodsList(options.cid,this.data.pagenum,this.data.query)
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
       //console.log("上啦加载")
       if(this.data.pagenum>=this.data.totalPages){
            console.log("到底了")
             wx.showToast({
               title: '到底了',
             })
       }else{
         this.data.pagenum+=1
        this._getGoodsList(this.data.cid,this.data.pagenum)
        console.log("上啦加载")
       }
       
  },
  onPullDownRefresh(){
   this.setData({
     goodsList:[]
   })
   this.data.pagenum=1
   this._getGoodsList(this.data.cid,this.data.pagenum)
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    
  }
})