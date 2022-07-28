import { callAPI } from '../config/api';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export const getAllDataMunfiq = async (search, limit, page) => {
  const url = `${ROOT_URL}/munfiq?search_query=${search}&limit=${limit}&page=${page}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const getDetailMunfiq = async (kode_tabung) => {
  const url = `${ROOT_URL}/munfiq/check?kode_tabung=${kode_tabung}`;

  return callAPI({ url, mwthod: 'GET', token: true });
};

export const setEditMunfiq = async (data, id_munfiq) => {
  const url = `${ROOT_URL}/munfiq/${id_munfiq}/edit`;

  return callAPI({ url, method: 'PUT', data, token: true });
};

export const setAddMunfiq = async (data) => {
  const url = `${ROOT_URL}/munfiq/tambah`;

  return callAPI({ url, method: 'POST', data, token: true });
};
