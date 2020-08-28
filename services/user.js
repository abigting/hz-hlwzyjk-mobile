import request from '../utils/request';
import { OHMS } from '../constant';

export function login(data) {
  return request(`/${OHMS.YHZX}/api/user/login`, {
    method: 'post',
    data,
  });
}

export function logout(data) {
  return request(`/${OHMS.YHZX}/api/user/logout`, {
    method: 'post',
    data
  });
}
