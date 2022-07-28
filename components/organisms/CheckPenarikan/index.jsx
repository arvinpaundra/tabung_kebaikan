import { useCallback, useEffect, useState } from 'react';
import { Dialog } from '@headlessui/react';
import { Modal } from '../../molecules/Modals';
import { getCheckStatusPenarikan } from '../../../services/penarikan';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

const CheckPenarikan = (props) => {
  const [show, onShow] = useState(false);
  const [kode, setKode] = useState('');
  const [search, setSearch] = useState('');
  const [isLoading, setIsLoading] = useState(null);

  const router = useRouter();

  const checkStatus = useCallback(
    async (kode_tabung) => {
      try {
        setIsLoading(true);

        const response = await getCheckStatusPenarikan(kode_tabung);

        if (response.error) {
          throw new Error(response.message);
        }

        router.push(`/admin/penarikan/${kode_tabung}`);
      } catch (error) {
        if (error.message === 'conflict') {
          toast.error('Tabung sudah ditarik.');
        } else {
          toast.error(error.message);
        }
      } finally {
        setIsLoading(false);
      }
    },
    [router],
  );

  useEffect(() => {
    if (search) {
      checkStatus(search);
    }
  }, [checkStatus, search]);

  const check = async (event) => {
    event.preventDefault();

    setSearch(kode.toUpperCase());
  };

  return (
    <>
      <button
        onClick={() => onShow(true)}
        className="bg-gsc/90 rounded-xl px-6 py-3 text-white hover:bg-gsc"
      >
        Kode Tabung
      </button>
      <Modal onShow={onShow} show={show}>
        {isLoading ? (
          <div className="w-full h-full flex items-center justify-center text-black/90 animate-pulse text-xl">
            Loading . . .
          </div>
        ) : (
          <>
            <Dialog.Title as="h2" className="text-center font-bold text-2xl mb-4">
              Cek Penarikan :
            </Dialog.Title>
            <form onSubmit={check} className="flex flex-col gap-4 justify-center items-center">
              <input
                type="text"
                className="bg-light-grey px-4 py-2 text-black/90 rounded-full w-80 border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/90"
                placeholder="Kode tabung . . ."
                value={kode}
                onChange={(event) => setKode(event.target.value)}
              />
              <button
                type="submit"
                className="bg-gsc/90 rounded-full px-10 py-3 text-white hover:bg-gsc"
              >
                Cek
              </button>
            </form>
          </>
        )}
      </Modal>
    </>
  );
};

export default CheckPenarikan;
