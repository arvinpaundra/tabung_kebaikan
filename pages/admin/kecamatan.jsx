import Head from 'next/head';
import Container from '../../components/atoms/Container';
import MainContainer from '../../components/atoms/MainContainer';
import Sidebar from '../../components/organisms/Sidebar';

const Kecamatan = (props) => {
  return (
    <>
      <Head>
        <title>Cilacap Tengah</title>
      </Head>

      <MainContainer>
        <Sidebar active="Kecamatan" />
        <Container>
          <p>Kecamatan</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default Kecamatan;
