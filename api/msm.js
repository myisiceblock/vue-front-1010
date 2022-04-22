import request from '@/utils/request'

const api_name = '/edumsm/msm/'

export default {
  getMobile(mobile) {
    return request({
      url: api_name + `send/${mobile}`,
      method: 'get'
    })
  }
}
