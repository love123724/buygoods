const baseURL="https://api-hmugo-web.itheima.net/api/public/v1"
let axiosTimes=0
export default function(options){
  return new Promise((resolve,reject)=>{
    wx.showLoading({
       title:" 加载中",
       mask:true
    })
    axiosTimes+=1
    wx.request({
      url:baseURL+options.url,
      method:options.method||'get',
      data:options.data||{},
      success:(res)=>{
      resolve(res)
    },
     fail:(err)=>{
      reject(err)
    },
    complete:()=>{
      axiosTimes-=1
      if(axiosTimes===0){
         setTimeout(function () {
          wx.hideLoading()
        }, 2000)
      }
       
        
      
    }
    })
   
  })
}