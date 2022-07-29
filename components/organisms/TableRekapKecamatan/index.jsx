import { useCallback, useEffect, useState } from 'react';
import { getRekapByKecamatan } from '../../../services/rekap';
import Pagination from '../../molecules/Pagination';
import TableItem from './TableItem';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import { Modal } from '../../molecules/Modals';
import { Dialog } from '@headlessui/react';

const TableRekapKecamatan = (props) => {
  const { month, year, limit, page, search, kec, setPage, setLimit } = props;

  const [rekap, setRekap] = useState([]);
  const [pages, setPages] = useState(0);
  const [rows, setRows] = useState(0);
  const [isLoading, setIsLoading] = useState(null);
  const [show, onShow] = useState(false);

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

  const { id_kec } = kec;

  useEffect(() => {
    rekapKecamatan(month, year, id_kec, search, limit, page);
  }, [rekapKecamatan, month, year, id_kec, search, limit, page]);

  const pageChange = ({ selected }) => {
    setPage(selected);
  };

  const exportPDF = (event) => {
    event.preventDefault();

    const unit = 'pt';
    const size = 'A4';
    const orientation = 'landscape';

    const doc = new jsPDF(orientation, unit, size);

    doc.setFontSize(15);

    const title = `Data Tabung Kebaikan Kecamatan ${kec.nama_kec}`;
    const headers = [['Munfiq', 'Whatsapp', 'Alamat', 'kelurahan', 'Kode Tabung', 'Status']];

    const data = rekap.map((data) => [
      data.munfiq,
      data.no_tlp,
      data.alamat,
      data.kelurahan,
      data.kode_tabung,
      data.status === '1' ? 'Ditarik' : 'Belum',
    ]);

    let content = {
      startY: 50,
      head: headers,
      body: data,
    };

    doc.text(title, 40, 40);
    doc.autoTable(content);
    doc.output('dataurlnewwindow');

    onShow(false);
    setLimit(0);
  };

  return (
    <div>
      {id_kec && (
        <>
          <button
            onClick={() => onShow(true)}
            className="bg-gsc/90 rounded-xl px-6 py-3 text-white hover:bg-gsc"
          >
            Cetak
          </button>
          <Modal show={show} onShow={onShow}>
            <form onSubmit={exportPDF} className="flex flex-col gap-4 items-center">
              <Dialog.Title as="h3" className="text-center font-bold text-2xl">
                Masukkan limit data
              </Dialog.Title>

              <input
                type="number"
                className="bg-light-grey px-4 py-2 w-full text-black/90 rounded-full border-light-grey border hover:border-gsc focus:outline-none focus:border focus:border-gsc placeholder:text-black/60"
                placeholder="Default 10 baris data"
                onChange={(event) => setLimit(event.target.value)}
              />

              <button
                className="bg-gsc/90 w-fit rounded-full px-10 py-3 text-white hover:bg-gsc"
                type="submit"
              >
                Cetak
              </button>
            </form>
          </Modal>
        </>
      )}

      <table id="pdf" className="table-auto w-full mt-6 text-black/90">
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
          {rekap.map((data) => (
            <TableItem
              key={data.id_rekap}
              munfiq={data.munfiq}
              status={data.status}
              nominal={data.nominal}
              tgl_tarik={data.tgl_tarik}
              kode={data.kode_tabung}
              id={data.id_rekap}
            />
          ))}
        </tbody>
      </table>
      <Pagination rows={rows} pages={pages} pageChange={pageChange} />
    </div>
  );
};

export default TableRekapKecamatan;
