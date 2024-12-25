import { API_URL } from "@/app/constans/constans"

export const getDataById = async (endpoint) => {
    try {
        const res = await fetch(API_URL + endpoint, {
            cache: "no-store"
        });
        const result = await res.json()

        return { status: res.status, result }


    } catch (error) {
        console.log(error)
    }
}