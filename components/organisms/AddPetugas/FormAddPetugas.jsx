import { useState } from 'react';
import { toast } from 'react-toastify';
import { setAddPetugas } from '../../../services/petugas';
import KecamatanSelectList from '../../molecules/KecamatanSelectList';

const FormAddPetugas = (props) => {
  const { onShow } = props;

  const [fullname, setFullname] = useState('');
  const [username, setUsername] = useState('');
  const [idKec, setIdKec] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      fullname: fullname,
      username: username,
      id_kec: idKec.id_kec,
    };

    if (!fullname.trim() || !username.trim() || !+idKec.id_kec) {
      toast.warn('Isi data dengan lengkap.');
      return;
    }

    const response = await setAddPetugas(data);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Petugas berhasil ditambahkan.');
      onShow(false);

      setFullname('');
      setUsername('');
      setIdKec('');
    }
  };

  return (
    <form className="flex flex-col gap-4 items-center" onSubmit={handleSubmit}>
      <input
        type="text"
        className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
        placeholder="Nama lengkap petugas"
        value={fullname}
        onChange={(event) => setFullname(event.target.value)}
      />
      <input
        type="text"
        className="bg-light-grey w-full px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
        placeholder="Username petugas"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />

      <KecamatanSelectList idKec={idKec} setIdKec={setIdKec} />

      <button
        className="bg-gsc/90 mt-4 rounded-full px-10 py-3 text-white hover:bg-gsc"
        type="submit"
      >
        Simpan
      </button>
    </form>
  );
};

export default FormAddPetugas;
