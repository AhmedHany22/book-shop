import { useEffect, useState } from "react";

const useFetch = (baseUrl) => {
  const [sourceData, setSourceData] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    fetch(`${baseUrl}${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setTotalPages(Math.ceil(data.count / data.results.length));
      });
  }, []);

  useEffect(() => {
    setLoading(true);
    fetch(`${baseUrl}${currentPage}`)
      .then((response) => response.json())
      .then((data) => {
        setSourceData(data.results);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [currentPage]);

  const changePage = (n) => {
    setCurrentPage(n);
  };

  return { sourceData, totalPages, currentPage, loading, error, changePage };
};

export default useFetch;
