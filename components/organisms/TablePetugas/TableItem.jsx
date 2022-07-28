import Link from 'next/link';

const TableItem = (props) => {
  const { nama, username, kecamatan } = props;

  return (
    <tr className="even:bg-gsc/10 hover:bg-gsc/10">
      <td className="py-6">{nama}</td>
      <td className="py-6">{username}</td>
      <td className="py-6">{kecamatan}</td>
      <td className="py-6">
        <Link href={`/admin/petugas/${username}`}>
          <a className="bg-light-grey rounded-full hover:drop-shadow-md px-6 py-2 text-black/90 hover:bg-light-grey">
            Detail
          </a>
        </Link>
      </td>
    </tr>
  );
};

export default TableItem;
