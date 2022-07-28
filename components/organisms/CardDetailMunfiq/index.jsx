import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { getDetailMunfiq } from '../../../services/munfiq';
import Item from './Item';
import QRCodeMunfiq from './QRCodeMunfiq';

const CardDetailMunfiq = (props) => {
  const { onShow, setFetchMunfiq, fetchMunfiq } = props;

  const router = useRouter();

  const { kode } = router.query;

  const [munfiq, setMunfiq] = useState({
    id_munfiq: 0,
    fullname: '',
    no_tlp: '',
    alamat: '',
    kelurahan: '',
    nama_kec: '',
    kode_tabung: kode,
    tgl_taruh: '',
  });
  const [isLoading, setIsLoading] = useState(null);

  const detailMunfiq = useCallback(async (kode_tabung) => {
    try {
      setIsLoading(true);

      const response = await getDetailMunfiq(kode_tabung);

      setMunfiq(response.data.result);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (fetchMunfiq) {
      detailMunfiq(kode);
    }

    setFetchMunfiq(false);
  }, [detailMunfiq, kode, fetchMunfiq, setFetchMunfiq]);

  const handleClick = () => {
    onShow(true);
  };

  return (
    <section className="p-8 bg-white rounded-xl drop-shadow-lg">
      <div className="flex flex-col gap-4">
        <h3 className="font-bold text-xl text-black/90">Informasi data munfiq</h3>
        <QRCodeMunfiq kode={kode} />
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

            {/* Edit Munfiq */}
            <button
              onClick={handleClick}
              className="bg-gsc/90 py-3 px-8 rounded-full w-fit self-end text-white hover:bg-gsc"
            >
              Edit
            </button>
          </>
        )}
      </div>
    </section>
  );
};

export default CardDetailMunfiq;
