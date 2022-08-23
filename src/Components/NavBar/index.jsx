import SearchBar from "./../SearchBar/index";

const NavBar = () => {
  return (
    <>
      <nav className="bg-white border-gray-200 mt-4">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl px-5 md:px-6 py-3.5">
          <a href="https://flowbite.com" className="flex items-center">
            <span className="self-center text-xl font-semibold whitespace-nowrap text-black">
              Booksy
            </span>
          </a>
          <div className="w-2/4">
            <SearchBar />
          </div>
          <div className="flex items-center">
            <button className="mx-2 text-sm font-medium text-grey-600 dark:text-grey-500 hover:underline">
              <svg
                className=""
                title="Like Airbrake SVG File"
                width="21"
                height="21"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#8899a4"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
              </svg>
            </button>
            <span className="mx-2 pb-0.5 px-2 rounded-full text-white bg-violet-900">
              0
            </span>
            <button className="mx-2 text-sm font-medium text-grey-400 dark:text-grey-400 hover:underline">
              EN
            </button>
          </div>
        </div>
      </nav>
      <nav className="bg-gray-50 dark:bg-white">
        <div className="py-3 px-4 mx-auto max-w-screen-xl md:px-6">
          <div className="flex items-center justify-center">
            <ul className="flex flex-row mt-0 mr-6 space-x-8 text-sm font-medium">
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 dark:text-white hover:text-violet-900"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 dark:text-white hover:text-violet-900"
                >
                  Company
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 dark:text-white hover:text-violet-900"
                >
                  Team
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="dark:text-gray-400 dark:text-white hover:text-violet-900"
                >
                  Features
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
