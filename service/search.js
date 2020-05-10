import request from "./network.js"

export function getSearch(query){
return request({
  url:'/goods/qsearch',
  data:{
    query
  }
})
}