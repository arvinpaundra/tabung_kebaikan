import { useCallback, useEffect, useState } from 'react';
import { getRekapByKecamatan } from '../../../services/rekap';
import Pagination from '../../molecules/Pagination';
import TableItem from './TableItem';

const TableRekapKecamatan = (props) => {
  const { month, year, limit, page, search, idKec, setPage } = props;

  const [rekap, setRekap] = useState([]);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isLoading, setIsLoading] = useState(null);

  const rekapKecamatan = useCallback(
    async (month, year, id_kec, search, limit, page) => {
      try {
        setIsLoading(true);

        const response = await getRekapByKecamatan(month, year, id_kec, search, limit, page);

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
    rekapKecamatan(month, year, idKec, search, limit, page);
  }, [rekapKecamatan, month, year, idKec, search, limit, page]);

  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div>
      <table className="table-auto w-full mt-6 text-black/90">
        <thead className="font-semibold text-center">
          <tr className="border-b border-dark-blue/50">
            <th className="py-4">Munfiq</th>
            <th className="py-4">Kode Tabung</th>
            <th className="py-4">Status</th>
            <th className="py-4">Nominal</th>
            <th className="py-4">Tgl. Tarik</th>
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
      <Pagination rows={rows} pages={pages} pageChange={pageChange} />
    </div>
  );
};

export default TableRekapKecamatan;
