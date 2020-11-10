import request from '@/utils/request';

export async function add(params: any) {
  return request(`/api/card`, {
    method: 'POST',
    data: params
  })
}

export async function get(params: any) {
  return request(`/api/card`, {
    method: 'GET',
    params,
  })
}
