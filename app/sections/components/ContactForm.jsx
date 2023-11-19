"use client"
import useDebounce from "@/customHooks/useDebounce";
import useEmailValidator from "@/customHooks/useEmailValidator";
import useSanitize from "@/customHooks/useSanitize";
import useUsernameValidator from "@/customHooks/useUsernameValidator";
import { isValidElement, useEffect, useMemo, useState } from "react";
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
        setValidateFirstName(firstName);
        setValidateLastName(lastName);
    }, [emailDebounce, lastNameDebounce, firstNameDebounce]);

    useEffect(() => {
        if (String(validateEmail).length > 0) {
            if (isEmailValid) {
                setHasError({ ...hasError, email: false });
                return;
            }
            setHasError({ ...hasError, email: true });
        } else {
            setHasError({ ...hasError, email: null });
        }
    }, [validateEmail]);

    useEffect(() => {
        if (String(validateFirstName).length > 0) {
            if (isFirstNameValid) {
                setHasError({ ...hasError, firstName: false });
                return;
            }
            setHasError({ ...hasError, firstName: true });
        } else {
            setHasError({ ...hasError, firstName: null });
        }
    }, [validateFirstName]);

    useEffect(() => {
        if (String(validateLastName).length > 0) {
            if (isLastNameValid) {
                setHasError({ ...hasError, lastName: false });
                return;
            }
            setHasError({ ...hasError, lastName: true });
        } else {
            setHasError({ ...hasError, lastName: null });
        }
    }, [validateLastName]);

    useEffect(() => {
        setMessageText(message);
    }, [messageDebounce]);


    const testEmail = useMemo(() => {
        switch (hasError.email) {
            case true:
                return "text-red-500";
            case false:
                return "text-green-300";

            default:
                return "text-white";
        }
    }, [hasError.email]);

    const testLastName = useMemo(() => {
        switch (hasError.lastName) {
            case false:
                return "text-green-300";
            case true:
                return "text-red-500";

            default:
                return "text-white";
        }
    }, [hasError.lastName]);

    const testFirstName = useMemo(() => {
        switch (String(hasError.firstName)) {
            case "false":
                return "text-green-300";
            case "true":
                return "text-red-500";

            default:
                return "text-white";
        }
    }, [hasError.firstName]);

    const handleSubmit = () => {
        let containsError = false;
        const checkForErrors = Object.entries(hasError);
        const updatedObject = {};
        checkForErrors.forEach(([key, value]) => {
            if (value === null || value == true) {
                containsError = true;
                updatedObject[key] = true;
                return;
            }
            updatedObject[key] = false;
        });
        setHasError(updatedObject);


        if (containsError) {
            return;
        }

        const submitData = {
            email: validateEmail,
            firstName: validateFirstName,
            lastName: validateLastName,
            message: sanitizedMessage
        }

        console.log(submitData);
    }

    return (
        <section className="sm:w-[25rem] w-[21rem] bg-black/70 backdrop-blur-[3px] min-h-fit sm:rounded-3xl sm:px-10 px-5 py-12 flex flex-col gap-8 text-white">
            <div className={`group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit ${testEmail}`}>
                <span>
                    <FaEnvelope className="text-sm" />
                </span>
                <input
                    type="email"
                    placeholder=" "
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent outline-none border-none peer flex-1"
                />
                <span className={`whitespace-nowrap text-sm absolute left-6 top-[-1.25rem] peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none`}>Email address<span className="absolute ml-2 -top-1 text-xl text-red-300">*</span> </span>
            </div>
            <div className="grid grid-cols-2 gap-6">
                <div className={`group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit ${testFirstName}`}>
                    <span>
                        <FaUserAlt className="text-sm" />
                    </span>
                    <input
                        type="text"
                        onChange={(e) => setFirstName(e.target.value)}
                        placeholder=" "
                        className="bg-transparent outline-none border-none peer flex-1"
                    />
                    <span className="whitespace-nowrap text-sm absolute left-6 top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">First name <span className="absolute ml-2 -top-1 text-xl text-red-300">*</span></span>
                </div>
                <div className={`group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit ${testLastName}`}>
                    <span>
                        <FaUser className="text-sm" />
                    </span>
                    <input
                        type="email"
                        placeholder=" "
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-transparent outline-none border-none peer flex-1"
                    />
                    <span className="whitespace-nowrap text-sm absolute left-6 top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">Last name <span className="absolute ml-2 -top-1 text-xl text-red-300">*</span></span>
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
            <div onClick={()=>handleSubmit()} className="p-3 px-4 bg-primary-heavy text-sm rounded-lg cursor-pointer active:scale-90 w-fit flex gap-2 items-center">
                Submit <FaArrowUp className="rotate-45" />
            </div>
        </section>
    )
}