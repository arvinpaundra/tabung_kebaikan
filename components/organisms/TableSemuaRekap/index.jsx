import { useCallback, useEffect, useState } from 'react';
import { getSemuaRekap } from '../../../services/rekap';
import Pagination from '../../molecules/Pagination';
import TableItem from './TableItem';

const TableSemuaRekap = (props) => {
  const { month, year, search, limit, page, setPage } = props;

  const [rekap, setRekap] = useState([]);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isLoading, setIsLoading] = useState(null);

  const allRekap = useCallback(
    async (month, year, search, limit, page) => {
      try {
        setIsLoading(true);

        const response = await getSemuaRekap(month, year, search, limit, page);

        setRekap(response.data.result);
        setPages(response.data.totalPages);
        setRows(response.data.totalRows);
        setPage(response.data.page);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
    [setPage],
  );

  useEffect(() => {
    allRekap(month, year, search, limit, page);
  }, [allRekap, month, year, search, limit, page]);

  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div>
      <table className="table-auto w-full mt-6 text-dark-blue">
        <thead className="font-semibold text-center">
          <tr className="border-b border-dark-blue/50">
            <td className="py-4">Munfiq</td>
            <td className="py-4">Kode Tabung</td>
            <td className="py-4">Kecamatan</td>
            <td className="py-4">Status</td>
            <td className="py-4">Kondisi Tabung</td>
            <td className="py-4">Nominal</td>
            <td className="py-4">Tgl. Tarik</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {isLoading ? (
            <tr>
              <td colSpan={6} className="pt-8 pb-2 animate-pulse text-dark-blue tracking-wide">
                Loading . . .
              </td>
            </tr>
          ) : (
            rekap.map((data) => (
              <TableItem
                key={data.id_rekap}
                kondisi={data.kondisi_tabung}
                munfiq={data.munfiq}
                nama_kec={data.nama_kec}
                status={data.status}
                nominal={data.nominal}
                kode={data.kode_tabung}
                tgl_tarik={data.tgl_tarik}
                id={data.id_rekap}
              />
            ))
          )}
        </tbody>
      </table>
      <Pagination pages={pages} rows={rows} pageChange={pageChange} />
    </div>
  );
};

export default TableSemuaRekap;
