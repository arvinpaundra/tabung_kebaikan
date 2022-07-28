import Head from 'next/head';
import { useRouter } from 'next/router';
import MainContainer from '../../../components/atoms/MainContainer';
import Container from '../../../components/atoms/Container';
import Sidebar from '../../../components/organisms/Sidebar';
import jwtDecode from 'jwt-decode';
import CardPenarikan from '../../../components/organisms/CardPenarikan';

const KodePenarikan = ({ user }) => {
  const router = useRouter();

  const { kode } = router.query;

  const title = `Kode Penarikan ${kode}`;

  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>

      <MainContainer>
        <Sidebar active="Penarikan" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Penarikan Tabung Kode: {kode}</h1>

          {/* Card detail */}
          <CardPenarikan kode={kode} user={user} />
        </Container>
      </MainContainer>
    </>
  );
};

export default KodePenarikan;

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
