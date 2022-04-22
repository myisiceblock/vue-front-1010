import request from '@/utils/request'
import api from "js-cookie";

const api_name = '/eduservice/comment/'

export default {
  getPageList(page,limit,courseId){
    return request({
      url: api_name + `${page}/${limit}/${courseId}`,
      method: 'get'
    })
  },
  addComment(comment){
    return request({
      url: api_name + `auth/save`,
      method: 'post',
      data: comment
    })
  }
}
