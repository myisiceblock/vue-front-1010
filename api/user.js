import request from '@/utils/request'

const api_name = '/ucenterservice/member/'

export default {
  login(user) {
    return request({
      url: api_name + 'login',
      method: 'post',
      data: user
    })
  },
  getLoginInfo() {
    return request({
      url: api_name + `getMemberInfo`,
      method: 'get'
      // headers: {'token': cookie.get('guli_token')}
    })
  },
  //用户注册
  submitRegister(formItem) {
    return request({
      url: api_name + `register`,
      method: 'post',
      data: formItem
    })
  }
}
