import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [sourceData, setSourceData] = useState(null);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSourceData(data.results);
        console.log(sourceData);
        setTotalPages(Math.ceil(data.count / data.results.length));
        console.log(totalPages);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  const refetch = () => {
    setLoading(true);
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setSourceData(data.results);
        console.log(sourceData);
      })
      .catch((err) => {
        setError(err);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  return { sourceData, totalPages, loading, error, refetch };
};

export default useFetch;
