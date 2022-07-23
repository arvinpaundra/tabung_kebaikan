import Head from 'next/head';
import { useRouter } from 'next/router';
import MainContainer from '../../../components/atoms/MainContainer';
import Container from '../../../components/atoms/Container';
import Sidebar from '../../../components/organisms/Sidebar';

const KodePenarikan = (props) => {
  const router = useRouter();

  const { kode } = router.query;

  return (
    <>
      <Head>
        <title>Kode Penarikan</title>
      </Head>

      <MainContainer>
        <Sidebar active="Penarikan" />
        <Container>
          <p>Penarikan/{kode}</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default KodePenarikan;
