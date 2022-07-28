import { callAPI } from '../config/api';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export const getAllKecamatan = async (search, limit, page) => {
  const url = `${ROOT_URL}/kecamatan?search_query=${search}&limit=${limit}&page=${page}`;

  return callAPI({ url, method: 'GET', token: false });
};

export const getDetailKecamatan = async (id_kec) => {
  const url = `${ROOT_URL}/kecamatan/${id_kec}`;

  return callAPI({ url, method: 'GET', token: false });
};

export const setAddkecamatan = async (data) => {
  const url = `${ROOT_URL}/kecamatan/tambah`;

  return callAPI({ url, method: 'POST', data, token: true });
};

export const setEditKecamatan = async (data, id_kec) => {
  const url = `${ROOT_URL}/kecamatan/${id_kec}/edit`;

  return callAPI({ url, method: 'PUT', data, token: true });
};
