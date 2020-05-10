import request from './network.js'

export function getGoodsDetail(goods_id){
return request({
  url:"/goods/detail",
  data:{
    goods_id
  }
})
}