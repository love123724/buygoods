import request from './network.js'

export function getBanners(){
  return request({
    url:'/home/swiperdata'
  })
}

export function getCateItems(){
  return request({
    url:'/home/catitems'
  })
}

export function getFloorData(){
  return request({
    url:'/home/floordata'
  })
}