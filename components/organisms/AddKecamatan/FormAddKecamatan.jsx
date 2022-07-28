import { useState } from 'react';
import { toast } from 'react-toastify';
import { setAddkecamatan } from '../../../services/kecamatan';

const FormAddKecamatan = (props) => {
  const { onShow } = props;

  const [nama, setNama] = useState('');
  const [kode, setKode] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      nama_kec: nama,
      kode_kec: kode,
    };

    if (!nama.trim() || !kode.trim()) {
      toast.warn('Isi data dengan lengkap.');
      return;
    }

    const response = await setAddkecamatan(data);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Kecamatan berhasil ditambahkan.');
      onShow(false);

      setNama('');
      setKode('');
    }
  };

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
        placeholder="Nama kecamatan"
        value={nama}
        onChange={(event) => setNama(event.target.value)}
      />
      <input
        type="text"
        className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
        placeholder="Kode kecamatan"
        value={kode}
        onChange={(event) => setKode(event.target.value)}
      />

      <button
        className="bg-gsc/90 mt-4 w-fit rounded-full px-10 py-3 text-white hover:bg-gsc"
        type="submit"
      >
        Simpan
      </button>
    </form>
  );
};

export default FormAddKecamatan;
