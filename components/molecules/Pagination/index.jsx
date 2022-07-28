import NumberFormat from 'react-number-format';
import ReactPaginate from 'react-paginate';

const Pagination = (props) => {
  const { rows, pages, pageChange } = props;

  return (
    <nav
      className="flex justify-between items-center pt-8 pb-2"
      key={rows}
      role="navigation"
      aria-label="pagination"
    >
      <p className="text-black/90">
        Total{' '}
        <NumberFormat
          displayType="text"
          type="text"
          thousandSeparator="."
          decimalSeparator=","
          value={rows}
        />{' '}
        data.
      </p>
      <ReactPaginate
        previousLabel="< Prev"
        nextLabel="Next >"
        onPageChange={pageChange}
        pageCount={Math.min(10, pages)}
        pageRangeDisplayed={2}
        breakClassName="px-4 py-2 bg-white cursor-default tracking-widest"
        containerClassName="flex items-center text-black/90"
        pageLinkClassName="bg-light-grey hover:bg-gsc px-4 py-2 hover:text-white transition ease-in-out duration-200"
        previousLinkClassName="bg-light-grey hover:bg-gsc py-2 px-4 hover:text-white transition ease-in-out duration-200 rounded-l-lg"
        nextLinkClassName="bg-light-grey hover:bg-gsc py-2 px-4 hover:text-white transition ease-in-out duration-200 rounded-r-lg"
        activeLinkClassName="bg-gsc px-4 py-2 text-white"
        disabledLinkClassName="bg-light-grey text-smoke-grey cursor-default hover:bg-light-grey hover:text-smoke-grey"
      />
    </nav>
  );
};

export default Pagination;
