"use client"
import { useState } from 'react';
import useSanitize from './useSanitize';

export default function useNameValidator () {
    const [name, setName] = useState('');
    const [isValid, setIsValid] = useState(true);
    const sanitizedName = useSanitize(name);

    const validateName = (inputName) => {
        const nameRegex = /^[a-zA-Z0-9_]+$/;
        const isValidName = nameRegex.test(inputName);
        setName(sanitizedName);
        setIsValid(isValidName);
    };

    return [name, isValid, validateName];
}
