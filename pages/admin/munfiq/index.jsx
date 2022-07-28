import jwtDecode from 'jwt-decode';
import Head from 'next/head';
import { useState } from 'react';
import Container from '../../../components/atoms/Container';
import MainContainer from '../../../components/atoms/MainContainer';
import AddMunfiq from '../../../components/organisms/AddMunfiq';
import Sidebar from '../../../components/organisms/Sidebar';
import TableMunfiq from '../../../components/organisms/TableMunfiq';

const Munfiq = ({ user }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');

  const searchData = (event) => {
    event.preventDefault();

    setPage(0);
    setSearch(query);
  };

  return (
    <>
      <Head>
        <title>Data Munfiq</title>
      </Head>

      <MainContainer>
        <Sidebar active="Munfiq" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Semua Munfiq</h1>

          {/* Search input */}
          <section>
            <form onSubmit={searchData}>
              <input
                type="text"
                className="bg-light-grey px-4 py-2 text-black/90/80 rounded-full w-80 border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/90/80"
                placeholder="Cari . . ."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </form>
          </section>

          {/* Table data munfiq */}
          <section className="p-4 w-full bg-white rounded-xl drop-shadow-lg">
            <AddMunfiq />

            {/* Table Petugas */}
            <TableMunfiq limit={limit} page={page} setPage={setPage} search={search} />
          </section>
        </Container>
      </MainContainer>
    </>
  );
};

export default Munfiq;

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
