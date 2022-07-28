import Cookies from 'js-cookie';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { getDetailUser, setEditPassword } from '../../../services/petugas';

const FormEditPassword = (props) => {
  const { user } = props;

  const [password1, setPassword1] = useState('');
  const [password2, setPassword2] = useState('');
  const [petugas, setPetugas] = useState({
    id_user: user.id_user,
    username: '',
  });

  const router = useRouter();

  const detailPetugas = useCallback(async (id_user) => {
    try {
      const response = await getDetailUser(id_user);

      if (response.error) {
        throw new Error(response.message);
      }

      setPetugas(response.data.result);
    } catch (error) {}
  }, []);

  const { id_user } = user;

  useEffect(() => {
    detailPetugas(id_user);
  }, [detailPetugas, id_user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      password1: password1,
      password2: password2,
    };

    if (!password1.trim() || !password2.trim()) {
      toast.warn('Isi data dengan lengkap.');
      return;
    }

    const response = await setEditPassword(data, id_user, petugas.username);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Password berhasil diubah!');

      Cookies.remove('token');
      router.push('/login');
    }
  };

  return (
    <form
      className="flex flex-col gap-4 bg-white rounded-xl drop-shadow-xl p-6 w-3/5"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="nama" className="text-black/90">
          Masukkan password
        </label>
        <input
          type="password"
          id="nama"
          className="py-3 px-6 rounded-full w-full bg-light-grey border border-light-grey hover:border hover:border-gsc focus:outline-none focus:border focus:border-gsc text-black/90"
          placeholder="Password baru"
          value={password1}
          onChange={(event) => setPassword1(event.target.value)}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="nama" className="text-black/90">
          Ulangi password
        </label>
        <input
          type="password"
          id="nama"
          className="py-3 px-6 rounded-full w-full bg-light-grey border border-light-grey hover:border hover:border-gsc focus:outline-none focus:border focus:border-gsc text-black/90"
          placeholder="Ketik ulang password"
          value={password2}
          onChange={(event) => setPassword2(event.target.value)}
        />
      </div>

      <button
        className="w-full mt-4 py-3 bg-gsc/90 hover:bg-gsc text-white rounded-full"
        type="submit"
      >
        Simpan Perubahan
      </button>
    </form>
  );
};

export default FormEditPassword;
