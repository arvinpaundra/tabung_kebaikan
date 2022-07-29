import Head from 'next/head';
import Cookies from 'js-cookie';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import jwtDecode from 'jwt-decode';

export default function Home() {
  useEffect(() => {
    Cookies.get('token');
  }, []);

  const router = useRouter();

  const handleLogout = () => {
    Cookies.remove('token');
    toast.success('Berhasil logout!');
    router.push('/login');
  };

  return (
    <div>
      <Head>
        <title>Petugas</title>
      </Head>

      <main className="w-full h-screen bg-teal-50 flex flex-col gap-4 justify-center items-center">
        <h1>Hello King!</h1>
        <button
          className="w-fit px-6 py-3 bg-happy/70 rounded-full hover:bg-happy text-dark-blue"
          onClick={handleLogout}
        >
          Logout
        </button>
      </main>

      <footer></footer>
    </div>
  );
}

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload = jwtDecode(jwtToken);
  const { user } = payload;

  return {
    props: {
      user,
    },
  };
}
