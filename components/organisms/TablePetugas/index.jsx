import { useCallback, useEffect, useState } from 'react';
import { getAllDataPetugas } from '../../../services/petugas';
import Pagination from '../../molecules/Pagination';
import TableItem from './TableItem';

const TablePetugas = (props) => {
  const { limit, search, page, setPage } = props;

  const [petugas, setPetugas] = useState([]);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isLoading, setIsLoading] = useState(null);

  const dataPetugas = useCallback(
    async (search, limit, page) => {
      try {
        setIsLoading(true);
        const response = await getAllDataPetugas(search, limit, page);

        setPetugas(response.data.result);
        setPage(response.data.page);
        setPages(response.data.totalPages);
        setRows(response.data.totalRows);
      } catch (error) {
      } finally {
        setIsLoading(false);
      }
    },
    [setPage],
  );

  useEffect(() => {
    dataPetugas(search, limit, page);
  }, [dataPetugas, search, limit, page]);

  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div>
      <table className="table-auto w-full mt-6 text-black/90">
        <thead className="font-semibold text-center">
          <tr className="border-b border-dark-blue/50">
            <td className="py-4">Nama Lengkap</td>
            <td className="py-4">Username</td>
            <td className="py-4">Kecamatan</td>
            <td className="py-4">Aksi</td>
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
            petugas.map((data) => (
              <TableItem
                key={data.id_user}
                nama={data.fullname}
                username={data.username}
                kecamatan={data.nama_kec}
              />
            ))
          )}
        </tbody>
      </table>
      <Pagination rows={rows} pages={pages} pageChange={pageChange} />
    </div>
  );
};

export default TablePetugas;
