import request from '@/utils/request'

const api_name = '/eduorder/order/'

export default {
  createOrders(courseId) {
    return request({
      url: api_name + `createOrder/${courseId}`,
      method: 'post'
    })
  },
  getOrdersInfo(orderId){
    return request({
      url: api_name + `getOrderInfo/${orderId}`,
      method: 'get'
    })
  }
}
