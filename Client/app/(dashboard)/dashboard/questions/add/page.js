"use client";
import { postDataHandler } from "@/app/actions/users/postData";
import { publicCourseGet, questionAdd } from "@/app/constans/constans";
import { contextApi } from "@/app/contextApi/Context";
import useClientDataHandler from "@/app/Handler/usersHandler/useClientDataHandler";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AddQuestion() {
    const getClientDataHandler = useClientDataHandler();
    const [title, setTitle] = useState(""); // filter title from backend
    const [courseData, setCourseData] = useState(null);
    const [loading, setLoading] = useState(false)
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
    const [questions, setQuestions] = useState([]); // State to store all questions
    // const { manageData } = useContext(contextApi)

    // const isUpdated = manageData && Object.keys(manageData).length > 0;
    // console.log(isUpdated)

    // // / set Editable data in  form state
    // useEffect(() => {
    //     if (isUpdated) {
    //         setQuestionData(manageData)
    //     }
    // }, [])

    useEffect(() => {
        const fetchData = async () => {
            const data = await getClientDataHandler(publicCourseGet);
            setCourseData(data);
        };

        fetchData();
    }, []);


    const handleChange = (e) => {
        const { name, value } = e.target;
        setQuestionData({ ...questionData, [name]: value });
    };

    const handleAddMultipleQuestion = () => {
        const optionsArray = questionData.opt.split(",").map(opt => opt.trim());
        const newQuestion = {
            ...questionData,
            sl: questions.length + 1,
            opt: optionsArray
        };
        setQuestions([...questions, newQuestion]);
        setQuestionData({ ...questionData, qus: "", opt: "", ans: "" }); // Reset question inputs
    };

    const handleSubmitPaper = async () => {
        setLoading(true)
        try {
            const formData = {
                ...questionData,
                questions,
            };
            const { status, result } = await postDataHandler(formData, "POST", questionAdd)

            if (status === 201) {
                toast.success(result.message)
            } else if (status !== 200 || status !== 201) {
                toast.error(result.message)
            }

        } catch (error) {
            console.log(error)
            toast.error("Added Failed!")
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        const filterByTitle = courseData?.find(
            (f1) => f1.title.toLocaleLowerCase() === title.toLocaleLowerCase()
        );

        setQuestionData({
            ...questionData,
            questionCategory: filterByTitle?.category,
            questionTitle: filterByTitle?.title,
            questionId: filterByTitle?._id,
        });
    }, [title]);

    return (
        <div className="w-[80%] mx-auto">
            <div className="p-4 bg-white rounded-md shadow-md my-10">
                <div className="my-3">
                    <h2 className="my-2 font-bold">Question Category</h2>
                    <select
                        onChange={(e) => setTitle(e.target.value)}
                        name="questionTitle"
                        required
                        className="input"
                    >
                        {courseData &&
                            courseData.map((c, index) => (
                                <option key={index} value={c.title}>
                                    {c.title}
                                </option>
                            ))}
                    </select>
                </div>

                <div className="my-3">
                    <h2 className="my-2 font-bold">Exam Date</h2>
                    <input
                        onChange={handleChange}
                        type="date"
                        name="examDate"
                        value={questionData.examDate}
                        required
                        className="input"
                    />
                </div>
                <div className="my-3">
                    <h2 className="my-2 font-bold">Exam Time</h2>
                    <input
                        onChange={handleChange}
                        type="time"
                        name="examTime"
                        value={questionData.examTime}
                        required
                        className="input"
                    />
                </div>
            </div>

            {/* Add multiple questions */}
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
                        required
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
                        required
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
                        required
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

            {/* Preview Section */}
            <div className="bg-gray-100 p-6 rounded-md shadow-md mt-10">
                {/* Category and Title */}
                <h2 className="text-xl font-semibold text-gray-700 mb-4">
                    {questionData.questionCategory || "Category"} Exam of {questionData.questionTitle || "Title"} - {questions?.length || 0} Questions
                </h2>

                <div className="flex justify-between items-center mb-4">
                    <div className="text-lg font-medium text-gray-600">
                        <span className="font-bold">Date: </span>
                        {questionData.examDate || "No Date Available"}
                    </div>
                    <div className="text-lg font-medium text-gray-600">
                        <span className="font-bold">Time: </span>
                        {questionData.examTime || "No Time Available"}
                    </div>
                </div>
                {questions.length > 0 ? (
                    questions.map((q, index) => (
                        <div key={index} className="mb-6">
                            <h3 className="text-lg font-bold mb-2">
                                <span className="mr-2">{q.sl}.</span> {q.qus}
                            </h3>
                            <ul className="ml-5 list-disc font-semibold mb-1">
                                {q.opt.map((o, i) => (
                                    <li key={i}>
                                        <span className="mr-2">
                                            {String.fromCharCode(65 + i)}.
                                        </span>
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
                    {
                        loading ? "Waiting..." : "  Submit Question Paper"
                    }
                </button>
            </div>
        </div>
    );
}
