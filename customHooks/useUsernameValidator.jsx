"use client"
import { useEffect, useState } from 'react';
import useSanitize from './useSanitize';

export default function useNameValidator () {
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(true);
    const [sanitizedName, setSanitizedName] = useSanitize();

    useEffect(() => {
        setSanitizedName(name);
    }, [name]);
    
    const validateName = (inputName) => {
        const nameRegex = /^[a-zA-Z0-9_]+$/;
        const isValidName = nameRegex.test(inputName);
        setIsValid(isValidName);
        setName(inputName);
    };

    return [name, isValid, validateName];
}
