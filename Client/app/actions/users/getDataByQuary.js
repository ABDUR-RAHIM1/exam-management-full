import { API_URL } from "@/app/constans/constans";

export const getDataByQuery = async (category) => {
    try {
        const res = await fetch(`${API_URL}/admin/course/category/?item=${category}`);
        const result = await res.json();

        return { status: res.status, result }

    } catch (error) {
        console.log(error)
    }
}