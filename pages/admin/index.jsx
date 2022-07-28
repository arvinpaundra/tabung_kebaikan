import Head from 'next/head';
import Container from '../../components/atoms/Container';
import MainContainer from '../../components/atoms/MainContainer';
import Sidebar from '../../components/organisms/Sidebar';
import TablePenarikanTerbaru from '../../components/organisms/TablePenarikanTerbaru';
import CardOverview from '../../components/organisms/CardOverview';
import jwtDecode from 'jwt-decode';

const Overview = ({ user }) => {
  return (
    <>
      <Head>
        <title>Overview</title>
      </Head>

      <MainContainer>
        <Sidebar active="Overview" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Overview</h1>

          {/* Section detail ringkasan */}
          <section>
            <h3 className="text-black/90 text-semibold text-xl mb-4">Detail ringkasan</h3>

            {/* Card */}
            <CardOverview />
          </section>

          {/* Penarikan terbaru */}
          <section>
            <h3 className="text-black/90 text-semibold text-xl mb-4">Penarikan terbaru</h3>
            {/* Table */}
            <div className="rounded-md bg-white p-4 drop-shadow-lg text-black/90">
              <TablePenarikanTerbaru />
            </div>
          </section>
        </Container>
      </MainContainer>
    </>
  );
};

export default Overview;

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
