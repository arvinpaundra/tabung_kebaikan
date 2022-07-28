import { callAPI } from '../config/api';
const ROOT_URL = process.env.NEXT_PUBLIC_API;

export const setLogin = async (data) => {
  const url = `${ROOT_URL}/auth/login`;

  return callAPI({ url, method: 'POST', data, token: false });
};

export const setResetPass = () => {};
