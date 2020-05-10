// pages/pay/pay.js
// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   address:{},
   cart:[],
   totalPrice:0,
   totalNum:0
  },
  onShow(){
      const address=wx.getStorageSync('address')
      const cart=wx.getStorageSync('cart')||[]
      const checkedGood=cart.filter(item=>item.checked===true)
      let totalNum=0
      let totalPrice=0
      cart.forEach(item=>{
        if(item.checked===true){
          totalPrice+=item.goods_price*item.num
          totalNum+=item.num
        }
      })
      this.setData({
        address,
        cart:checkedGood,
        totalPrice,
        totalNum
      })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  handlePay(){
    const token=wx.getStorageSync('token')
    if(!token){
      wx.navigateTo({
        url: '/pages/auths/auths',
      })
      return;
    }
  },
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