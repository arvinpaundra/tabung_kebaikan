import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { setLogin } from '../../../services/auth';
import Cookies from 'js-cookie';

const FormLogin = (props) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const router = useRouter();

  const handleLogin = async (event) => {
    event.preventDefault();

    const data = {
      username,
      password,
    };

    if (!username.trim() || !password.trim()) {
      toast.warn('Isi data dengan lengkap.');
    } else {
      const response = await setLogin(data);

      if (response.error) {
        toast.error('Username atau password salah!');
      } else {
        toast.success('Login berhasil!');
        const token = response.data.token;
        const tokenBase64 = Buffer.from(token).toString('base64');
        Cookies.set('token', tokenBase64);

        const { user } = jwtDecode(token);

        if (user.role === '0') {
          router.push('/admin');
        } else {
          router.push('/');
        }
      }
    }
  };

  return (
    <form className="flex flex-col gap-4" onSubmit={handleLogin}>
      <input
        type="text"
        placeholder="Username"
        className="w-full px-4 py-3 bg-light-grey border border-light-grey hover:border hover:border-gsc focus:outline-none focus:border focus:border-gsc text-black/90 rounded-full"
        value={username}
        onChange={(event) => setUsername(event.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        className="w-full px-4 py-3 bg-light-grey border border-light-grey hover:border hover:border-gsc focus:outline-none focus:border focus:border-gsc text-black/90 rounded-full"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <button
        type="submit"
        className="bg-gsc/90 hover:bg-gsc py-3 rounded-full mt-6 text-white font-semibold"
      >
        M A S U K
      </button>
    </form>
  );
};

export default FormLogin;
