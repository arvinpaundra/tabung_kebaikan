/* eslint-disable @next/next/no-img-element */
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { toast } from 'react-toastify';
import { getDetailUser, setEditProfile } from '../../../services/petugas';

const IMG_URL = process.env.NEXT_PUBLIC_IMG;

const FormEditProfile = (props) => {
  const { user } = props;

  const [dataUser, setDataUser] = useState({
    id_user: user.id_user,
    username: '',
    fullname: '',
    profile_picture: '/default.png',
  });
  const [imagePreview, setImagePreview] = useState(null);

  const router = useRouter();

  const detailUser = useCallback(async (id_user) => {
    try {
      const response = await getDetailUser(id_user);

      if (response.error) {
        throw new Error(response.message);
      }

      setDataUser(response.data.result);
    } catch (error) {}
  }, []);

  const { id_user } = user;

  useEffect(() => {
    detailUser(id_user);
  }, [detailUser, id_user]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = new FormData();

    data.append('fullname', dataUser.fullname);
    data.append('username', dataUser.username);
    data.append('profile_picture', dataUser.profile_picture);

    if (!dataUser.fullname.trim() || !dataUser.username) {
      toast.warn('Isi data dengan lengkap.');
      return;
    }

    const response = await setEditProfile(data, user.id_user);

    if (response.error) {
      toast.error(response.message);
    } else {
      toast.success('Data berhasil diiubah.');

      router.push('/admin');
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 bg-white rounded-xl drop-shadow-xl p-6 w-3/5"
    >
      <label
        htmlFor="file"
        className="relative overflow-hidden rounded-full h-24 w-24 cursor-pointer"
      >
        {imagePreview ? (
          <img
            src={imagePreview}
            width={96}
            height={96}
            alt="Profile picture"
            className="rounded-full"
          />
        ) : (
          <img
            src={`${IMG_URL}/profiles/${dataUser.profile_picture}`}
            width={96}
            height={96}
            alt="Profile picture"
            className="rounded-full"
          />
        )}
        <div className="absolute top-0 w-full h-full left-0 rounded-full z-10 opacity-0 flex items-center justify-center hover:opacity-100 hover:bg-gsc/80 transition ease-in-out duration-200">
          <AiOutlineCloudUpload size={24} color="white" />
        </div>
      </label>
      <input
        type="file"
        className="hidden"
        id="file"
        onChange={(event) => {
          const img = event.target.files[0];
          setImagePreview(URL.createObjectURL(img));
          return setDataUser({
            ...dataUser,
            profile_picture: img,
          });
        }}
      />
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="nama" className="text-black/90">
          Nama Lengkap
        </label>
        <input
          type="text"
          id="nama"
          className="py-3 px-6 rounded-full w-full bg-light-grey border border-light-grey hover:border hover:border-gsc focus:outline-none focus:border focus:border-gsc text-black/90"
          placeholder="Nama Lengkap"
          value={dataUser.fullname}
          onChange={(event) => setDataUser({ ...dataUser, fullname: event.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="username" className="text-black/90">
          Username
        </label>
        <input
          type="text"
          id="username"
          className="py-3 px-6 rounded-full w-full bg-light-grey border border-light-grey hover:border hover:border-gsc focus:outline-none focus:border focus:border-gsc text-black/90"
          placeholder="Username"
          value={dataUser.username}
          onChange={(event) => setDataUser({ ...dataUser, username: event.target.value })}
        />
      </div>
      <div className="flex flex-col gap-1 w-full">
        <label htmlFor="whatsapp" className="text-black/90">
          Whatsapp
        </label>
        <input
          type="text"
          id="whatsapp"
          className="py-3 px-6 rounded-full w-full bg-light-grey border border-light-grey hover:border hover:border-gsc focus:outline-none focus:border focus:border-gsc text-black/90"
          placeholder="No whatsapp"
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

export default FormEditProfile;
