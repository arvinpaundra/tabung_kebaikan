/* eslint-disable @next/next/no-img-element */
import Head from 'next/head';
import Link from 'next/link';
import { MobileContainer } from '../../../components/atoms/MainContainer';
import BottomNavbar from '../../../components/organisms/BottomNavbar';

const Akun = (props) => {
  return (
    <div>
      <Head>
        <title>Akun</title>
      </Head>

      <MobileContainer>
        <div className="relative">
          <div className="px-4 py-6 flex gap-4 bg-gsc/80">
            {/* <img src="" alt="" /> */}
            <div className="w-16 h-16 rounded-full bg-slate-400" />

            <div className="text-sm">
              <h3 className="font-semibold text-base truncate text-white">Arvin Paundra Ardana</h3>
              <h3 className="truncate text-white">0812345467890</h3>
              <div className="w-fit rounded-full py-0.5 px-2 text-xs bg-white text-black mt-2 mb-12">
                Fundraiser
              </div>
            </div>
          </div>

          <div className="absolute top-[70%] left-0 px-4 text-sm w-full h-fit">
            <div className="p-4 rounded-xl shadow-md bg-white flex flex-col gap-4 w-full">
              <Link href="/">
                <a>
                  <div>
                    <p className="font-medium">Profil Petugas</p>
                  </div>
                </a>
              </Link>
              <hr />
              <Link href="/">
                <a>
                  <div>
                    <p className="font-medium">Ganti Kata Sandi</p>
                  </div>
                </a>
              </Link>
              <hr />
              <div className="cursor-pointer">
                <p className="font-medium">Keluar dari Aplikasi</p>
              </div>
            </div>
          </div>
        </div>
      </MobileContainer>

      <BottomNavbar active="account" />
    </div>
  );
};

export default Akun;
