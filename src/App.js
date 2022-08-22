import useFetch from "./Utils/useFetch";
import Spinner from "./Components/Spinner/index";
import ReactPaginate from "react-paginate";

const App = () => {
  const { sourceData, totalPages, currentPage, loading, error, changePage } =
    useFetch("https://gutendex.com/books/?page=");

  if (loading) return <Spinner />;
  if (error) console.log(error);

  const handlePageClick = (e) => {
    const cPage = e.selected + 1;
    changePage(cPage);
  };

  return (
    <div className="App">
      <h1>Book Shop</h1>
      {loading ? (
        <Spinner />
      ) : (
        <div>
          <ul>
            {sourceData?.map((book) => (
              <li key={book.id}>{book.title}</li>
            ))}
          </ul>
          <ReactPaginate
            nextLabel="next >"
            forcePage={currentPage - 1}
            onPageChange={(e) => handlePageClick(e)}
            pageRangeDisplayed={3}
            marginPagesDisplayed={1}
            pageCount={totalPages}
            previousLabel="< previous"
            pageClassName="page-item"
            pageLinkClassName="page-link"
            previousClassName="page-item"
            previousLinkClassName="page-link"
            nextClassName="page-item"
            nextLinkClassName="page-link"
            breakLabel="..."
            breakClassName="page-item"
            breakLinkClassName="page-link"
            containerClassName="pagination"
            activeClassName="active"
            renderOnZeroPageCount={null}
          />
        </div>
      )}
    </div>
  );
};

export default App;
