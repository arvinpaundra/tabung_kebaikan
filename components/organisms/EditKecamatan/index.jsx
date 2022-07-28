import { Dialog } from '@headlessui/react';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getDetailKecamatan, setEditKecamatan } from '../../../services/kecamatan';
import { Modal } from '../../molecules/Modals';

const EditKecamatan = (props) => {
  const { idKec, onShow, show } = props;

  const [kecamatan, setKecamatan] = useState({
    id_kec: idKec,
    nama_kec: '',
    kode_kec: '',
  });

  const detailKecamatan = useCallback(async (id_kec) => {
    try {
      const response = await getDetailKecamatan(id_kec);

      if (response.error) {
        throw new Error(response.message);
      }

      setKecamatan(response.data.result);
    } catch (error) {}
  }, []);

  useEffect(() => {
    if (idKec) {
      detailKecamatan(idKec);
    }
  }, [detailKecamatan, idKec]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      nama_kec: kecamatan.nama_kec.trim(),
      id_kec: +kecamatan.id_kec,
    };

    if (!kecamatan.nama_kec.trim()) {
      toast.warn('Isi data dengan lengkap.');
      return;
    }

    const response = await setEditKecamatan(data, idKec);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Kecamatan berhasil diubah.');
      onShow(false);

      setKecamatan({ nama_kec: '', kode_kec: '', id_kec: 0 });
    }
  };

  return (
    <Modal show={show} onShow={onShow}>
      <Dialog.Title as="h3" className="text-center font-bold text-2xl mb-4">
        Tambah Kecamatan
      </Dialog.Title>

      <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60 disabled:bg-smoke-grey/50 disabled:cursor-not-allowed"
          placeholder="Kode kecamatan"
          value={kecamatan.kode_kec}
          readOnly
          disabled
        />
        <input
          type="text"
          className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
          placeholder="Nama Kecamatan"
          value={kecamatan.nama_kec}
          onChange={(event) => setKecamatan({ ...kecamatan, nama_kec: event.target.value })}
        />

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

export default EditKecamatan;
