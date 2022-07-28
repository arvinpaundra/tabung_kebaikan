const TableItem = (props) => {
  const { nama, kode, id, setIdKec, onShow } = props;

  const handleClick = () => {
    setIdKec(id);
    onShow(true);
  };

  return (
    <tr className="even:bg-gsc/10 hover:bg-gsc/10">
      <td className="py-6">{nama}</td>
      <td className="py-6">{kode}</td>
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
