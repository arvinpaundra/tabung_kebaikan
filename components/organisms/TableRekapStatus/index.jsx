import { useCallback, useEffect, useState } from 'react';
import { getRekapByStatus } from '../../../services/rekap';
import Pagination from '../../molecules/Pagination';
import TableItem from './TableItem';

const TableRekapStatus = (props) => {
  const { limit, page, search, status, month, year, setPage } = props;

  const [rekap, setRekap] = useState([]);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isLoading, setIsLoading] = useState(null);

  const rekapStatus = useCallback(
    async (month, year, status, search, limit, page) => {
      try {
        setIsLoading(true);

        const response = await getRekapByStatus(month, year, status, search, limit, page);

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
    rekapStatus(month, year, status, search, limit, page);
  }, [rekapStatus, month, year, status, search, limit, page]);

  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div>
      <table className="table-auto w-full mt-6 text-black/90">
        <thead className="font-semibold text-center">
          <tr className="border-b border-dark-blue/50">
            <td className="py-4">Munfiq</td>
            <td className="py-4">Kode Tabung</td>
            <td className="py-4">Kecamatan</td>
            <td className="py-4">Status</td>
            <td className="py-4">Nominal</td>
            <td className="py-4">Tgl. Tarik</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {isLoading ? (
            <tr>
              <td colSpan={8} className="pt-8 pb-2 animate-pulse text-black/90 tracking-wide">
                Loading . . .
              </td>
            </tr>
          ) : (
            rekap.map((data) => (
              <TableItem
                key={data.id_rekap}
                munfiq={data.munfiq}
                nama_kec={data.nama_kec}
                status={data.status}
                nominal={data.nominal}
                tgl_tarik={data.tgl_tarik}
                kode={data.kode_tabung}
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

export default TableRekapStatus;
