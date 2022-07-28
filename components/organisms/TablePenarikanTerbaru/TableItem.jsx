import NumberFormat from 'react-number-format';

const TableItem = (props) => {
  const { no, munfiq, nominal, kecamatan, petugas } = props;

  return (
    <tr className="even:bg-gsc/10 hover:bg-gsc/10 transition ease-in-out duration-200">
      <td className="p-4">{no + 1}</td>
      <td className="p-4">{munfiq}</td>
      <td className="p-4">
        <NumberFormat
          displayType="text"
          type="text"
          decimalSeparator=","
          thousandSeparator="."
          prefix="Rp. "
          value={nominal}
        />
      </td>
      <td className="p-4">{kecamatan}</td>
      <td className="p-4">{petugas}</td>
    </tr>
  );
};

export default TableItem;
