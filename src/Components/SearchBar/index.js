const SearchBar = () => {
  return (
    <form>
      <div className="relative">
        <input
          type="search"
          id="default-search"
          className="block py-2 px-4 pr-14 w-full text-sm text-dark-200 bg-gray-200 rounded-lg border border-gray-200 focus:ring-gray-600 focus:border-gray-200 dark:bg-gray-100 dark:border-gray-100 dark:placeholder-gray-400 dark:text-dark-600 dark:focus:ring-gray-100 dark:focus:border-gray-100"
          placeholder="Search by author, title, name"
          required
        />
        <button
          type="submit"
          className="text-white absolute right-2 bottom-2 focus:ring-4 focus:outline-none focus:ring-blue-300 rounded-lg text-sm p-0 dark:focus:ring-gray-700"
        >
          <svg
            aria-hidden="true"
            className="w-5 h-5 text-gray-700 dark:text-gray-400 dark:hover:text-violet-900"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            ></path>
          </svg>
        </button>
      </div>
    </form>
  );
};

export default SearchBar;
