import { callAPI } from '../config/api';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export const getAllDataPetugas = async (search, limit, page) => {
  const url = `${ROOT_URL}/users?search_query=${search}&limit=${limit}&page=${page}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const getDetailPetugas = async (username) => {
  const url = `${ROOT_URL}/users/username/${username}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const getRekapPetugas = async (id_user) => {
  const url = `${ROOT_URL}/users/${id_user}/rekap`;

  return callAPI({ url, method: 'GET', token: true });
};

export const setResetPass = async (id_user, username) => {
  const url = `${ROOT_URL}/users/${id_user}/reset-password?username=${username}`;

  return callAPI({ url, method: 'PUT', token: true });
};

export const setTambahPetugas = async (data) => {
  const url = `${ROOT_URL}/users/tambah`;

  return callAPI({ url, method: 'POST', data, token: true });
};

export const getDetailUser = async (id_user) => {
  const url = `${ROOT_URL}/users/id/${id_user}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const setAddPetugas = async (data) => {
  const url = `${ROOT_URL}/users/tambah`;

  return callAPI({ url, method: 'POST', data, token: true });
};

export const setEditProfile = async (data, id_user) => {
  const url = `${ROOT_URL}/users/${id_user}/edit`;

  return callAPI({ url, method: 'PUT', data, token: true });
};

export const setEditPassword = async (data, id_user, username) => {
  const url = `${ROOT_URL}/users/${id_user}/change-password?username=${username}`;

  return callAPI({ url, method: 'PUT', data, token: true });
};
