import { API_URL } from "@/app/constans/constans";
import userToken from "@/app/actions/users/getToken";

export const getDataHandler = async (endpoint) => {
    const token = userToken();

    if (!token) {
        console.error("No token available"); 
    }

    try {
        const API = `${API_URL + endpoint}`;
        const response = await fetch(API, {
            method: "GET",
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        const result = await response.json();

        return { status: response.status, result }; 

    } catch (error) {
        console.error("Fetch Error: ", error);
        return { response: null, result: { error: "An error occurred while fetching data" } };
    }
};
