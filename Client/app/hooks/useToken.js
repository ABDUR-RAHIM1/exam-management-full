// hooks/useToken.js
import { useState, useEffect } from 'react';
import Cookies from 'js-cookie';

export const useToken = () => {
    const [token, setToken] = useState(null);

    useEffect(() => { 
        const token = Cookies.get('userToken');
        setToken(token);
    }, []);  

    return token;
};
