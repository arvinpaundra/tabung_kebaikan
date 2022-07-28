import { Dialog } from '@headlessui/react';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getDetailMunfiq, setEditMunfiq } from '../../../services/munfiq';
import KecamatanSelectList from '../../molecules/KecamatanSelectList';
import { Modal } from '../../molecules/Modals';

const EditMunfiq = (props) => {
  const { onShow, show, setFetchMunfiq } = props;

  const router = useRouter();

  const { kode } = router.query;

  const [munfiq, setMunfiq] = useState({
    id_munfiq: 0,
    fullname: '',
    no_tlp: '',
    alamat: '',
    kode_tabung: kode,
    kelurahan: '',
    id_kec: 0,
  });
  const [kecSelected, setKecSelected] = useState({});

  const detailMunfiq = useCallback(async (kode_tabung) => {
    try {
      const response = await getDetailMunfiq(kode_tabung);

      if (response.error) {
        throw new Error(response.message);
      }

      setMunfiq(response.data.result);
      setKecSelected(response.data.result.id_kec);
    } catch (error) {}
  }, []);

  const { id_kec } = munfiq;

  useEffect(() => {
    if (kode) {
      detailMunfiq(kode);
      setKecSelected(id_kec);
    }
  }, [detailMunfiq, kode, id_kec]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setFetchMunfiq(true);

    const data = {
      fullname: munfiq.fullname.trim(),
      no_tlp: munfiq.no_tlp.trim(),
      alamat: munfiq.alamat.trim(),
      kelurahan: munfiq.kelurahan.trim(),
      id_kec: parseInt(kecSelected.id_kec),
      id_munfiq: parseInt(munfiq.id_munfiq),
    };

    if (!munfiq.fullname.trim() || !parseInt(munfiq.id_kec)) {
      toast.warn('Isi data dengan lengkap.');
      return;
    }

    const response = await setEditMunfiq(data, parseInt(munfiq.id_munfiq));

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Munfiq berhasil diubah.');
      onShow(false);
    }
  };

  return (
    <Modal onShow={onShow} show={show}>
      <Dialog.Title as="h3" className="text-center font-bold text-2xl mb-4">
        Edit Munfiq
      </Dialog.Title>

      <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60 disabled:bg-smoke-grey/50 disabled:cursor-not-allowed"
          placeholder="Nama lengkap"
          value={munfiq.kode_tabung}
          readOnly
          disabled
        />
        <input
          type="text"
          className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
          placeholder="Nama lengkap"
          value={munfiq.fullname}
          onChange={(event) => setMunfiq({ ...munfiq, fullname: event.target.value })}
        />
        <input
          type="text"
          className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
          placeholder="No whatsapp"
          value={munfiq.no_tlp}
          onChange={(event) => setMunfiq({ ...munfiq, no_tlp: event.target.value })}
        />
        <input
          type="text"
          className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
          placeholder="Alamat"
          value={munfiq.alamat}
          onChange={(event) => setMunfiq({ ...munfiq, alamat: event.target.value })}
        />
        <input
          type="text"
          className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
          placeholder="Kelurahan"
          value={munfiq.kelurahan}
          onChange={(event) => setMunfiq({ ...munfiq, kelurahan: event.target.value })}
        />

        <KecamatanSelectList idKec={kecSelected} setIdKec={setKecSelected} />

        <button
          className="bg-gsc/90 mt-4 w-fit rounded-full px-10 py-3 text-white hover:bg-gsc"
          type="submit"
        >
          Simpan
        </button>
      </form>
    </Modal>
  );
};

export default EditMunfiq;
