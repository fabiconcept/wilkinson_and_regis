"use client"
import { useState, useEffect } from 'react';

const useDebounce = (value, delay) => {
    const [debouncedValue, setDebouncedValue] = useState(value);

    useEffect(() => {
        const debounceTimer = setTimeout(() => {
            setDebouncedValue(value);
        }, delay);

        return () => {
            clearTimeout(debounceTimer);
        };
    }, [value, delay]);

    return debouncedValue;
}

export default useDebounce;