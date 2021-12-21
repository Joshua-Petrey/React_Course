import { useCallback, useState } from "react";

// returns an object
const UseRequest = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  // sneds request and does something with the data
  // dataFn is defined in the compnent that calls UseRequest
  const sendRequest = useCallback( async (requestConfig, dataFn) => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetch(
        requestConfig.url,
        {
          method: requestConfig.method ? requestConfig.method : 'GET',
          body: requestConfig.body ? JSON.stringify(requestConfig.body): null,
          headers: requestConfig.headers ? requestConfig.headers : {},
        }
      );

      if (!response.ok) {
        throw new Error("Request failed!");
      }
      const data = await response.json();
      // do something with data
      dataFn(data)
    } catch (err) {
      setError(err.message || "Something went wrong!");
    }
     setIsLoading(false);
  }, []);


 return {
   isLoading: isLoading,
   error: error,
   sendRequest: sendRequest
 }
}

export default UseRequest