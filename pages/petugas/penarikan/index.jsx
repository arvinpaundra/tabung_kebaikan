import { Dialog } from '@headlessui/react';
import Head from 'next/head';
import { useState } from 'react';
import { MobileContainer } from '../../../components/atoms/MainContainer';
import { Modal } from '../../../components/molecules/Modals';
import BottomNavbar from '../../../components/organisms/BottomNavbar';

const Penarikan = (props) => {
  const [status, setStatus] = useState('y');
  const [show, onShow] = useState(false);

  return (
    <div>
      <Head>
        <title>Riwayat Penarikan</title>
      </Head>

      <MobileContainer>
        <div className="bg-gsc/80 p-4">
          <form className="mb-4">
            <input
              type="text"
              className="w-full bg-light-grey px-4 py-2 text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/90"
              placeholder="Cari munfiq . . ."
            />
          </form>

          <div className="grid grid-cols-2 grid-rows-1 justify-items-center gap-4 text-sm">
            <div
              className={`text-white font-semibold py-2 cursor-pointer ${
                status == 'y' ? 'bg-white/20 h-full w-full text-center rounded-full' : ''
              }`}
              onClick={() => setStatus('y')}
            >
              <p>Ditarik (1)</p>
            </div>
            <div
              className={`text-white font-semibold py-2 cursor-pointer ${
                status == 'n' ? 'bg-white/20 h-full w-full text-center rounded-full' : ''
              }`}
              onClick={() => setStatus('n')}
            >
              <p>Belum ditarik (3)</p>
            </div>
          </div>
        </div>

        <div className="p-4 text-sm">
          <div className="flex justify-end w-full mb-6">
            <input
              type="date"
              className="bg-white rounded-full px-4 py-2 text-black/90/80 w-44 border-white border hover:border-gsc focus:outline-none focus:border focus:border-gsc"
            />
          </div>

          {status == 'y' ? (
            <ul>
              <li>
                <div className="w-full h-fit p-4 rounded-xl shadow-md bg-white mb-2 border border-transparent hover:border hover:border-gsc">
                  <p className="text-base font-semibold">Margete Penticost</p>
                  <p className="text-smoke-grey">SHD-19108</p>
                  <p className="text-xl text-black/80 font-medium mt-2">Rp. 200.000</p>
                  <p className="text-smoke-grey text-end italic mt-1">05 Januari 2023</p>
                </div>
              </li>
            </ul>
          ) : (
            <ul>
              <li>
                <div className="w-full h-fit p-4 rounded-xl shadow-md bg-white mb-2 border border-transparent hover:border hover:border-gsc">
                  <p className="text-base font-semibold">Morrie Bezants</p>
                  <p className="text-smoke-grey">SHD-19108</p>
                  <div className="flex justify-end gap-2">
                    <button
                      className="rounded-xl px-4 py-2 text-gsc/90"
                      onClick={() => onShow((prevState) => !prevState)}
                    >
                      Lihat detail
                    </button>
                    <button className="bg-gsc/90 rounded-xl px-4 py-2 text-white hover:bg-gsc">
                      Jemput
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full h-fit p-4 rounded-xl shadow-md bg-white mb-2 border border-transparent hover:border hover:border-gsc">
                  <p className="text-base font-semibold">Morrie Bezants</p>
                  <p className="text-smoke-grey">SHD-19108</p>
                  <div className="flex justify-end gap-2">
                    <button
                      className="rounded-xl px-4 py-2  text-gsc/90"
                      onClick={() => onShow((prevState) => !prevState)}
                    >
                      Lihat detail
                    </button>
                    <button className="bg-gsc/90 rounded-xl px-4 py-2 text-white hover:bg-gsc">
                      Jemput
                    </button>
                  </div>
                </div>
              </li>
              <li>
                <div className="w-full h-fit p-4 rounded-xl shadow-md bg-white mb-2 border border-transparent hover:border hover:border-gsc">
                  <p className="text-base font-semibold">Morrie Bezants</p>
                  <p className="text-smoke-grey">SHD-19108</p>
                  <div className="flex justify-end gap-2">
                    <button
                      className="rounded-xl px-4 py-2 text-gsc/90"
                      onClick={() => onShow((prevState) => !prevState)}
                    >
                      Lihat detail
                    </button>
                    <button className="bg-gsc/90 rounded-xl px-4 py-2 text-white hover:bg-gsc">
                      Jemput
                    </button>
                  </div>
                </div>
              </li>
            </ul>
          )}
        </div>
      </MobileContainer>

      <BottomNavbar />

      <Modal onShow={onShow} show={show}>
        <Dialog.Title as="p" className="text-center font-bold text-xl mb-2">
          Detail Munfiq
        </Dialog.Title>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Nama</p>
            <p className="text-smoke-grey">Morrie Bezants</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Kode Tabung</p>
            <p className="text-smoke-grey">SHD-19108</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Nomor Whatsapp</p>
            <p className="text-smoke-grey">8946668049</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Kecamatan</p>
            <p className="text-smoke-grey">Cilacap Tengah</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Kelurahan</p>
            <p className="text-smoke-grey">Cilacap Tengah</p>
          </div>
          <div className="flex flex-col gap-1">
            <p className="font-semibold">Alamat</p>
            <p className="text-smoke-grey">3950 Declaration Road</p>
          </div>
          <button
            className="bg-gsc/90 rounded-xl px-6 py-2 text-white hover:bg-gsc self-center mt-2"
            onClick={() => onShow(false)}
          >
            Tutup
          </button>
        </div>
      </Modal>
    </div>
  );
};

export default Penarikan;
