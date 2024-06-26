import {useState, useEffect} from 'react';

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const abortCont = new AbortController();

        // Fetch the data
        fetch(url, { signal: abortCont.signal })
            .then((res) => {
                if (!res.ok) {
                    throw Error('Could not fetch data for questions');
                }
                // console.log(res.json());
                return res.json();
            })
            .then((data) => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    console.log(err.message);
                    setError(err.message);
                    setIsPending(false);
                }
            })


            return () => abortCont.abort();
    }, [url]);

    return { data, isPending, error };
}

export default useFetch;