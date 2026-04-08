import { useCallback, useEffect, useState } from "react";

const useAsync = (asyncFunction, immediate = true) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState("");

  const execute = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await asyncFunction();
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute().catch(() => null);
    }
  }, [execute, immediate]);

  return {
    data,
    loading,
    error,
    execute,
    setData
  };
};

export default useAsync;
