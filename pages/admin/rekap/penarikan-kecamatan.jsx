import Head from 'next/head';
import MainContainer from '../../../components/atoms/MainContainer';
import Container from '../../../components/atoms/Container';
import Sidebar from '../../../components/organisms/Sidebar';
import TableRekapKecamatan from '../../../components/organisms/TableRekapKecamatan';
import jwtDecode from 'jwt-decode';
import { useState } from 'react';
import KecamatanSelectList from '../../../components/molecules/KecamatanSelectList';

const PenarikanKecamatan = ({ user }) => {
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState(0);
  const [idKec, setIdKec] = useState(0);

  const searchData = (event) => {
    event.preventDefault();

    setPage(0);
    setSearch(query);
  };

  return (
    <>
      <Head>
        <title>Rekap Kecamatan</title>
      </Head>

      <MainContainer>
        <Sidebar active="Rekap Kecamatan" user={user} />
        <Container>
          <h1 className="text-black/90 font-bold text-3xl">Rekap Penarikan dari Kecamatan</h1>

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

            <div className="flex items-center gap-4">
              <input
                type="date"
                className="bg-white w-full rounded-full px-4 py-2 text-black/90/80  border-white border hover:border-gsc focus:outline-none focus:border focus:border-gsc"
                onChange={(event) => {
                  const date = new Date(event.target.value);
                  setMonth(date.toLocaleDateString('en-US', { month: 'long' }));
                  setYear(date.getFullYear());
                }}
              />

              <KecamatanSelectList color_scheme="white" idKec={idKec} setIdKec={setIdKec} />
            </div>
          </section>

          {/* Table Data Rekap Kecamatan */}
          <section className="p-4 w-full bg-white rounded-xl drop-shadow-lg">
            {/* Table Rekap Kecamatan */}
            <TableRekapKecamatan
              idKec={idKec.id_kec}
              limit={limit}
              page={page}
              search={search}
              month={month}
              year={year}
              setPage={setPage}
            />
          </section>
        </Container>
      </MainContainer>
    </>
  );
};

export default PenarikanKecamatan;

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
