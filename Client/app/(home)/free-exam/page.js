"use client";
import React, { useState, useEffect } from "react";

function ExamPage() {
    const [formData, setFormData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8500/api/admin/question/details/67653344d19f9501c7509101")
            .then((res) => res.json())
            .then((data) => {
                setFormData(data);
            })
            .catch((err) => console.error("Error fetching questions:", err));
    }, []);


    const handleChange = (selectedAns, questionId) => {
        console.log(selectedAns, questionId)
    }



    if (formData === null) {
        return <p className="text-center mt-4">Loading questions...</p>;
    }



    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Question Details Preview
                </h1>
                {/* <div className="border-b-2 pb-4 mb-6">
                    <p className="text-gray-600">
                        <strong>Category:</strong> {questionCategory}
                    </p>
                    <p className="text-gray-600">
                        <strong>Title:</strong> {questionTitle}
                    </p>
                    <p className="text-gray-600">
                        <strong>Exam Date:</strong>{" "}
                        {new Date(examDate).toLocaleDateString("en-US")}
                    </p>
                    <p className="text-gray-600">
                        <strong>Exam Time:</strong> {examTime}
                    </p>
                    <p className="text-gray-600">
                        <strong>Created At:</strong>{" "}
                        {new Date(createdAt).toLocaleString("en-US")}
                    </p>
                </div> */}

                <div className="px-5">
                    {
                        formData !== null &&
                        formData.questions.map((item, index) => (
                            <div key={index} className=" my-4 p-3 bg-gray-100 rounded-md">
                                <h2 className="text-2xl font-bold">{item.questionText}</h2>
                                <div>
                                    {item.options.map((o, index) => (
                                        <div key={index}>
                                            <input
                                                type="radio"
                                                name={item.questionId}
                                                value={o}
                                                id={`${item.questionId}-${index}`}
                                                onChange={(e) => handleChange(e.target.value, item.questionId)}
                                            />
                                            <label htmlFor={`${item.questionId}-${index}`} className="ml-2">
                                                {o}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                        ))
                    }
                </div>



            </div>
        </div>
    );
}

export default ExamPage;
