"use client";
import React, { useEffect, useState } from "react";
import { FaCheck } from "react-icons/fa";
import { MdClose } from "react-icons/md";




// op1 -> protita onchange a PUT API call kore selectedAns : field update kora
// op2 -> question data fetch kore state a rakha abong onchange a question ID diye find/map kore sudhu state er data change kora o onSubmit a puro state PUT/POST kore new result sheet create  submit kora 
export default function Test() {
    const questionPaper = {
        questionCategory: "BCS",
        questionTitle: "BCS 01",
        courseId: "BCS2222",
        examDate: "2024-12-12",
        examTime: "12:35 PM",
        questions: [
            {
                questionId: "1",
                questionText: "What is the capital of France?",
                options: ["Paris", "London", "Rome", "Berlin"],
                answer: "Paris",
                selectedAns: "",
            },
            {
                questionId: "2",
                questionText: "What is the largest planet in our Solar System?",
                options: ["Earth", "Mars", "Jupiter", "Saturn"],
                answer: "Jupiter",
                selectedAns: "",
            },
            {
                questionId: "3",
                questionText: "Who wrote 'Hamlet'?",
                options: ["Charles Dickens", "William Shakespeare", "Mark Twain", "Jane Austen"],
                answer: "William Shakespeare",
                selectedAns: "",
            },
            {
                questionId: "4",
                questionText: "What is the boiling point of water at sea level?",
                options: ["90°C", "100°C", "110°C", "120°C"],
                answer: "100°C",
                selectedAns: "",
            },
            {
                questionId: "5",
                questionText: "What is the smallest prime number?",
                options: ["0", "1", "2", "3"],
                answer: "2",
                selectedAns: "",
            },
        ],
    };

    const [formData, setFormData] = useState(null);

    console.log(formData)
    useEffect(() => {
        setFormData(questionPaper)
    }, [])

    const handleChange = (selectedAns, questionId) => {
        // Update the selectedAns for the specific question
        const updatedQuestions = formData.questions.map((q) =>
            q.questionId === questionId ? { ...q, selectedAns } : q
        );

        // Update formData with the new questions array
        setFormData({ ...formData, questions: updatedQuestions });
    };


    const [resultData, setResultData] = useState(null)
    // Submit the form and send data to the backend
    
    const handleSubmit = async (e) => {
        e.preventDefault();

        // Prepare the result data to send to the server

        const result = formData.questions.map(q => ({
            questionId: q.questionId,
            questionText: q.questionText,
            options: q.options,
            selectedAns: q.selectedAns,
            correctAnswer: q.answer,
            isCorrect: q.selectedAns === q.answer
        }));

        // Calculate right and wrong answers
        const rightAnswers = result.filter(item => item.isCorrect).length;
        const wrongAnswers = result.length - rightAnswers;

        const resultData = {
            questionCategory: formData.questionCategory,
            questionTitle: formData.questionTitle,
            courseId: formData.courseId,
            examDate: formData.examDate,
            examTime: formData.examTime,
            questions: result,// Sending all question data with answers and correctness
            rightAnswers: rightAnswers, // Total correct answers
            wrongAnswers: wrongAnswers // Total wrong answers
        };

        setResultData(resultData)
        console.log(resultData)
        try {
            // setLoading(true);
            // const response = await axios.post('/api/save-result', resultData);
            alert('Results saved successfully!');
        } catch (error) {
            console.error('Error saving result:', error);
            alert('Error saving result');
        } finally {
            // setLoading(false);
        }
    };

    console.log(resultData)

    return (
        <div className="p-20">
            <h1 className="text-2xl font-bold mb-6">{questionPaper.questionTitle}</h1>
            <form onSubmit={handleSubmit}>
                {questionPaper.questions.map((q) => (
                    <div key={q.questionId} className="bg-gray-200 p-3 my-4">
                        <p>
                            <span className="font-bold mx-3">{q.questionId}.</span>
                            {q.questionText}
                        </p>
                        <div>
                            {q.options.map((o, index) => (
                                <div key={index}>
                                    <input
                                        type="radio"
                                        name={q.questionId}
                                        value={o}
                                        id={`${q.questionId}-${index}`}
                                        onChange={(e) => handleChange(e.target.value, q.questionId)}
                                    />
                                    <label htmlFor={`${q.questionId}-${index}`} className="ml-2">
                                        {o}
                                    </label>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
                <button
                    type="submit"
                    className="mt-4 px-6 py-2 bg-blue-500 text-white font-bold rounded"
                >
                    Submit
                </button>
            </form>



            <div className=" my-10"></div>
            <h2 className=" text-3xl font-bold my-3">Preview</h2>

            {resultData !== null &&
                <div>
                    <h3 className="text-2xl font-bold">{resultData.questionCategory} </h3>
                    <h3 className="text-2xl font-bold">{resultData.questionTitle} </h3>
                    <div className=" flex items-center justify-between my-4">
                        <p>{resultData.examDate}</p>
                        <p>{resultData.examTime}</p>
                    </div>
                    <div className=" text-blue-600 font-bold text-2xl my-5 flex items-center justify-between">
                        <p> <span className=" mx-2">Total Q:</span> {resultData.rightAnswers + resultData.wrongAnswers}</p>
                        <p><span className=" mx-2">Right Q:</span>{resultData.rightAnswers}</p>
                        <p><span className=" mx-2">Wrong Q:</span>{resultData.wrongAnswers}</p>
                    </div>

                    <div className=" my-5">
                        {
                            resultData.questions.map((q, i) => (
                                <div key={i} className="bg-gray-200 p-3 my-4 rounded-md">
                                    <h2 className="text-2xl">{q.questionText}</h2>
                                    <ul className=" list-disc list-inside space-y-2 my-5">
                                        {
                                            // q.options.map((o, i2) => (
                                            //     <li key={i2} className={`${o === q.selectedAns ? "text-green-700 font-bold" :"text-black"}`}>{o}</li>
                                            // ))
                                            q.options.map((o, i2) => (
                                                <div key={i2} className=" flex items-center">
                                                    <strong className={`${o === q.selectedAns ?
                                                        q.selectedAns === q.correctAnswer ? "bg-blue-500 px-2 py-1 text-white" :
                                                            "bg-red-500 px-2 py-1 text-white" : ""} ${o === q.correctAnswer ? "bg-blue-500 px-2 py-1 text-white" : ""}`}>
                                                               - {o}
                                                                </strong>
                                                    <span className=" mx-1">
                                                        {o === q.selectedAns ?
                                                            q.selectedAns === q.correctAnswer ? <span className=" text-2xl text-green-500">
                                                                <FaCheck />
                                                            </span>
                                                                :
                                                                <span className=" text-2xl text-red-500">  <MdClose /></span> : ""}
                                                    </span>
                                                </div>
                                            ))
                                        }
                                    </ul>
                                    {/*  description page */}
                                    {/* <div className=" bg-gray-300 p-3 my-2">
                <div> <span className=" font-bold mx-2">Your Ans : </span>
                    <span className={`${q.isCorrect ? "text-green-700" : "text-red-500"}`}>{q.selectedAns}</span>
                </div>
                {!q.isCorrect && <div> <span className=" font-bold mx-2">Correct Ans : </span>
                    <span className=" text-blue-700 font-bold">
                        {q.correctAnswer}
                    </span></div>}
            </div> */}

                                    <div className=" bg-gray-300 p-3 my-2">
                                          <p>Solved</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>}
        </div>
    );
}
