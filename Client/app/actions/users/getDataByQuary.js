
export const getDataByQuery = async (category) => {
    try {
        const res = await fetch(`http://localhost:8500/api/admin/course/category/?item=${category}`);
        const result = await res.json();

        return { status: res.status, result }
        
    } catch (error) {
        console.log(error)
    }
}