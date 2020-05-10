// pages/goods-detail/childComps/detail-swiper/w-detail-swiper.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
   banners:{
     type:Array,
     value:[]
   }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleImageClick(e){
    
      const currentUrl=e.currentTarget.dataset.currentUrl
      const urls=this.data.banners.map(v=>v.pics_mid)
      //console.log(urls)
      wx.previewImage({//预览大图
        current:currentUrl,//当前url
        urls:urls//所有url
      })
  }
}
})
