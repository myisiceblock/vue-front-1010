import request from '@/utils/request'

const apifront_name = '/educms/bannerfront/'

export default {
  getListBanner() {
    return request({
      url: apifront_name + 'getAllBanner',
      method: 'get'
    })
  }
}
