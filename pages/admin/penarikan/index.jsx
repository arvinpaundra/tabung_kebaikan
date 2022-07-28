import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import { useState } from 'react';
import Container from '../../../components/atoms/Container';
import MainContainer from '../../../components/atoms/MainContainer';
import CheckPenarikan from '../../../components/organisms/CheckPenarikan';
import EditPenarikan from '../../../components/organisms/EditPenarikan';
import Sidebar from '../../../components/organisms/Sidebar';
import TablePenarikan from '../../../components/organisms/TablePenarikan';

const Penarikan = ({ user }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [show, onShow] = useState(false);
  const [idPenarikan, setIdPenarikan] = useState(0);

  const searchData = (event) => {
    event.preventDefault();

    setPage(0);
    setSearch(query);
  };

  return (
    <>
      <Head>
        <title>Data Penarikan</title>
      </Head>

      <MainContainer>
        <Sidebar active="Penarikan" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Semua Penarikan</h1>

          {/* Search input */}
          <section>
            <form onSubmit={searchData}>
              <input
                type="text"
                className="bg-light-grey px-4 py-2 text-black/90 rounded-full w-80 border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/90"
                placeholder="Cari . . ."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </form>
          </section>

          {/* Table data munfiq */}
          <section className="p-4 w-full bg-white rounded-xl drop-shadow-lg">
            <CheckPenarikan />

            {/* Table Petugas */}
            <TablePenarikan
              onShow={onShow}
              setIdPenarikan={setIdPenarikan}
              search={search}
              page={page}
              limit={limit}
              setPage={setPage}
            />
          </section>
        </Container>
      </MainContainer>

      <EditPenarikan onShow={onShow} show={show} idPenarikan={idPenarikan} />
    </>
  );
};

export default Penarikan;

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
