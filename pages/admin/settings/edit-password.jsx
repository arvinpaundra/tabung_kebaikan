import Head from 'next/head';
import Container from '../../../components/atoms/Container';
import MainContainer from '../../../components/atoms/MainContainer';
import Sidebar from '../../../components/organisms/Sidebar';
import jwtDecode from 'jwt-decode';
import FormEditPassword from '../../../components/organisms/FormEditPassword';

const EditPassword = ({ user }) => {
  return (
    <>
      <Head>
        <title>Ganti password</title>
      </Head>

      <MainContainer>
        <Sidebar active="Settings" user={user} />

        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Ganti password</h1>

          <FormEditPassword user={user} />
        </Container>
      </MainContainer>
    </>
  );
};

export default EditPassword;

export async function getServerSideProps({ req }) {
  const { token } = req.cookies;

  if (!token) {
    return {
      redirect: {
        destination: '/login',
        permanent: false,
      },
    };
  }

  const jwtToken = Buffer.from(token, 'base64').toString('ascii');
  const payload = jwtDecode(jwtToken);
  const { user } = payload;

  if (user.role !== '0') {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    };
  }

  return {
    props: {
      user,
    },
  };
}
