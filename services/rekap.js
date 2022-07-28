import { callAPI } from '../config/api';

const ROOT_URL = process.env.NEXT_PUBLIC_API;

export const getRekapPerbulan = async (month, year) => {
  const url = `${ROOT_URL}/rekap/data-rekap?month=${month}&year=${year}`;

  return callAPI({ url, method: 'GET', token: false });
};

export const getTotalSaldo = async () => {
  const url = `${ROOT_URL}/rekap/total-saldo`;

  return callAPI({ url, method: 'GET', token: false });
};

export const getSemuaRekap = async (month, year, search, limit, page) => {
  const url = `${ROOT_URL}/rekap?month=${month}&year=${year}&search_query=${search}&limit=${limit}&page=${page}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const getRekapByStatus = async (month, year, status, search, limit, page) => {
  const url = `${ROOT_URL}/rekap/by-status?month=${month}&year=${year}&status=${status}&search_query=${search}&limit=${limit}&page=${page}`;

  return callAPI({ url, method: 'GET', token: true });
};

export const getRekapByKecamatan = async (month, year, id_kec, search, limit, page) => {
  const url = `${ROOT_URL}/rekap/by-kecamatan?month=${month}&year=${year}&id_kec=${id_kec}&search_query=${search}&limit=${limit}&page=${page}`;

  return callAPI({ url, method: 'GET', token: true });
};
