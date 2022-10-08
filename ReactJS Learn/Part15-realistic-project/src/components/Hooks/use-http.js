import { useState, useEffect, useCallback } from "react";

const useHTTP = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const sendRequest = useCallback(async (actions, applyData) => {
    setIsLoading(true);
    setError(null);
    console.log(actions);
    try {
      const response = await fetch(
        "https://react-learn-749b3-default-rtdb.asia-southeast1.firebasedatabase.app/tasks.json",
        {
          method: actions.method ?? "GET",
          body: actions.data ? JSON.stringify({ text: actions.data }) : null,
          headers: actions.headers,
        }
      );

      if (!response.ok) {
        console.log("error");
        throw new Error("Request failed!");
      }

      const data = await response.json();
      applyData(data);
    } catch (err) {
      console.log(err.message);
      setError(err.message || "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  }, []);

  console.log(" i reach this line");
  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHTTP;
