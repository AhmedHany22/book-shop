import "./hero.styles.css";

const Hero = () => {
  return (
    <main className="mt-4 mx-auto w-5/6 py-4 sm:px-6 lg:px-5 myColor rounded-lg">
      <div className="text-center md:text-left inline-block w-1/2">
        <h1 className="text-5xl tracking-tight font-bold text-gray-900 sm:text-4xl sm:tracking-tight md:text-5xl md:tracking-tight">
          <span className="block xl:inline text-violet-900">
            Build your library
          </span>
        </h1>
        <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
          Buy two selected books and get
          <br />
          one for free
        </p>

        <div className="mt-5 sm:mt-8 sm:flex justify-center md:justify-start">
          <div className="rounded-md shadow sm:w-2/6 sm:mx-auto md:w-2/6 lg:w-2/6 md:mx-0">
            <a className="flex items-center justify-center px-4 py-1 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-2 md:text-lg md:px-4">
              View all
            </a>
          </div>
        </div>
      </div>
      <div className="flex-initial inline-block w-1/2">
        <img className="w-4/4" src="/banner.svg" alt="" />
      </div>
    </main>
  );
};

export default Hero;
