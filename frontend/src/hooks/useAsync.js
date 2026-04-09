import { useCallback, useEffect, useRef, useState } from "react";

const useAsync = (asyncFunction, immediate = true, dependencies = []) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(immediate);
  const [error, setError] = useState("");
  const asyncFunctionRef = useRef(asyncFunction);

  asyncFunctionRef.current = asyncFunction;

  const execute = useCallback(async () => {
    setLoading(true);
    setError("");

    try {
      const response = await asyncFunctionRef.current();
      setData(response.data);
      return response.data;
    } catch (err) {
      setError(err.response?.data?.message || "Something went wrong");
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (immediate) {
      execute().catch(() => null);
    }
  }, [execute, immediate, ...dependencies]);

  return {
    data,
    loading,
    error,
    execute,
    setData
  };
};

export default useAsync;
