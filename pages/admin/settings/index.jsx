import Head from 'next/head';
import Container from '../../../components/atoms/Container';
import MainContainer from '../../../components/atoms/MainContainer';
import Sidebar from '../../../components/organisms/Sidebar';
import jwtDecode from 'jwt-decode';
import { FaUserCog, FaKey } from 'react-icons/fa';
import Link from 'next/link';

const Settings = ({ user }) => {
  return (
    <>
      <Head>
        <title>Pengaturan Akun</title>
      </Head>

      <MainContainer>
        <Sidebar active="Settings" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Pengaturan akun</h1>

          {/* Form edit account section */}
          <section className="grid grid-cols-2 gap-6 w-4/5">
            <div className="rounded-lg drop-shadow-lg border-l-4 bg-white border-l-gsc p-4">
              <div className="flex gap-4">
                <div className="p-6 rounded-full bg-gsc/10">
                  <FaUserCog size={32} className="text-gsc" />
                </div>
                <div className="">
                  <h2 className="text-2xl text-gsc font-bold tracking-wide">Ubah profil</h2>
                  <p className="text-black/90">Personalisasi ulang profil anda</p>
                </div>
              </div>
              <div className="flex justify-end w-full">
                <Link href={'/admin/settings/edit-profile'}>
                  <div className="w-fit mt-4 px-6 py-2 bg-gsc/90 hover:bg-gsc rounded-md text-white cursor-pointer">
                    <a className="self-end">Ubah</a>
                  </div>
                </Link>
              </div>
            </div>
            <div className="rounded-lg drop-shadow-lg border-l-4 bg-white border-l-gsc p-4">
              <div className="flex gap-4">
                <div className="p-6 rounded-full bg-gsc/10">
                  <FaKey size={32} className="text-gsc" />
                </div>
                <div className="">
                  <h2 className="text-2xl text-gsc font-bold tracking-wide">Ganti password</h2>
                  <p className="text-black/90">Atur ulang password saat ini</p>
                </div>
              </div>
              <div className="flex justify-end w-full">
                <Link href={'/admin/settings/edit-password'}>
                  <div className="w-fit mt-4 px-6 py-2 bg-gsc/90 hover:bg-gsc rounded-md text-white cursor-pointer">
                    <a className="self-end">Ubah</a>
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </Container>
      </MainContainer>
    </>
  );
};

export default Settings;

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

  if (user.role !== '0') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}
