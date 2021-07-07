import request from '@/utils/request'

export function getList(data) {
  return request({
    url: '/vue-admin-template/component/list',
    method: 'post',
    data
  })
}
