import request from '@/utils/request'
import api from "js-cookie";

const api_name = '/eduservice/teacherfront/'

export default {
  getTeacherList(page,limit) {
    return request({
      url: api_name + `getTeacherFrontList/${page}/${limit}`,
      method: 'post'
    })
  },
  getTeacherInfo(teacherId){
    return request({
      url: api_name + `getTeacherFrontInfo/${teacherId}`,
      method: 'get'
    })
  }
}
