import Head from 'next/head';
import MainContainer from '../../../components/atoms/MainContainer';
import Container from '../../../components/atoms/Container';
import Sidebar from '../../../components/organisms/Sidebar';
import TableSemuaRekap from '../../../components/organisms/TableSemuaRekap';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';

const SemuaRekap = ({ user }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);

  const searchData = (event) => {
    event.preventDefault();

    setPage(0);
    setSearch(query);
  };

  return (
    <>
      <Head>
        <title>Rekap Semua Penarikan</title>
      </Head>

      <MainContainer>
        <Sidebar active="Semua Rekap" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Rekap Semua Penarikan</h1>

          {/* Search filter */}
          <section className="flex justify-between items-center">
            <form onSubmit={searchData}>
              <input
                type="text"
                className="bg-light-grey px-4 py-2 text-black/90/80 rounded-full w-80 border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/90/80"
                placeholder="Cari . . ."
                value={query}
                onChange={(event) => setQuery(event.target.value)}
              />
            </form>

            <input
              type="date"
              className="bg-white rounded-full px-4 py-2 text-black/90/80 w-44 border-white border hover:border-gsc focus:outline-none focus:border focus:border-gsc"
              onChange={(event) => {
                const date = new Date(event.target.value);
                setMonth(date.toLocaleDateString('en-US', { month: 'long' }));
                setYear(date.getFullYear());
              }}
            />
          </section>

          {/* Table Data Semua Rekap */}
          <section className="p-4 w-full bg-white rounded-xl drop-shadow-lg">
            {/* Table Semua Rekap */}
            <TableSemuaRekap
              page={page}
              search={search}
              limit={limit}
              setPage={setPage}
              month={month}
              year={year}
              setMonth={setMonth}
              setYear={setYear}
            />
          </section>
        </Container>
      </MainContainer>
    </>
  );
};

export default SemuaRekap;

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
