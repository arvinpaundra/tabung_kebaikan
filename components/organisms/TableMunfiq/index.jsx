import { useCallback, useEffect, useState } from 'react';
import { getAllDataMunfiq } from '../../../services/munfiq';
import Pagination from '../../molecules/Pagination';
import TableItem from './TableItem';

const TableMunfiq = (props) => {
  const { limit, search, page, setPage } = props;

  const [munfiq, setMunfiq] = useState([]);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isLoading, setIsLoading] = useState(null);

  const dataMunfiq = useCallback(
    async (search, limit, page) => {
      try {
        setIsLoading(true);

        const response = await getAllDataMunfiq(search, limit, page);

        setMunfiq(response.data.result);
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
    dataMunfiq(search, limit, page);
  }, [dataMunfiq, search, limit, page]);

  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  return (
    <div>
      <table className="table-auto w-full mt-6 text-black/90">
        <thead className="font-semibold text-center">
          <tr className="border-b border-dark-blue/50">
            <td className="py-4">Nama Lengkap</td>
            <td className="py-4">Whatsapp</td>
            <td className="py-4">Kelurahan</td>
            <td className="py-4">Kecamatan</td>
            <td className="py-4">Aksi</td>
          </tr>
        </thead>
        <tbody className="text-center">
          {isLoading ? (
            <tr>
              <td colSpan={6} className="pt-8 pb-2 animate-pulse text-black/90 tracking-wide">
                Loading . . .
              </td>
            </tr>
          ) : (
            munfiq.map((data) => (
              <TableItem
                key={data.id_munfiq}
                nama={data.fullname}
                whatsapp={data.no_tlp}
                kelurahan={data.kelurahan}
                kecamatan={data.nama_kec}
                kode={data.kode_tabung}
              />
            ))
          )}
        </tbody>
      </table>
      <Pagination rows={rows} pages={pages} pageChange={pageChange} />
    </div>
  );
};

export default TableMunfiq;
