"use client"
import useDebounce from "@/customHooks/useDebounce";
import useEmailValidator from "@/customHooks/useEmailValidator";
import useSanitize from "@/customHooks/useSanitize";
import useUsernameValidator from "@/customHooks/useUsernameValidator";
import { isValidElement, useEffect, useState } from "react";
import { FaArrowUp, FaEnvelope, FaUser, FaUserAlt } from "react-icons/fa";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [message, setMessage] = useState("");

    const [hasError, setHasError] = useState({
        email: null,
        firstName: null,
        lastName: null,
    })

    const emailDebounce = useDebounce(email, 500);
    const firstNameDebounce = useDebounce(firstName, 500);
    const lastNameDebounce = useDebounce(lastName, 500);
    const messageDebounce = useDebounce(message, 500);

    const [validateFirstName, isFirstNameValid, setValidateFirstName] = useUsernameValidator();
    const [validateLastName, isLastNameValid, setValidateLastName] = useUsernameValidator();
    const [validateEmail, isEmailValid, setValidateEmail] = useEmailValidator();

    const [sanitizedMessage, setMessageText] = useSanitize();

    useEffect(() => {
        setValidateEmail(email);
        if (validateEmail.length > 0) {
            if (isEmailValid) {
                setHasError({ ...hasError, email: false });
                return;
            }
            setHasError({ ...hasError, email: true });
        }
        console.log(validateEmail);
    }, [emailDebounce]);
    
    useEffect(() => {
        setValidateFirstName(firstName);
        if (validateFirstName.length > 0) {
            if (isFirstNameValid) {
                setHasError({ ...hasError, firstName: false });
                return;
            }
            setHasError({ ...hasError, firstName: true });
        }
        console.log(validateFirstName);
    }, [firstNameDebounce]);
    
    useEffect(() => {
        setValidateLastName(lastName);
        if (validateLastName.length > 0) {
            if (isLastNameValid) {
                setHasError({ ...hasError, lastName: false });
                return;
            }
            setHasError({ ...hasError, lastName: true });
        }
        console.log(validateLastName);
    }, [lastNameDebounce]);

    useEffect(() => {
        setMessageText(message);
    }, [messageDebounce]);

    return (
        <section className="sm:w-[25rem] w-[21rem] bg-black/70 backdrop-blur-[3px] min-h-fit sm:rounded-3xl sm:px-10 px-5 py-12 flex flex-col gap-8 text-white">
            <div className={`group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit ${hasError.email !== null ? (!hasError.email ? "text-red-500" : "text-green-300") : 'text-white'}`}>
                <span>
                    <FaEnvelope className="text-sm" />
                </span>
                <input
                    type="email"
                    placeholder=" "
                    onChange={(e)=>setEmail(e.target.value)}
                    className="bg-transparent outline-none border-none peer flex-1"
                />
                <span className={`whitespace-nowrap text-sm absolute left-6 top-[-1.25rem] peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none`}>Enter your email </span>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className={`group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit ${hasError.firstName !== null ? (!hasError.firstName ? "text-red-500" : "text-green-300") : 'text-white'}`}>
                    <span>
                        <FaUserAlt className="text-sm" />
                    </span>
                    <input
                        type="text"
                        onChange={(e)=>setFirstName(e.target.value)}
                        placeholder=" "
                        className="bg-transparent outline-none border-none peer flex-1"
                    />
                    <span className="whitespace-nowrap text-sm absolute left-6 top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">First name</span>
                </div>
                <div className={`group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit ${hasError.lastName !== null ? (!hasError.lastName ? "text-red-500" : "text-green-300") : 'text-white'}`}>
                    <span>
                        <FaUser className="text-sm" />
                    </span>
                    <input
                        type="email"
                        placeholder=" "
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-transparent outline-none border-none peer flex-1"
                    />
                    <span className="whitespace-nowrap text-sm absolute left-6 top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">Last name</span>
                </div>
            </div>
            <div className="group relative flex items-start border-b border-white/25 focus-within:border-white gap-2 h-fit mt-14">
                <textarea
                    placeholder=" "
                    className="bg-transparent outline-none border-none peer flex-1"
                    cols="30"
                    rows="1"
                ></textarea>
                <span className="whitespace-nowrap text-sm absolute top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">Message</span>
            </div>
            <div className="p-3 px-4 bg-primary-heavy text-sm rounded-lg cursor-pointer active:scale-90 w-fit flex gap-2 items-center">
                Submit <FaArrowUp className="rotate-45" />
            </div>
        </section>
    )
}