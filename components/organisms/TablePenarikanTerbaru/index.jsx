import { useCallback, useEffect, useState } from 'react';
import { getPenarikanTerbaru } from '../../../services/penarikan';
import TableItem from './TableItem';

const TablePenarikanTerbaru = (props) => {
  const [penarikan, setPenarikan] = useState([]);
  const [isLoading, setIsLoading] = useState(null);
  const [error, setError] = useState(null);

  const penarikanTerbaru = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await getPenarikanTerbaru();

      setPenarikan(response.data.result);
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    penarikanTerbaru();
  }, [penarikanTerbaru]);

  return (
    <table className="w-full">
      <thead className="font-semibold text-center">
        <tr className="border-b border-dark-blue/50">
          <td className="p-4">#</td>
          <td className="p-4">Munfiq</td>
          <td className="p-4">Nominal</td>
          <td className="p-4">Kecamatan</td>
          <td className="p-4">Petugas</td>
        </tr>
      </thead>
      <tbody className="text-center">
        {isLoading ? (
          <tr>
            <td colSpan={5} className="pt-8 pb-2 animate-pulse text-black/90 tracking-wide">
              Loading . . .
            </td>
          </tr>
        ) : (
          penarikan?.map((data, index) => (
            <TableItem
              key={data.id_penarikan}
              no={index}
              munfiq={data.munfiq}
              nominal={data.nominal}
              kecamatan={data.nama_kec}
              petugas={data.petugas}
            />
          ))
        )}
      </tbody>
    </table>
  );
};

export default TablePenarikanTerbaru;
