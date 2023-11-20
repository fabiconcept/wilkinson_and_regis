"use client"

import { useContext, useEffect, useState } from "react"
import { FormModalContext } from "../../components/FormModal"
import useDebounce from "@/customHooks/useDebounce";
import useEmailValidator from "@/customHooks/useEmailValidator";
import useNameValidator from "@/customHooks/useUsernameValidator";

export default function Step03() {
    const { 
        currentPage, 
        generalInformation, 
        setGeneralInformation, 
        generalInformationError, 
        setGeneralInformationError 
    } = useContext(FormModalContext);

    const [email, setEmail] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const emailDebounce = useDebounce(email, 500);
    const firstNameDebounce = useDebounce(firstName, 500);
    const lastNameDebounce = useDebounce(lastName, 500);

    const [validEmail, isEmailValid, setEmailInput] = useEmailValidator();
    const [validFirstName, isFirstNameValid, setFirstNameInput] = useNameValidator();
    const [validLastName, isLastNameValid, setLastNameInput] = useNameValidator();

    useEffect(() => {
        setEmailInput(email);
        setFirstNameInput(firstName);
        setLastNameInput(lastName);
    }, [emailDebounce, firstNameDebounce, lastNameDebounce]);

    useEffect(() => {
        const updateEmail = (status) => {
            setGeneralInformationError((prevGeneralInformation) => [
                {
                    ...prevGeneralInformation[0],
                    email: status,
                },
                ...prevGeneralInformation.slice(1),
            ]);
        };
        if (String(validEmail).length < 1) {
            updateEmail(null);
            return;
        }

        if (isEmailValid) {
            updateEmail(false);
            setGeneralInformation({
                ...generalInformation,
                email: validEmail
            });
            return;
        }

        updateEmail(true);
    }, [validEmail]);

    useEffect(() => {
        const updateFirstName = (status) => {
            setGeneralInformationError((prevGeneralInformation) => [
                {
                    ...prevGeneralInformation[0],
                    firstName: status,
                },
                ...prevGeneralInformation.slice(1),
            ]);
        };
        if (String(validFirstName).length < 1) {
            updateFirstName(null);
            return;
        }

        if (isFirstNameValid) {
            updateFirstName(false);
            setGeneralInformation({
                ...generalInformation,
                firstName: validFirstName
            });
            return;
        }

        updateFirstName(true);
    }, [validFirstName]);

    useEffect(() => {
        const updateLastName = (status) => {
            setGeneralInformationError((prevGeneralInformation) => [
                {
                    ...prevGeneralInformation[0],
                    lastName: status,
                },
                ...prevGeneralInformation.slice(1),
            ]);
        };
        if (String(validLastName).length < 1) {
            updateLastName(null);
            return;
        }

        if (isLastNameValid) {
            updateLastName(false);
            setGeneralInformation({
                ...generalInformation,
                lastName: validLastName
            });
            return;
        }

        updateLastName(true);
    }, [validLastName]);

    return (
        <section className={`page no-shrink min-w-full flex flex-col ${currentPage === 0 ? "in" : "out"}`}>
            <div className="flex flex-col gap-2">
                <span>First name <span className="text-red-500">*</span></span>
                <input 
                    type="text" 
                    onChange={(e)=>setFirstName(e.target.value)}
                    max={40}
                    name="fname"
                    maxLength={40}
                    value={firstName}
                    required
                    className={`px-3 py-2 w-full  outline-none bg-transparent ${generalInformationError[0].firstName !== null ? generalInformationError[0].firstName ? "border-2 border-red-500" : "border border-green-500" : "border border-black"}`}
                />
                <span className="text-right">{String(firstName).length}/40</span>
            </div>
            <div className="flex flex-col gap-2">
                <span>Last name <span className="text-red-500">*</span></span>
                <input 
                    onChange={(e)=>setLastName(e.target.value)}
                    max={40}
                    maxLength={40}
                    name="lname"
                    value={lastName}
                    required
                    type="text" 
                    className={`px-3 py-2 w-full  outline-none bg-transparent ${generalInformationError[0].lastName !== null ? generalInformationError[0].lastName ? "border-2 border-red-500" : "border border-green-500" : "border border-black"}`}
                />
                <span className="text-right">{String(lastName).length}/40</span>
            </div>
            <div className="flex flex-col gap-2">
                <span>Email <span className="text-red-500">*</span></span>
                <input 
                    onChange={(e)=>setEmail(e.target.value)}
                    value={email}
                    required
                    type="email" 
                    name="from_email"
                    className={`px-3 py-2 w-full  outline-none bg-transparent ${generalInformationError[0].email !== null ? generalInformationError[0].email ? "border-2 border-red-500" : "border border-green-500" : "border border-black"}`}
                />
            </div>
        </section>
    )
}
