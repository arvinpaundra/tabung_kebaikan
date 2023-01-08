import Link from 'next/link';
import { IoPerson, IoBarcodeSharp } from 'react-icons/io5';
import { TiHome } from 'react-icons/ti';

const BottomNavbar = (props) => {
  const { active } = props;

  return (
    <div className="fixed bottom-0 left-0 w-full max-w-md grid grid-cols-3 grid-rows-1 p-2 bg-white text-smoke-grey text-sm">
      <Link href="/petugas">
        <a>
          <div
            className={`flex flex-col items-center px-4 py-1 ${
              active === 'home' ? 'text-gsc bg-gsc/10 rounded-xl' : ''
            }`}
          >
            <TiHome size={24} />
            <p>Beranda</p>
          </div>
        </a>
      </Link>
      <Link href="/petugas/scan">
        <a>
          <div
            className={`flex flex-col items-center  px-4 py-1 ${
              active === 'scan' ? 'text-gsc bg-gsc/10 rounded-xl' : ''
            }`}
          >
            <IoBarcodeSharp size={24} />
            <p>Scan</p>
          </div>
        </a>
      </Link>
      <Link href="/petugas/akun">
        <a>
          <div
            className={`flex flex-col items-center  px-4 py-1 ${
              active === 'account' ? 'text-gsc bg-gsc/10 rounded-xl' : ''
            }`}
          >
            <IoPerson size={24} />
            <p>Akun</p>
          </div>
        </a>
      </Link>
    </div>
  );
};

export default BottomNavbar;
