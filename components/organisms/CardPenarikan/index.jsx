import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import { getDetailMunfiq } from '../../../services/munfiq';
import { getCheckStatusPenarikan } from '../../../services/penarikan';
import Modals from '../../molecules/Modals';
import Item from '../CardDetailMunfiq/Item';
import FormPenarikan from './FormPenarikan';

const CardPenarikan = (props) => {
  const { kode, user } = props;

  const [munfiq, setMunfiq] = useState({
    id_munfiq: 0,
    id_kec: 0,
    fullname: '',
    no_tlp: '',
    alamat: '',
    kelurahan: '',
    nama_kec: '',
    kode_tabung: kode,
    tgl_taruh: '',
  });
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);
  const [show, onShow] = useState(true);

  const checkStatus = useCallback(async (kode_tabung) => {
    try {
      setIsLoading(true);

      const response = await getCheckStatusPenarikan(kode_tabung);

      if (response.error) {
        throw new Error(response.message);
      }

      onShow(false);
    } catch (error) {
      setError(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    checkStatus(kode);
  }, [checkStatus, kode]);

  const getMunfiq = useCallback(async (kode_tabung) => {
    try {
      setIsLoading(true);

      const response = await getDetailMunfiq(kode_tabung);

      if (response.error) {
        throw new Error(response.message);
      }

      setMunfiq(response.data.result);
    } catch (error) {
      setError(error);
      return;
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    getMunfiq(kode);
  }, [getMunfiq, kode]);

  if (error?.message === 'conflict') {
    return (
      <Modals show={show}>
        <div className="flex items-start justify-between p-5 rounded-t">
          <h3 className="text-3xl text-black/90 font-semibold">Gagal!</h3>
        </div>
        {/*body*/}
        <div className="relative p-6 flex-auto">
          <p className="my-4 text-black/90 text-lg leading-relaxed">Tabung sudah ditarik.</p>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6 rounded-b">
          <Link href="/admin/penarikan" className="cursor-pointer">
            <button
              onClick={() => onShow(false)}
              className="bg-gsc/90 px-8 py-3 rounded-full hover:bg-gsc cursor-pointer"
            >
              <a className="text-white">Tutup</a>
            </button>
          </Link>
        </div>
      </Modals>
    );
  }

  if (error) {
    return (
      <Modals show={show}>
        <div className="flex items-start justify-between p-5 rounded-t">
          <h3 className="text-3xl text-black/90 font-semibold">Gagal!</h3>
        </div>
        {/*body*/}
        <div className="relative p-6 flex-auto">
          <p className="my-4 text-black/90 text-lg leading-relaxed">{error.message}</p>
        </div>
        {/*footer*/}
        <div className="flex items-center justify-end p-6 rounded-b">
          <Link href="/admin/penarikan" className="cursor-pointer">
            <button
              onClick={() => onShow(false)}
              className="bg-gsc/90 px-8 py-3 rounded-full hover:bg-gsc cursor-pointer"
            >
              <a className="text-white">Tutup</a>
            </button>
          </Link>
        </div>
      </Modals>
    );
  }

  return (
    <section className="p-8 bg-white rounded-xl drop-shadow-lg">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-xl text-black/90">Detail Munfiq</h3>
        {isLoading ? (
          <div className="w-full animate-pulse h-20 flex justify-center items-center text-black/90">
            <p>Loading . . .</p>
          </div>
        ) : (
          <>
            <Item label="Nama Lengkap" value={munfiq?.fullname} />
            <Item label="Whatsapp" value={munfiq?.no_tlp} />
            <Item label="Alamat" value={munfiq?.alamat} />
            <Item label="Kelurahan" value={munfiq?.kelurahan} />
            <Item label="Kecamatan" value={munfiq?.nama_kec} />
            <Item label="Kode Tabung" value={munfiq?.kode_tabung} />
            <Item label="Tangal Taruh" value={munfiq?.tgl_taruh} date />

            {/* Form penarikan */}
            <FormPenarikan
              id_kec={munfiq.id_kec}
              id_munfiq={munfiq.id_munfiq}
              user={user}
              kode={kode}
            />
          </>
        )}
      </div>
    </section>
  );
};

export const InputTarik = (props) => {
  return (
    <input
      type="number"
      className="bg-light-grey px-4 py-2 text-black/90/80 rounded-full w-80 border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/90/80"
      {...props}
    />
  );
};

export default CardPenarikan;
