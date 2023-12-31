import request from '@/utils/request'

// 查询分类列表
export function listTag(query) {
  return request({
    url: '/tag/list',
    method: 'get',
    params: query
  })
}

// 查询分类列表
export function listAllTag() {
  return request({
    url: '/tag/listAll',
    method: 'get'
  })
}
// 查询分类详细
export function getTag(id) {
  return request({
    url: '/tag/' + id,
    method: 'get'
  })
}

// 新增分类
export function addTag(data) {
  return request({
    url: '/tag',
    method: 'post',
    data: data
  })
}

// 修改分类
export function updateTag(data) {
  return request({
    url: '/tag',
    method: 'put',
    data: data
  })
}

// 删除分类
export function delTag(id) {
  return request({
    url: '/tag/' + id,
    method: 'delete'
  })
}

// 导出分类
export function exportTag(query) {
  return request({
    url: '/content/tag/export',
    method: 'get',
    params: query
  })
}
