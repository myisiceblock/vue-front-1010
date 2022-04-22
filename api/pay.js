import request from '@/utils/request'

const api_name = '/eduorder/paylog/'

export default {
  createNative(orderNo) {
    return request({
      url: api_name + `createNative/${orderNo}`,
      method: 'post'
    })
  },
  queryPayStatus(orderNo){
    return request({
      url: api_name + `queryPayStatus/${orderNo}`,
      method: 'get'
    })
  }
}
