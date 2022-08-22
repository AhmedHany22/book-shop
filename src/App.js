import useFetch from "./Utils/useFetch";
import Spinner from "./Components/Spinner/index";

const App = () => {
  const { sourceData, totalPages, loading, error, refetch } = useFetch(
    "https://gutendex.com/book/?page=1"
  );

  if (loading) return <Spinner />;
  if (error) console.log(`Encounterd error :- ${error}`);

  return (
    <div className="App">
      <h1>Book Shop</h1>
      {loading ? (
        <Spinner />
      ) : (
        <ul>
          {sourceData?.map((book) => (
            <li key={book.id}>{book.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default App;
