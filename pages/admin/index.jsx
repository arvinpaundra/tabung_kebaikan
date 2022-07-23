import Head from 'next/head';
import Container from '../../components/atoms/Container';
import MainContainer from '../../components/atoms/MainContainer';
import Sidebar from '../../components/organisms/Sidebar';

const Overview = (props) => {
  return (
    <>
      <Head>
        <title>Overview</title>
      </Head>

      <MainContainer>
        <Sidebar active="Overview" />
        <Container>
          <section>Overview</section>
        </Container>
      </MainContainer>
    </>
  );
};

export default Overview;
