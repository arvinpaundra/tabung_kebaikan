import { callAPI } from '../config/api';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export const getAllPenarikan = async (search, limit, page) => {
  const url = `${ROOT_URL}/penarikan?search_query=${search}&limit=${limit}&page=${page}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const getCheckStatusPenarikan = async (kode_tabung) => {
  const url = `${ROOT_URL}/penarikan/check?kode_tabung=${kode_tabung}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const getPenarikanTerbaru = async () => {
  const url = `${ROOT_URL}/penarikan/latest`;

  return callAPI({ url, method: 'GET', token: true });
};

export const setAddPenarikan = async (data, kode_tabung) => {
  const url = `${ROOT_URL}/penarikan?kode_tabung=${kode_tabung}`;

  return callAPI({ url, method: 'POST', data, token: true });
};

export const getDetailPenarikan = async (id_penarikan) => {
  const url = `${ROOT_URL}/penarikan/${id_penarikan}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const setEditPenarikan = async (data, id_penarikan, kode_tabung) => {
  const url = `${ROOT_URL}/penarikan/${id_penarikan}/edit?kode_tabung=${kode_tabung}`;

  return callAPI({ url, method: 'PUT', data, token: true });
};
