import request from './network.js'

export function getToken(encryptedData,rawData,iv,signature,code){
  return request({
  url:"/users/wxlogin",
  method:'post',
  data:{
    encryptedData,
    rawData,
    iv,
    signature,
    code
  }
  })
}