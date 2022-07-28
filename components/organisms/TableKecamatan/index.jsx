import { useCallback, useEffect, useState } from 'react';
import { getAllKecamatan } from '../../../services/kecamatan';
import Pagination from '../../molecules/Pagination';
import TableItem from './TableItem';

const TableKecamatan = (props) => {
  const { limit, page, search, setPage, setIdKec, onShow } = props;

  const [kecamatan, setKecamatan] = useState([]);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isLoading, setIsLoading] = useState(null);

  const allKecamatan = useCallback(
    async (search, limit, page) => {
      try {
        setIsLoading(true);
        const response = await getAllKecamatan(search, limit, page);

        setKecamatan(response.data.result);
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
    allKecamatan(search, limit, page);
  }, [allKecamatan, search, limit, page]);

  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div>
      <table className="table-auto w-full mt-6 text-black/90">
        <thead className="font-semibold text-center">
          <tr className="border-b border-dark-blue/50">
            <td className="py-4">Nama Kecamatan</td>
            <td className="py-4">Kode Kecamatan</td>
            <td className="py-4">Aksi</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {isLoading ? (
            <tr>
              <td colSpan={3} className="pt-8 pb-2 animate-pulse text-black/90 tracking-wide">
                Loading . . .
              </td>
            </tr>
          ) : (
            kecamatan?.map((data) => (
              <TableItem
                setIdKec={setIdKec}
                onShow={onShow}
                key={data.id_kec}
                nama={data.nama_kec}
                kode={data.kode_kec}
                id={data.id_kec}
              />
            ))
          )}
        </tbody>
      </table>
      <Pagination pages={pages} rows={rows} pageChange={pageChange} />
    </div>
  );
};

export default TableKecamatan;
