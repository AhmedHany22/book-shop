import "./App.css";
import useFetch from "./Utils/useFetch";
import Spinner from "./Components/Spinner/index";
import ReactPaginate from "react-paginate";
import NavSearch from "./Components/NavBar/index";
import Hero from "./Components/Hero/index";
import BooksList from "./Components/BooksList/index";

const App = () => {
  const { sourceData, totalPages, currentPage, loading, error, changePage } =
    useFetch("https://gutendex.com/books/?page=");

  if (error) console.log(error);

  const handlePageClick = (e) => {
    const cPage = e.selected + 1;
    changePage(cPage);
    window.scrollTo(0, 0);
  };

  return (
    <div className="App mb-8">
      <NavSearch />
      <Hero />
      {loading ? (
        <Spinner />
      ) : (
        <div className="w-5/6 mx-auto mt-10">
          <h3>Pobular Now</h3>
          <BooksList list={sourceData} />
          <div className="flex mt-16">
            <ReactPaginate
              breakLabel="..."
              nextLabel="next >"
              previousLabel="< previous"
              pageCount={totalPages}
              pageRangeDisplayed={3}
              marginPagesDisplayed={1}
              forcePage={currentPage - 1}
              onPageChange={(e) => handlePageClick(e)}
              nextClassName="page-item"
              nextLinkClassName="next"
              pageClassName="page-item"
              pageLinkClassName="page-link"
              previousClassName="page-item"
              previousLinkClassName="previous"
              breakClassName="page-item"
              breakLinkClassName="page-link"
              containerClassName="container"
              activeLinkClassName="active"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
