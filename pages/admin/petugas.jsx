import Head from 'next/head';
import Container from '../../components/atoms/Container';
import MainContainer from '../../components/atoms/MainContainer';
import Sidebar from '../../components/organisms/Sidebar';

const Petugas = (props) => {
  return (
    <>
      <Head>
        <title>Petugas</title>
      </Head>

      <MainContainer>
        <Sidebar active="Petugas" />
        <Container>
          <p>Petugas</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default Petugas;
