/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getDetailPetugas, getRekapPetugas, setResetPass } from '../../../services/petugas';
import Item from './Item';

const IMG_URL = process.env.NEXT_PUBLIC_IMG;

const CardDetailPetugas = (props) => {
  const router = useRouter();

  const { username } = router.query;

  const [petugas, setPetugas] = useState({
    id_user: 0,
    fullname: '',
    username: username,
    role: '',
    id_kec: 0,
    profile_picture: 'init.png',
    nama_kec: '',
  });
  const [rekap, setRekap] = useState({});
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const detailPetugas = useCallback(async (username) => {
    try {
      setIsLoading(true);
      const response = await getDetailPetugas(username);

      setPetugas(response.data.result);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  const rekapPetugas = useCallback(async (id_user) => {
    try {
      const response = await getRekapPetugas(id_user);

      setRekap(response.data);
    } catch (error) {}
  }, []);

  useEffect(() => {
    detailPetugas(username);
  }, [detailPetugas, username]);

  const { id_user } = petugas;

  useEffect(() => {
    if (id_user) {
      rekapPetugas(id_user);
    }
  }, [rekapPetugas, id_user]);

  const handleReset = async (id_user, username) => {
    const reset = await setResetPass(id_user, username);

    if (reset.error) {
      toast.error('Reset password gagal!');
    }

    toast.success('Reset password berhasil!');
  };

  return (
    <section className="p-8 bg-white rounded-xl drop-shadow-lg">
      <div className="flex gap-6">
        <img
          src={`${IMG_URL}/profiles/${petugas.profile_picture}`}
          alt=""
          width={130}
          height={130}
          className="rounded-full"
        />
        <div className="self-center">
          <h3 className="text-2xl font-bold text-black/90">{petugas.username}</h3>
          <p className="text-smoke-grey">{petugas.nama_kec}</p>
        </div>
      </div>
      <div className="border-light-grey border-b my-6" />

      {isLoading ? (
        <div className="w-full animate-pulse h-20 flex justify-center items-center text-black/90">
          <p>Loading . . .</p>
        </div>
      ) : (
        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-xl text-black/90">Detail Petugas</h3>
          <Item label="Nama Lengkap" value={petugas.fullname} />
          <Item label="Divisi" value="Fundraiser Offline" />

          <h3 className="font-bold text-xl text-black/90">Informasi Penarikan</h3>
          <Item label="Total Penarikan Tabung (Bulan ini)" value={rekap.penarikan} />
          <Item label="Total Nominal Penarikan (Bulan ini)" value={rekap.nominal} nominal />

          {/* Reset password */}
          <button
            onClick={() => handleReset(id_user, username)}
            className="bg-[#F81A0C]/90 py-3 px-8 rounded-full w-fit self-end text-white hover:bg-[#F81A0C]"
          >
            Reset Password
          </button>
        </div>
      )}
    </section>
  );
};

export default CardDetailPetugas;
