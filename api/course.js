import request from '@/utils/request'
import api from "js-cookie";

const api_name = '/eduservice/coursefront/'

export default {
  getCourseList(page,limit,searchObj) {
    return request({
      url: api_name + `getFrontCourseList/${page}/${limit}`,
      method: 'post',
      data: searchObj
    })
  },
  getCourseInfo(id){
    return request({
      url: api_name + `getFrontCourseInfo/${id}`,
      method: 'get'
    })
  }
}
