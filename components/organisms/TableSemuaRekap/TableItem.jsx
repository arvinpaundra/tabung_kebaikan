import NumberFormat from 'react-number-format';
import Badge from '../../atoms/badge';

const TableItem = (props) => {
  const { munfiq, nama_kec, status, nominal, tgl_tarik, kode, kondisi } = props;

  const formattedDate = tgl_tarik ? new Date(tgl_tarik) : null;

  return (
    <tr className="even:bg-gsc/10 hover:bg-gsc/10">
      <td className="py-6">{munfiq}</td>
      <td className="py-6">{kode}</td>
      <td className="py-6">{nama_kec}</td>
      <td className="py-6 flex justify-center">
        {status === '1' ? (
          <Badge status="bg-happy" label="ditarik" />
        ) : (
          <Badge status="bg-anger" label="belum" />
        )}
      </td>
      <td className="py-6">{kondisi === 'b' ? 'Baik' : kondisi === 'r' ? 'Rusak' : '-'}</td>
      <td className="py-6">
        <NumberFormat
          displayType="text"
          type="text"
          thousandSeparator="."
          decimalSeparator=","
          prefix="Rp. "
          value={nominal ?? 0}
        />
      </td>

      <td className="py-6">
        {formattedDate
          ? formattedDate?.toLocaleDateString('in-IN', {
              day: '2-digit',
              month: 'long',
              year: 'numeric',
            })
          : '-'}
      </td>
    </tr>
  );
};

export default TableItem;
