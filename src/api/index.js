/*
* @Author: itlsq
* @Date:   2019-01-17 13:20:20
* @Last Modified by:   itlsq
* @Last Modified time: 2019-01-18 11:45:44
*/
import axios from 'axios'
//基地址

let base = 'http://192.168.1.140:8080/testDict/';

//通用方法
export const POST = (url, params) => {
  return axios.post(`${base}${url}`, params).then(res => res.data)
}

export const GET = (url, params) => {
  return axios.get(`${base}${url}`, {params: params}).then(res => res.data)
}

export const PUT = (url, params) => {
  return axios.put(`${base}${url}`, params).then(res => res.data)
}

export const DELETE = (url, params) => {
  return axios.delete(`${base}${url}`, {params: params}).then(res => res.data)
}

export const PATCH = (url, params) => {
  return axios.patch(`${base}${url}`, params).then(res => res.data)
}
