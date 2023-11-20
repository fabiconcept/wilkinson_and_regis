"use client"
import useDebounce from "@/customHooks/useDebounce";
import useEmailValidator from "@/customHooks/useEmailValidator";
import useSanitize from "@/customHooks/useSanitize";
import useUsernameValidator from "@/customHooks/useUsernameValidator";
import { useEffect, useMemo, useState } from "react";
import { FaArrowUp, FaEnvelope, FaUser, FaUserAlt } from "react-icons/fa";
import emailjs from 'emailjs-com';
import toast from "react-hot-toast";

export default function ContactForm() {
    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [isLoading, setIsLoading] = useState(false);
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

    const handleReset = () => {
        setHasError({
            email: null,
            firstName: null,
            lastName: null,
        });

        setEmail("");
        setFirstName("");
        setLastName("");
        setMessage("");
    }

    const handleSubmit = async (e) => {
        const userID = process.env.NEXT_PUBLIC_VERCEL_USER_ID;
        const serviceID = process.env.NEXT_PUBLIC_VERCEL_SERVICE_ID;
        const serviceConatctID = process.env.NEXT_PUBLIC_VERCEL_CONTACT_SERVICE_ID;
        try {
            await emailjs.sendForm(serviceID, serviceConatctID, e.target, userID)
            .then(()=>{
                e.target.reset();
                handleReset();
            });
        } catch (error) {
            console.log(error);
            throw new Error(error);
        }finally {
            setIsLoading(false);
        }
    }

    const toastWatchSubmit = (e) =>{
        if (isLoading) {
            return;
        }
        e.preventDefault();
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

        setIsLoading(true);

        const promise = handleSubmit(e);
        toast.promise(promise, {
            error: "An error occurred",
            success: "We've received your message.",
            loading: "Sending message..."
        }, {
            style: {
                border: '1px solid #ee9003',
                padding: '16px',
                color: '#141414',
              },
              iconTheme: {
                primary: '#ee9003',
                secondary: '#141414',
            }
        });
    }
    return (
        <form method="POST" action={""} onSubmit={toastWatchSubmit} className="sm:w-[25rem] w-[21rem] bg-black/70 backdrop-blur-[3px] min-h-fit sm:rounded-3xl sm:px-10 px-5 py-12 flex flex-col gap-8 text-white">
            <div className={`group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit ${testEmail}`}>
                <span>
                    <FaEnvelope className="text-sm" />
                </span>
                <input
                    type="email"
                    maxLength={30}
                    name="from_email"
                    placeholder=" "
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="bg-transparent outline-none border-none peer flex-1"
                    required
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
                        maxLength={15}
                        name="fname"
                        value={firstName}
                        placeholder=" "
                        className="bg-transparent outline-none border-none peer flex-1"
                        required
                    />
                    <span className="whitespace-nowrap text-sm absolute left-6 top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">First name <span className="absolute ml-2 -top-1 text-xl text-red-300">*</span></span>
                </div>
                <div className={`group relative flex items-center border-b border-white/25 focus-within:border-white gap-2 h-fit ${testLastName}`}>
                    <span>
                        <FaUser className="text-sm" />
                    </span>
                    <input
                        type="text"
                        value={lastName}
                        name="lname"
                        placeholder=" "
                        maxLength={15}
                        onChange={(e) => setLastName(e.target.value)}
                        className="bg-transparent outline-none border-none peer flex-1"
                        required
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
                    name="message"
                    value={message}
                    onChange={(e)=>setMessage(e.target.value)}
                ></textarea>
                <span className="whitespace-nowrap text-sm absolute top-[-1.25rem] opacity-50 peer-placeholder-shown:text-sm peer-placeholder-shown:top-1 pointer-events-none">Message</span>
            </div>
            <button type="submit" className="p-3 px-4 bg-primary-heavy text-sm rounded-lg cursor-pointer active:scale-90 w-fit flex items-center">
                {!isLoading && <span className="flex gap-2 items-center">Submit <FaArrowUp className="rotate-45" /></span>}
                {isLoading && <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,19a8,8,0,1,1,8-8A8,8,0,0,1,12,20Z"
                        opacity=".25"
                    />
                    <path
                        d="M12,4a8,8,0,0,1,7.89,6.7A1.53,1.53,0,0,0,21.38,12h0a1.5,1.5,0,0,0,1.48-1.75,11,11,0,0,0-21.72,0A1.5,1.5,0,0,0,2.62,12h0a1.53,1.53,0,0,0,1.49-1.3A8,8,0,0,1,12,4Z"
                        className="spinner_z9k8"
                    />
                </svg>}
            </button>
        </form>
    )
}