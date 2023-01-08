import Head from 'next/head';
import { MobileContainer } from '../../../components/atoms/MainContainer';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import BottomNavbar from '../../../components/organisms/BottomNavbar';
import { useRouter } from 'next/router';

const Rekap = (props) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Rekap Petugas</title>
      </Head>

      <MobileContainer>
        <div className="bg-gsc/80 p-4">
          <button className="flex items-center gap-1" onClick={() => router.back()}>
            <HiOutlineChevronLeft size={20} color="white" />
            <h3 className="text-lg font-medium text-white">Rekap Penarikan</h3>
          </button>
        </div>

        <div className="p-4 text-sm">
          <div className="flex justify-end w-full mb-6">
            <input
              type="date"
              className="bg-white rounded-full px-4 py-2 text-black/90/80 w-44 border-white border hover:border-gsc focus:outline-none focus:border focus:border-gsc"
            />
          </div>

          <ul>
            <li>
              <div className="w-full h-fit p-4 rounded-xl shadow-md bg-white mb-2 border border-transparent hover:border hover:border-gsc">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <p className="font-semibold">Periode :</p>
                    <p className="text-smoke-grey">Januari 2023</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Keterangan :</p>
                    <p className="text-smoke-grey">Tertarik 1 dari 3 tabung.</p>
                  </div>
                  <div className="flex mt-1">
                    <p className="text-black text-xl">Rp. 500.0000</p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div className="w-full h-fit p-4 rounded-xl shadow-md bg-white mb-2 border border-transparent hover:border hover:border-gsc">
                <div className="flex flex-col gap-2">
                  <div className="flex gap-1">
                    <p className="font-semibold">Periode :</p>
                    <p className="text-smoke-grey">Februari 2023</p>
                  </div>
                  <div className="flex gap-1">
                    <p className="font-semibold">Keterangan :</p>
                    <p className="text-smoke-grey">Tertarik 1 dari 3 tabung.</p>
                  </div>
                  <div className="flex mt-1">
                    <p className="text-black text-xl">Rp. 500.0000</p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </MobileContainer>

      <BottomNavbar />
    </div>
  );
};

export default Rekap;
