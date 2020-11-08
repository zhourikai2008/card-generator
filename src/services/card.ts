import request from '@/utils/request';
import { stringify } from 'qs';

export async function add(params: any) {
  console.log(params)
  return request(`/api/card`, {
    method: 'POST',
    body: params
  })
}

export async function get(params: any) {
  return request(`/api/card?${stringify(params)}`)
}
