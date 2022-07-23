import Head from 'next/head';
import MainContainer from '../../../components/atoms/MainContainer';
import Container from '../../../components/atoms/Container';
import Sidebar from '../../../components/organisms/Sidebar';

const PenarikanKecamatan = (props) => {
  return (
    <>
      <Head>
        <title>Rekap Kecamatan</title>
      </Head>

      <MainContainer>
        <Sidebar active="Rekap" />
        <Container>
          <p>Rekap penarikan dari kecamatan</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default PenarikanKecamatan;
