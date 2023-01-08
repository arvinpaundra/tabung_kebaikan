import Head from 'next/head';
import { useRouter } from 'next/router';
import { HiOutlineChevronLeft } from 'react-icons/hi';
import { MobileContainer } from '../../../components/atoms/MainContainer';
import BottomNavbar from '../../../components/organisms/BottomNavbar';

const TambahMunfiq = (props) => {
  const router = useRouter();

  return (
    <div>
      <Head>
        <title>Tambah Munfiq</title>
      </Head>

      <MobileContainer>
        <div className="bg-gsc/80 p-4">
          <button className="flex items-center gap-1" onClick={() => router.back()}>
            <HiOutlineChevronLeft size={20} color="white" />
            <h3 className="text-lg font-medium text-white">Tambah Data Munfiq</h3>
          </button>
        </div>

        <div className="p-4 text-sm">
          <form className="w-full h-fit p-4 rounded-xl shadow-md bg-white flex flex-col items-center gap-4">
            <input
              type="text"
              className="bg-light-grey w-full px-4 py-3 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
              placeholder="Nama munfiq"
            />
            <input
              type="text"
              className="bg-light-grey w-full px-4 py-3 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
              placeholder="Alamat"
            />
            <input
              type="text"
              className="bg-light-grey w-full px-4 py-3 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
              placeholder="No telepon (opsional)"
            />
            <input
              type="text"
              className="bg-light-grey w-full px-4 py-3 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
              placeholder="Kelurahan (opsional)"
            />

            {/* <KecamatanSelectList idKec={idKec} setIdKec={setIdKec} /> */}

            <button
              type="submit"
              className="bg-gsc/90 mt-4 rounded-full px-6 py-3 font-semibold text-white hover:bg-gsc"
            >
              Simpan
            </button>
          </form>
        </div>
      </MobileContainer>

      <BottomNavbar />
    </div>
  );
};

export default TambahMunfiq;
