import { useState, useEffect } from 'react';

export const useInitial = (asyncFunction) => {
    const [status, setStatus] = useState({
        loading: false,
        error: false,
    });

    useEffect(() => {
        const fetchData = async () => {
            setStatus({ loading: true, error: false }); // Start loading
            try {
                await asyncFunction(); // Call the asynchronous function passed as an argument
                setStatus({ loading: false, error: false }); // Successful completion
            } catch (err) {
                console.error(err); // Log the error for debugging
                setStatus({ loading: false, error: true }); // Handle error
            }
        };

        fetchData();
    }, [asyncFunction]); // Dependency array: run effect when asyncFunction changes

    return status; // Return the status
};
