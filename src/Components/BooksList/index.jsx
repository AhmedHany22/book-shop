const BooksList = ({ list }) => {
  const imgUrl = "image/jpeg";
  return (
    <div className="min-w-0 flex-1 grid grid-cols-5 2xl:grid-cols-10 gap-x-4 gap-y-3 2xl:gap-x-2 mb-6">
      {list?.map((book) => (
        <div className="space-y-1.5 mt-4 " key={book.id}>
          <div className="w-full ">
            <img
              className="w-full hover:scale-110 h-52"
              src={
                book.formats[imgUrl]
                  ? book.formats[imgUrl]
                  : "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png"
              }
              alt=""
            />
          </div>
          <div className="flex-col px-0.5 md:flex md:justify-between md:space-x-2 2xl:space-x-0 2xl:block">
            <div className="w-6 text-sm whitespace-nowrap text-slate-900 2xl:w-full dark:text-black font-semibold">
              {book.title.length > 15
                ? book.title.slice(0, 15).concat("...")
                : book.title}
            </div>
            <div className="text-violet-500 text-sm font-mono uppercase dark:text-slate-400 ">
              {book.authors[0]
                ? book.authors[0].name.length > 12
                  ? book.authors[0].name.slice(0, 12).concat("...")
                  : book.authors[0].name
                : "Unknown"}
            </div>
            <div className="text-violet-500 text-sm font-mono dark:text-slate-400">
              Downloaded : {book.download_count}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BooksList;
