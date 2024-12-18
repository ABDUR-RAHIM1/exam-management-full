"use client";
import { publicCourseGet } from "@/app/constans/constans";
import useClientDataHandler from "@/app/Handler/usersHandler/useClientDataHandler";
import React, { useEffect, useState } from "react";

export default function AddQuestion() {
    const getClientDataHandler = useClientDataHandler();
    const [courseData, setCourseData] = useState(null)

    useEffect(() => {
        const fetchData = async () => {
            const data = await getClientDataHandler(publicCourseGet); 
            setCourseData(data)
        };

        fetchData();
    }, []);

    const [questionData, setQuestionData] = useState({
        questionCategory: "",
        questionTitle: "",
        questionId: "",
        examDate: "",
        examTime: "",
        sl: 1,
        qus: "",
        opt: "",
        ans: ""
    });

    const [data, setData] = useState({ category: "", questions: [] });
    console.log(data)

    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestionData((prev) => ({ ...prev, [name]: value }));
    };

    const handleAddMultipleQuestion = () => {
        const formattedQuestion = {
            ...questionData,
            opt: questionData.opt.split(",").map(option => option.trim())
        };

        setData((prevData) => ({
            ...prevData,
            questions: [...prevData.questions, formattedQuestion],
        }));

        setQuestionData({ sl: questionData.sl + 1, qus: "", opt: "", ans: "" });
    };


   
    const handleSubmitPaper = () => {
        // Submit functionality can be implemented here
        console.log("Final Question Paper:", data);
        alert("Question paper submitted!");
    };

    const [title, setTitle] = useState("")
    useEffect(() => {
        const filterByTitle = courseData?.find(f1 => f1.title.toLocaleLowerCase() === title.toLocaleLowerCase())

        setQuestionData({
            ...questionData,
            questionCategory: filterByTitle?.category,
            questionTitle: filterByTitle?.title,
            questionId: filterByTitle?._id,
        })
    }, [title])
   
    return (
        <div className="w-[80%] mx-auto">
            <div className="p-4 bg-white rounded-md shadow-md my-10">
                <div className="my-3">
                    <h2 className="my-2 font-bold">Question Category</h2>
                    <select onChange={(e) => setTitle(e.target.value)} name="questionTitle" className="input">
                        {courseData && courseData.map((c, index) => (
                            <option key={index} value={c.title}>{c.title}</option>
                        ))}
                    </select>
                </div>

         

                <div className="my-3">
                    <h2 className="my-2 font-bold">Exam Date</h2>
                    <input onChange={handleChange} type="date" name="examDate" value={questionData.examDate} className="input" />
                </div>
                <div className="my-3">
                    <h2 className="my-2 font-bold">Exam Time</h2>
                    <input onChange={handleChange} type="time" name="examTime" value={questionData.examTime} className="input" />
                </div>



            </div>

            <div className="bg-white p-4 rounded-md shadow-md my-6">
                <h2 className="text-2xl font-semibold mb-4">Add a New Question</h2>
                <label className="block mb-3">
                    <span className="text-lg">Question:</span>
                    <input
                        type="text"
                        name="qus"
                        value={questionData.qus}
                        onChange={handleChange}
                        placeholder="Enter the question"
                        className="mt-1 p-2 border rounded w-full"
                    />
                </label>

                <label className="block mb-3">
                    <span className="text-lg">Options (comma-separated):</span>
                    <input
                        type="text"
                        name="opt"
                        value={questionData.opt}
                        onChange={handleChange}
                        placeholder="Option1, Option2, Option3, Option4"
                        className="mt-1 p-2 border rounded w-full"
                    />
                </label>

                <label className="block mb-3">
                    <span className="text-lg">Answer:</span>
                    <input
                        type="text"
                        name="ans"
                        value={questionData.ans}
                        onChange={handleChange}
                        placeholder="Enter the correct answer"
                        className="mt-1 p-2 border rounded w-full"
                    />
                </label>

                <button
                    onClick={handleAddMultipleQuestion}
                    type="button"
                    className="bg-blue-500 text-white font-semibold py-2 rounded mt-4 w-full"
                >
                    Add Question
                </button>
            </div>

            <div className="bg-gray-100 p-6 rounded-md shadow-md mt-10">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                    {data.category || "Question Paper"}
                </h2>
                {data.questions.length > 0 ? (
                    data.questions.map((q, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-lg font-bold mb-2">
                                <span className="mr-2">{q.sl}.</span> {q.qus}
                            </h3>
                            <ul className="ml-5 list-disc font-semibold mb-1">
                                {q.opt.map((o, i) => (
                                    <li key={i}>
                                        <span className="mr-2">{String.fromCharCode(65 + i)}.</span>
                                        {o}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-green-600 font-semibold">
                                <strong>Answer:</strong> {q.ans}
                            </p>
                        </div>
                    ))
                ) : (
                    <p>No questions added yet.</p>
                )}
                <button
                    onClick={handleSubmitPaper}
                    className="bg-green-500 text-white font-semibold py-3 rounded mt-6 w-full"
                >
                    Submit Question Paper
                </button>
            </div>
        </div>
    );
}
