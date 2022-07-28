import NumberFormat from 'react-number-format';

const TableItem = (props) => {
  const { munfiq, nominal, kode, kecamatan, petugas, id, onShow, setIdPenarikan } = props;

  const handleClick = () => {
    onShow(true);
    setIdPenarikan(id);
  };

  return (
    <tr className="even:bg-gsc/10 hover:bg-gsc/10">
      <td className="py-6">{munfiq}</td>
      <td className="py-6">
        <NumberFormat
          displayType="text"
          type="text"
          thousandSeparator="."
          decimalSeparator=","
          prefix="Rp. "
          value={nominal}
        />
      </td>
      <td className="py-6">{kode}</td>
      <td className="py-6">{kecamatan}</td>
      <td className="py-6">{petugas}</td>
      <td className="py-6">
        <button
          onClick={handleClick}
          className="bg-light-grey rounded-full hover:drop-shadow-md px-6 py-2 text-black/90 hover:bg-light-grey"
        >
          Edit
        </button>
      </td>
    </tr>
  );
};

export default TableItem;
