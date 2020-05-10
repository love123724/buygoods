// pages/cart/cart.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
   address:{},
   cart:[],
   allChecked:false,
   totalPrice:0,
   totalNum:0
  },
  handleBtnClick(){
       wx.getSetting({
           success:(res)=>{
             console.log(res)
             const scope=res.authSetting["scope.address"]
             if(scope===false){
               wx.openSetting({
                  success:(res2)=>{
                    console.log(res2)
                  },
                  fail:(err2)=>{
                    console.log(err2)
                  }
               })
             }
             wx.chooseAddress({
             success:(res3)=>{
               console.log(res3)
               wx.setStorageSync('address', res3)
             },
             fail:(err3)=>{
               console.log()
             }
             })
           },
           fail:(err)=>{
             console.log(err)
           }
       })
  },
  handleChange(e){
    
    const goods_id=e.currentTarget.dataset.gid
    
    const {cart}=this.data

      const index=cart.findIndex(v=>v.goods_id===goods_id)
      cart[index].checked=! cart[index].checked
      wx.setStorageSync('cart', cart)
      const allChecked=cart.length? cart.every(item=>item.checked):false
      let totalNum=0
      let totalPrice=0
      cart.forEach(v=>{
        if(v.checked===true){
          totalPrice+=v.goods_price*v.num
          totalNum+=v.num
        }
      })
      this.setData({
        allChecked,
        cart,
        totalPrice,
        totalNum
      })
    
   
  },
  handleChange2(e){
    console.log(e)
    let {cart,allChecked}=this.data
     allChecked=!allChecked
      cart.forEach(item=>item.checked=allChecked)
   
     wx.setStorageSync('cart', cart)
     let totalNum=0
      let totalPrice=0
      cart.forEach(v=>{
        if(v.checked===true){
          totalPrice+=v.goods_price*v.num
          totalNum+=v.num
        }
      })
      this.setData({
        allChecked,
        cart,
        totalNum,
        totalPrice
       })
     console.log(this.data.allChecked)
  },
  handleOperate(e){
    const {gid,operation}=e.currentTarget.dataset
    console.log(gid)
    const {cart}=this.data
    const index=cart.findIndex(v=>v.goods_id===gid)
    if(cart[index].num===1&&operation===-1){
      wx.showModal({
        title: '提示',
        content: '确定删除商品吗?',
        success :(res)=>{
          if (res.confirm) {
            cart.splice(index,1)
            this.setData({
              cart
            })
            wx.setStorageSync('cart', cart)
          } else if(res.cancel){
              console.log("用户取消")
             
          }
        }
      })
      
    }else{
      cart[index].num+=operation
      let totalNum=0
      let totalPrice=0
      cart.forEach(v=>{
        if(v.checked===true){
          totalPrice+=v.goods_price*v.num
          totalNum+=v.num
        }
      })
      this.setData({
        cart,
        totalNum,
        totalPrice
      })
      wx.setStorageSync('cart', cart)
    }
   
  },
  onShow(){
      const address=wx.getStorageSync('address')
      const cart=wx.getStorageSync('cart')||[]
      const allChecked=cart.length? cart.every(item=>item.checked):false
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
        allChecked,
        cart,
        totalPrice,
        totalNum
      })
  },
  handlePay(){
    const {address,totalNum}=this.data
    if(!address.userName){
       wx.showToast({
         title: '请填写收货地址',
         icon: 'none',
         mask:true
       })
      return
    }
    if(totalNum==0){
      wx.showToast({
        title: '请选中要购买的商品',
        icon: 'none',
        mask:true
      })
      return
    }
    wx.navigateTo({
      url: '/pages/pay/pay',
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