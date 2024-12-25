import { API_URL } from '@/app/constans/constans';

export default function useClientDataHandler() {
    const getClientDataHandler = async (endpoint) => {
        try {
            const response = await fetch(`${API_URL}${endpoint}`);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const result = await response.json(); 
            return result;
        } catch (error) {
            console.error("Error in useClientDataHandler:", error);
            return null;  
        }
    };

    return getClientDataHandler;
}
