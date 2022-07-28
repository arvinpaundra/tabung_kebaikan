import { Dialog } from '@headlessui/react';
import { useCallback, useEffect, useState } from 'react';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';
import { getDetailPenarikan, setEditPenarikan } from '../../../services/penarikan';
import { Modal } from '../../molecules/Modals';

const EditPenarikan = (props) => {
  const { onShow, show, idPenarikan } = props;

  const [penarikan, setPenarikan] = useState({
    id_penarikan: idPenarikan,
    nominal: 0,
    kode_tabung: '',
    tgl_tarik: '',
  });

  const detailPenarikan = useCallback(async (id_penarikan) => {
    try {
      const response = await getDetailPenarikan(id_penarikan);

      if (response.error) {
        throw new Error(response.message);
      }

      setPenarikan(response.data.result);
    } catch (error) {}
  }, []);

  useEffect(() => {
    detailPenarikan(idPenarikan);
  }, [detailPenarikan, idPenarikan]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      nominal: parseInt(penarikan.nominal),
      tgl_tarik: penarikan.tgl_tarik,
    };

    if (!parseInt(penarikan.nominal)) {
      toast.warn('Masukkan nominal terbaru.');
    }

    const response = await setEditPenarikan(data, idPenarikan, penarikan.kode_tabung);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Penarikan berhasil diubah.');
      onShow(false);
    }
  };

  return (
    <Modal onShow={onShow} show={show}>
      <Dialog.Title as="h3" className="text-center font-bold text-2xl mb-4">
        Edit Penarikan
      </Dialog.Title>

      <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
        <input
          type="text"
          className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60 disabled:bg-smoke-grey/50 disabled:cursor-not-allowed"
          placeholder="Nama lengkap"
          value={penarikan.kode_tabung}
          readOnly
          disabled
        />
        <NumberFormat
          customInput={InputTarik}
          value={penarikan.nominal}
          placeholder="Nominal penarikan terbaru"
          thousandSeparator="."
          decimalSeparator=","
          onValueChange={(values, sourceInfo) =>
            setPenarikan({ ...penarikan, nominal: values.value })
          }
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

export default EditPenarikan;

const InputTarik = (props) => {
  return (
    <input
      type="number"
      className="bg-light-grey px-4 py-2 text-black/90/80 rounded-full w-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/90/80"
      {...props}
    />
  );
};
