import { useState, useCallback } from "react";

function useFetch(url) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const fetchData = useCallback(async (options = {}) => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch(url, options);
            if (!response.ok) {
                throw new Error(response.statusText || "Failed to fetch data!");
            }
            const result = await response.json();
            setData(result);
            return result;
        } catch (error) {
            setError(error.message);
            throw error;
        } finally {
            setLoading(false);
        }
    }, [url]);

    return { data, loading, error, fetchData };
}

export default useFetch;