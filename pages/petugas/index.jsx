/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import { MobileContainer } from '../../components/atoms/MainContainer';
import Link from 'next/link';
import BottomNavbar from '../../components/organisms/BottomNavbar';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Petugas</title>
      </Head>

      <MobileContainer>
        <div className="relative">
          <div className="p-4 flex gap-4 bg-gsc/80 rounded-b-2xl">
            {/* <img src="" alt="" /> */}
            <div className="bg-slate-400 w-14 h-14 rounded-full" />
            <div className="text-light-grey">
              <p className="text-sm">Assalamualaikum,</p>
              <p className="font-medium w-11/12 truncate">Arvin Paundra Ardana</p>
              <div className="w-fit rounded-full py-0.5 px-2 text-xs bg-white text-black mt-2 mb-14">
                Fundraiser
              </div>
            </div>
          </div>

          <div className="px-4 mb-5 flex justify-center text-sm absolute top-[65%] left-0 w-full">
            <div className="w-full p-3 flex gap-2 bg-white rounded-xl shadow-md text-center">
              <div className="w-1/2">
                <p>Saldo bulan ini</p>
                <p className="font-medium text-lg mt-3">Rp. 2.000.000</p>
                <p className="mt-3">
                  Lihat{' '}
                  <Link href="/petugas/rekap">
                    <a className="text-gsc">selengkapnya</a>
                  </Link>
                </p>
              </div>
              <div className="w-0.5 h-full bg-black/50 mx-1" />
              <div className="w-1/2 text-center">
                <p>Tabung ditarik</p>
                <p className="mt-3 font-medium text-lg">30</p>
                <p className="mt-3">dari 200 tabung</p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-20 w-1" />

        <div className="px-4 py-2 text-sm font-medium text-black/80 mb-4">
          <p className="font-semibold text-base mb-3">Menu Utama</p>
          <div className="grid grid-cols-4 grid-rows-1 place-items-start justify-items-center">
            <Link href="/petugas/penarikan">
              <a className="flex flex-col items-center justify-between gap-2">
                <div className="bg-slate-400 w-14 h-14 rounded-full" />
                <p className="text-center">Penarikan</p>
              </a>
            </Link>
            <Link href="/petugas/rekap">
              <a className="flex flex-col items-center justify-between gap-2">
                <div className="bg-slate-400 w-14 h-14 rounded-full" />
                <p className="text-center">Rekap</p>
              </a>
            </Link>
            <Link href="/petugas/munfiq">
              <a className="flex flex-col items-center justify-between gap-2">
                <div className="bg-slate-400 w-14 h-14 rounded-full" />
                <p className="text-center">Munfiq</p>
              </a>
            </Link>
            <a
              href="https://donasi.gsc.or.id"
              target="_blank"
              rel="noreferrer"
              className="flex flex-col items-center justify-between gap-2"
            >
              <div className="bg-slate-400 w-14 h-14 rounded-full" />
              <p className="text-center">Donasi</p>
            </a>
          </div>
        </div>

        <div className="px-4 py-2 text-sm font-medium text-black/80 mb-6">
          <p className="font-semibold text-base mb-3">Akses Cepat</p>
          <Link href="/petugas/munfiq/tambah">
            <a>
              <div className="w-full h-fit p-4 border border-transparent hover:border hover:border-gsc rounded-xl shadow-md bg-white mb-2">
                <h3 className="font-semibold mb-1">Tambah Munfiq</h3>
                <p className="text-smoke-grey">
                  Mengalihkan layar ke halaman tambah data munfiq baru.
                </p>
              </div>
            </a>
          </Link>
        </div>
      </MobileContainer>

      <BottomNavbar active="home" />
    </div>
  );
}

// export async function getServerSideProps({ req }) {
//   const { token } = req.cookies;

//   if (!token) {
//     return {
//       redirect: {
//         destination: '/login',
//         permanent: false,
//       },
//     };
//   }

//   const jwtToken = Buffer.from(token, 'base64').toString('ascii');
//   const payload = jwtDecode(jwtToken);
//   const { user } = payload;

//   return {
//     props: {
//       user,
//     },
//   };
// }
