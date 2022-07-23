import Head from 'next/head';
import Container from '../../components/atoms/Container';
import MainContainer from '../../components/atoms/MainContainer';
import Sidebar from '../../components/organisms/Sidebar';

const Settings = (props) => {
  return (
    <>
      <Head>
        <title>Setting</title>
      </Head>

      <MainContainer>
        <Sidebar active="Settings" />
        <Container>
          <p>Settings</p>
        </Container>
      </MainContainer>
    </>
  );
};

export default Settings;
