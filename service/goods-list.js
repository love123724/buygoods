import request from "./network.js"

export function getGoodsList(cid,pagenum,query){
  return request({
    url:'/goods/search',
    data:{
      query,
      cid,
      pagenum,
      pagesize:10
    }
  })
}