// pages/goods-detail/goods-detail.js
import {getGoodsDetail} from '../../service/goods-detail.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    gid:0,
    pics:[],
    goods_price:0,
    goods_name:'',
    goods_introduce:"",
    isCollect:false
  },
  GoodsInfo:{
  
  },
  /**
   * 生命周期函数--监听页面加载
   */
  _getGoodsDetail(goods_id){
   // console.log(goods_id)
   getGoodsDetail(goods_id).then(res=>{
     console.log(res)
     this.GoodsInfo=res.data.message
     const {goods_price,goods_name,goods_introduce,pics}=res.data.message
     let collect=wx.getStorageSync('collect')||[]
     let isCollect=collect.some(v=>v.goods_id===this.GoodsInfo.goods_id)
     console.log('---')
    // console.log(goods_price)
     this.setData({
      pics,
      goods_price,
      goods_name,
      goods_introduce,
      isCollect
     })
   })
  },
  addCart(e){
      console.log(e)
      let cart=wx.getStorageSync('cart')||[]
      let index=cart.findIndex((item)=>{
        return item.goods_id===this.GoodsInfo.goods_id
      })
      if(index===-1){
        this.GoodsInfo.num=1
        this.GoodsInfo.checked=true
        cart.push(this.GoodsInfo)
      }else{
         cart[index].num+=1
      }
      wx.setStorageSync('cart', cart)
      wx.showToast({
        title: '添加成功',
        icon:"success",
        mask:true
      })
  },
  collectClick(){
       let collect=wx.getStorageSync('collect')||[]
        let isCollect=false
        let index=collect.findIndex(v=>v.goods_id===this.GoodsInfo.goods_id)
       
        if(index!==-1){
         collect.splice(index,1)
         isCollect=false
        }else{
         
          collect.push(this.GoodsInfo)
          isCollect=true
        
        } 
        wx.setStorageSync('collect', collect)
        this.setData({
          isCollect
        })
      /* let isCollect=false
       console.log(index)
       if(index!==-1){
            collect.splice(index,1)
            isCollect=false
            
       }else{
              collect.push(this.GoodsInfo)
              isCollect=true
       }
       this.setData({
            isCollect
       })
       console.log(this.data.isCollect)
       wx.setStorageSync('collect', collect)*/
       console.log(wx.getStorageSync('collect'))
  },
  onLoad: function (options) {
     this._getGoodsDetail(options.gid)
     this.data.gid=options.gid
     console.log(this.data.gid)
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
  onShareAppMessage: function (options) {
    return {
      title:"小涛品优购"
    }
  }
})