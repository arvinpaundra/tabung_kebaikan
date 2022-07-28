import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import { useState } from 'react';
import Container from '../../../components/atoms/Container';
import MainContainer from '../../../components/atoms/MainContainer';
import CardDetailMunfiq from '../../../components/organisms/CardDetailMunfiq';
import EditMunfiq from '../../../components/organisms/EditMunfiq';
import Sidebar from '../../../components/organisms/Sidebar';

const DetailMunfiq = ({ user }) => {
  const [show, onShow] = useState(false);
  const [fetchMunfiq, setFetchMunfiq] = useState(true);

  return (
    <>
      <Head>
        <title>Detail Munfiq</title>
      </Head>

      <MainContainer>
        <Sidebar active="Munfiq" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Detail Munfiq</h1>

          {/* Card detail */}
          <CardDetailMunfiq
            onShow={onShow}
            setFetchMunfiq={setFetchMunfiq}
            fetchMunfiq={fetchMunfiq}
          />
        </Container>
      </MainContainer>

      <EditMunfiq onShow={onShow} show={show} setFetchMunfiq={setFetchMunfiq} />
    </>
  );
};

export default DetailMunfiq;

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
