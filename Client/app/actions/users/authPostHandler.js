"use server"

import { API_URL } from "@/app/constans/constans";


export const AuthPostHandler = async (data, endpoint) => {
    try {
        const res = await fetch(`${API_URL + endpoint}`, {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(data)
        });
        const result = await res.json();
        return { result, status: res.status }

    } catch (error) {
        console.log(error)
    }
}