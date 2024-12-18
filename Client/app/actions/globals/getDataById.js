import { API_URL } from "@/app/constans/constans"

export const getDataById = async (endpoint) => {
    try {
        const res = await fetch(API_URL + endpoint);
        const result = await res.json()

        return { status: res.status, result }


    } catch (error) {
        console.log(error)
    }
}