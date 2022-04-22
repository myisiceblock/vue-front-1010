import request from '@/utils/request'

const api_name = '/eduservice/indexfront/'

export default {
  getIndexData() {
    return request({
      url: api_name + 'index',
      method: 'get'
    })
  }
}
