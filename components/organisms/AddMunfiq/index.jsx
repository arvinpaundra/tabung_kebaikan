import { Modal } from '../../molecules/Modals';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import FormAddMunfiq from './FormAddMunfiq';

const AddMunfiq = (props) => {
  const [show, onShow] = useState(false);

  return (
    <>
      <button
        onClick={() => onShow(true)}
        className="bg-gsc/90 rounded-xl px-6 py-3 text-white hover:bg-gsc"
      >
        + Tambah
      </button>

      <Modal show={show} onShow={onShow}>
        <Dialog.Title as="h3" className="text-center font-bold text-2xl mb-4">
          Tambah Munfiq
        </Dialog.Title>

        <FormAddMunfiq onShow={onShow} />
      </Modal>
    </>
  );
};

export default AddMunfiq;
