import { useRouter } from 'next/router';
import { useState } from 'react';
import NumberFormat from 'react-number-format';
import { toast } from 'react-toastify';
import { setAddPenarikan } from '../../../services/penarikan';
import { InputTarik } from './index';

const FormPenarikan = (props) => {
  const { id_kec, id_munfiq, kode, user } = props;

  const [nominal, setNominal] = useState(0);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const data = {
      id_kec: id_kec,
      id_munfiq: id_munfiq,
      nominal: +nominal,
      id_user: user.id_user,
    };

    if (+nominal <= 0 || !nominal) {
      toast.error('Masukkan nominal penarikan!');
      return;
    }

    const response = await setAddPenarikan(data, kode);

    if (response.error) {
      if (response.message === 'conflict') {
        toast.error('Tabung sudah ditarik.');
      } else {
        toast.error(response.message);
      }
    } else {
      toast.success('Tabung berhasil ditarik!');
      router.push('/admin');
    }

    setNominal(0);
  };

  return (
    <form className="flex items-center gap-2" onSubmit={handleSubmit}>
      <NumberFormat
        customInput={InputTarik}
        value={nominal}
        placeholder="Nominal penarikan . . ."
        thousandSeparator="."
        decimalSeparator=","
        onValueChange={(values, sourceInfo) => setNominal(values.value)}
      />
      <button
        type="submit"
        className="bg-gsc/90 py-2 px-8 rounded-full w-fit self-end text-white hover:bg-gsc"
      >
        Tarik
      </button>
    </form>
  );
};

export default FormPenarikan;
