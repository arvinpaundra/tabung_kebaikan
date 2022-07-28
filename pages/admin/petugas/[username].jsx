import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import Container from '../../../components/atoms/Container';
import MainContainer from '../../../components/atoms/MainContainer';
import CardDetailPetugas from '../../../components/organisms/DetailPetugas';
import Sidebar from '../../../components/organisms/Sidebar';

const DetailPetugas = ({ user }) => {
  return (
    <>
      <Head>
        <title>Detail petugas</title>
      </Head>

      <MainContainer>
        <Sidebar active="Petugas" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Detail Petugas</h1>

          {/* Card detail */}
          <CardDetailPetugas />
        </Container>
      </MainContainer>
    </>
  );
};

export default DetailPetugas;

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
