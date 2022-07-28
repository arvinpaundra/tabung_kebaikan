import { useState } from 'react';
import { toast } from 'react-toastify';
import { setAddMunfiq } from '../../../services/munfiq';
import KecamatanSelectList from '../../molecules/KecamatanSelectList';

const FormAddMunfiq = (props) => {
  const { onShow } = props;

  const [fullname, setFullname] = useState('');
  const [notlp, setNotlp] = useState('');
  const [alamat, setAlamat] = useState('');
  const [kelurahan, setKelurahan] = useState('');
  const [idKec, setIdKec] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      fullname: fullname.trim(),
      no_tlp: notlp.trim(),
      alamat: alamat.trim(),
      kelurahan: kelurahan.trim(),
      id_kec: +idKec.id_kec,
    };

    if (!fullname.trim() || !alamat.trim() || !+idKec.id_kec) {
      toast.warn('Isi data dengan lengkap.');
      return;
    }

    const response = await setAddMunfiq(data);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Munfiq berhasil ditambahkan.');
      onShow(false);

      setFullname('');
      setNotlp('');
      setAlamat('');
      setKelurahan('');
      setIdKec('');
    }
  };

  return (
    <form className="flex flex-col items-center gap-4" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
        placeholder="Nama lengkap munfiq"
        value={fullname}
        onChange={(event) => setFullname(event.target.value)}
      />
      <input
        type="text"
        className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
        placeholder="No telepon (opsional)"
        value={notlp}
        onChange={(event) => setNotlp(event.target.value)}
      />
      <input
        type="text"
        className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
        placeholder="Alamat"
        value={alamat}
        onChange={(event) => setAlamat(event.target.value)}
      />
      <input
        type="text"
        className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
        placeholder="Kelurahan (opsional)"
        value={kelurahan}
        onChange={(event) => setKelurahan(event.target.value)}
      />

      <KecamatanSelectList idKec={idKec} setIdKec={setIdKec} />

      <button
        type="submit"
        className="bg-gsc/90 mt-4 rounded-full px-10 py-3 text-white hover:bg-gsc"
      >
        Simpan
      </button>
    </form>
  );
};

export default FormAddMunfiq;
