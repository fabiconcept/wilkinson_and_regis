"use client"

const { useState } = require("react");

export default function useEmailValidator() {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (inputEmail) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailRegex.test(inputEmail);

        const sanitizedEmail = sanitizeInput(inputEmail);

        setEmail(sanitizedEmail);
        setIsValid(isValidEmail);
    };
    const sanitizeInput = (input) => {
        return input.replace(/[<>\&"']/g, '');
    };

    return [email, isValid, validateEmail];
}
