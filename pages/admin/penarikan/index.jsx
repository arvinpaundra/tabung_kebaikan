import Head from 'next/head';
import Container from '../../../components/atoms/Container';
import MainContainer from '../../../components/atoms/MainContainer';
import Sidebar from '../../../components/organisms/Sidebar';

const Penarikan = (props) => {
  return (
    <>
      <Head>
        <title>Penarikan</title>
      </Head>

      <MainContainer>
        <Sidebar active="Penarikan" />
        <Container>
          <p>Penarikan</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default Penarikan;
