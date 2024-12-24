"use server"
import userToken from "@/app/actions/users/getToken";
import { API_URL } from "@/app/constans/constans";

export const postDataHandler = async (formData, method, endpoint) => {
    const token = userToken();
    try {
        const response = await fetch(API_URL + endpoint, {
            method: method,
            headers: {
                "Content-type": "application/json",
                "Authorization": `Bearer ${token}`
            },
            body: JSON.stringify(formData)
        });

        const result = await response.json(); 
        return { result, status: response.status }

    } catch (error) {
        console.log(error)
    }
}