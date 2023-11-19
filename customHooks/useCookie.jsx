import { useState } from 'react';

const useCookies = () => {
    const getAllCookies = () => {
        const cookies = document.cookie.split(';').map((cookie) => cookie.trim());
        const cookieMap = {};
        cookies.forEach((cookie) => {
            const [name, value] = cookie.split('=');
            cookieMap[name] = decodeURIComponent(value);
        });
        return cookieMap;
    };

    const getCookie = (name) => {
        const cookies = getAllCookies();
        return cookies[name];
    };

    const setCookie = (name, value, options = {}) => {
        const { expires, path, domain, secure } = options;
        let cookieString = `${encodeURIComponent(name)}=${encodeURIComponent(value)}`;

        if (expires) {
            const expirationDate = new Date(expires).toUTCString();
            cookieString += `; expires=${expirationDate}`;
        }

        if (path) {
            cookieString += `; path=${path}`;
        }

        if (domain) {
            cookieString += `; domain=${domain}`;
        }

        if (secure) {
            cookieString += '; secure';
        }

        document.cookie = cookieString;
    };

    const removeCookie = (name) => {
        document.cookie = `${encodeURIComponent(name)}=; expires=Thu, 01 Jan 1970 00:00:00 GMT`;
    };

    const updateCookie = (name, value, options = {}) => {
        if (getCookie(name) !== undefined) {
            removeCookie(name);
        }
        setCookie(name, value, options);
    };

    return {
        getCookie,
        setCookie,
        removeCookie,
        updateCookie,
    };
};

export default useCookies;
