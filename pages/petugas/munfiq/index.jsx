import Head from 'next/head';
import Link from 'next/link';
import { MobileContainer } from '../../../components/atoms/MainContainer';
import BottomNavbar from '../../../components/organisms/BottomNavbar';
import { BsPlusCircle, BsPlusLg } from 'react-icons/bs';

const Munfiq = (props) => {
  return (
    <div>
      <Head>
        <title>Munfiq</title>
      </Head>

      <MobileContainer>
        <div className="p-4 bg-gsc/80">
          <form>
            <input
              type="text"
              className="w-full bg-light-grey px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/90"
              placeholder="Cari munfiq . . ."
            />
          </form>
        </div>

        <div className="p-4 text-sm">
          <ul>
            <li>
              <Link href="/">
                <a>
                  <div className="w-full h-fit flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white mb-2 border border-transparent hover:border hover:border-gsc">
                    <p className="text-base font-semibold">Margete Penticost</p>
                    <p className="text-smoke-grey">SHD-19108</p>
                    <p className="text-smoke-grey">8946668049</p>
                  </div>
                </a>
              </Link>
            </li>
            <li>
              <Link href="/">
                <a>
                  <div className="w-full h-fit flex flex-col gap-2 p-4 rounded-xl shadow-md bg-white mb-2 border border-transparent hover:border hover:border-gsc">
                    <p className="text-base font-semibold">Margete Penticost</p>
                    <p className="text-smoke-grey">SHD-19108</p>
                    <p className="text-smoke-grey">8946668049</p>
                  </div>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </MobileContainer>

      <BottomNavbar />

      <Link href="/petugas/munfiq/tambah">
        <a>
          <button className="fixed bottom-20 right-4 md:hidden bg-gsc/90 rounded-full p-5 text-white hover:bg-gsc">
            <BsPlusLg />
          </button>
        </a>
      </Link>
    </div>
  );
};

export default Munfiq;
