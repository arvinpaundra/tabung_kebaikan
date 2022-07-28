import { useCallback, useEffect, useState } from 'react';
import { getAllPenarikan } from '../../../services/penarikan';
import Pagination from '../../molecules/Pagination';
import TableItem from './TableItem';

const TablePenarikan = (props) => {
  const { limit, page, search, setPage, onShow, setIdPenarikan } = props;

  const [penarikan, setPenarikan] = useState([]);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isLoading, setIsLoading] = useState(null);

  const allPenarikan = useCallback(
    async (search, limit, page) => {
      try {
        setIsLoading(true);

        const response = await getAllPenarikan(search, limit, page);

        setPenarikan(response.data.result);
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
    allPenarikan(search, limit, page);
  }, [allPenarikan, search, limit, page]);

  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div>
      <table className="table-auto w-full mt-6 text-black/90">
        <thead className="font-semibold text-center">
          <tr className="border-b border-dark-blue/50">
            <td className="py-4">Munfiq</td>
            <td className="py-4">Nominal</td>
            <td className="py-4">Kode Tabung</td>
            <td className="py-4">Kecamatan</td>
            <td className="py-4">Petugas</td>
            <td className="py-4">Aksi</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {isLoading ? (
            <tr>
              <td colSpan={7} className="pt-8 pb-2 animate-pulse text-black/90 tracking-wide">
                Loading . . .
              </td>
            </tr>
          ) : (
            penarikan.map((data) => (
              <TableItem
                onShow={onShow}
                setIdPenarikan={setIdPenarikan}
                key={data.id_penarikan}
                munfiq={data.munfiq}
                nominal={data.nominal}
                kode={data.kode_tabung}
                kecamatan={data.nama_kec}
                petugas={data.petugas}
                id={data.id_penarikan}
              />
            ))
          )}
        </tbody>
      </table>
      <Pagination pages={pages} rows={rows} pageChange={pageChange} />
    </div>
  );
};

export default TablePenarikan;
