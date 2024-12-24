
import { getDataHandler } from "@/app/actions/users/getData";
import { postDataHandler } from "@/app/actions/users/postData";
import React from "react";

/// exam page -> shedule by shedule 
async function UpcomingExamPage() {

    // useEffect(() => {
    //     fetch("http://localhost:8500/api/user/purchase/me")
    //         .then((res) => res.json())
    //         .then((data) => {
    //             console.log(data)
    //             setFormData(data);
    //         })
    //         .catch((err) => console.error("Error fetching questions:", err));
    // }, []);




    // if (formData === null) {
    //     return <p className="text-center mt-4">Loading questions...</p>;
    // }


    const { status, result } = await getDataHandler("/user/purchase/me")
    // console.log(status , result)

    result && result.map((rs, i) => (
        console.log(rs.course)
    ))



    return (
        <div>
            courlist
        </div>
    );

}

export default UpcomingExamPage;
