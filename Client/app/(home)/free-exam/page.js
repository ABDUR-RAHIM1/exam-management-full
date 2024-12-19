"use client";
import React, { useState, useEffect } from "react";

function ExamPage() {
    const [answers, setAnswers] = useState([]);
    const [data, setData] = useState(null);

    useEffect(() => {
        fetch("http://localhost:8500/api/admin/question/details/676440351b847bfe93d9c907")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
                setAnswers(Array(data.questions.length).fill(null)); // Initialize answers
            })
            .catch((err) => console.error("Error fetching questions:", err));
    }, []);

    const handleAnswerChange = (questionIndex, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[questionIndex] = selectedAnswer;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (answers.includes(null)) {
            alert("Please answer all questions before submitting.");
            return;
        }
    
        // Validate answers
        const results = questions.map((question, index) => {
            const selectedAnswer = answers[index]; // Get selected answer
            const isCorrect = question.answer === selectedAnswer; // Check if the selected answer is correct
            return {
                question: question.questionText,
                selectedAnswer, // Include the selected answer value
                isCorrect,
            };
        });
    
        console.log(results);
    
        const correctCount = results.filter((result) => result.isCorrect).length;
        // setResults(results); // Save results to state
        alert(`You got ${correctCount} out of ${questions.length} correct!`);
    };
    

    if (data === null) {
        return <p className="text-center mt-4">Loading questions...</p>;
    }

    const {
        questionCategory,
        questionTitle,
        examDate,
        examTime,
        questions,
        createdAt,
    } = data;

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <div className="bg-white shadow-md rounded-md p-6 max-w-4xl mx-auto">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">
                    Question Details Preview
                </h1>
                <div className="border-b-2 pb-4 mb-6">
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
                </div>

                <form onSubmit={handleSubmit}>
                    <div>
                        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                            Questions Preview
                        </h2>
                        {data && questions.length > 0 ? (
                            <div className="space-y-6">
                                {questions.map((question, index) => (
                                    <div
                                        key={index}
                                        className="border rounded-md p-4 bg-gray-50"
                                    >
                                        <p className="text-gray-800 font-semibold mb-2">
                                            Q{index + 1}: {question.questionText}
                                        </p>
                                        <div className="space-y-2">
                                            {question.options.map((option, idx) => (
                                                <label
                                                    key={idx}
                                                    className="block text-gray-700"
                                                >
                                                    <input
                                                        type="radio"
                                                        name={`question-${index}`}
                                                        value={option}
                                                        onChange={() =>
                                                            handleAnswerChange(index, option)
                                                        }
                                                        className="mr-2"
                                                    />
                                                    {option}
                                                </label>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ) : (
                            <p className="text-red-500">No Questions Available</p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="mt-6 px-4 py-2 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700"
                    >
                        Submit Answers
                    </button>
                </form>
            </div>
        </div>
    );
}

export default ExamPage;
