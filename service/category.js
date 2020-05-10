import request from './network.js'

export function getCategoryData(){
return request({
  url:"/categories"
})
}