import Head from 'next/head';
import MainContainer from '../../../components/atoms/MainContainer';
import Container from '../../../components/atoms/Container';
import Sidebar from '../../../components/organisms/Sidebar';

const PenarikanStatus = (props) => {
  return (
    <>
      <Head>
        <title>Rekap Status</title>
      </Head>

      <MainContainer>
        <Sidebar active="Rekap" />
        <Container>
          <p>Rekap penarikan dari status</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default PenarikanStatus;
