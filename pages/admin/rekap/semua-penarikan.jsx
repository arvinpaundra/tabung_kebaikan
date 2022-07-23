import Head from 'next/head';
import MainContainer from '../../../components/atoms/MainContainer';
import Container from '../../../components/atoms/Container';
import Sidebar from '../../../components/organisms/Sidebar';

const SemuaRekap = (props) => {
  return (
    <>
      <Head>
        <title>Rekap Semua Penarikan</title>
      </Head>

      <MainContainer>
        <Sidebar active="Rekap" />
        <Container>
          <p>Rekap semua penarikan</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default SemuaRekap;
