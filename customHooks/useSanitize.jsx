"use client"

import { useState } from "react";

const useSanitize = () => {
    const [cleanText, setCleanText] = useState("");
        function setMessage (input){
            setCleanText(input.replace(/[<>\&"']/g, ''));

        }
        return [cleanText, setMessage];
};

export default useSanitize;