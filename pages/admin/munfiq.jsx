import Head from 'next/head';
import Container from '../../components/atoms/Container';
import MainContainer from '../../components/atoms/MainContainer';
import Sidebar from '../../components/organisms/Sidebar';

const Munfiq = (props) => {
  return (
    <>
      <Head>
        <title>Munfiq</title>
      </Head>

      <MainContainer>
        <Sidebar active="Munfiq" />
        <Container>
          <p>Munfiq</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default Munfiq;
