"use client"
import React, { useState } from 'react';

function ExamPage() {
    const [answers, setAnswers] = useState(Array(40).fill(null));

    const handleAnswerChange = (index, selectedAnswer) => {
        const updatedAnswers = [...answers];
        updatedAnswers[index] = selectedAnswer;
        setAnswers(updatedAnswers);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("User Answers:", answers);
        // Handle submission logic here
    };

    // Static mock question, will later be replaced with dynamic data
    const questions = Array.from({ length: 40 }, (_, index) => ({
        id: index + 1,
        text: `BCS Question ${index + 1}`,
        options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'],
    }));
    

    return (
        <div className="max-w-4xl mx-auto p-8">
            <h2 className="text-2xl font-bold text-center mb-6">BCS Exam - 40 Questions</h2>
            <p className=' text-center my-5 text-lg'>Date : {new Date().toLocaleDateString()}</p>
            <form onSubmit={handleSubmit}>
                {questions.map((question, index) => (
                    <div key={question.id} className="mb-6 p-4 bg-gray-100 rounded-md shadow-md">
                        <p className="text-lg font-semibold mb-2">{`${index + 1}. ${question.text}`}</p>
                        <div className="space-y-2">
                            {question.options.map((option, optIndex) => (
                                <label key={optIndex} className="block">
                                    <input
                                        type="radio"
                                        name={`question-${index}`}
                                        value={option}
                                        checked={answers[index] === option}
                                        onChange={() => handleAnswerChange(index, option)}
                                        className="mr-2"
                                    />
                                    {option}
                                </label>
                            ))}
                        </div>
                    </div>
                ))}
                <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md mt-4 hover:bg-blue-700">
                    Submit Exam
                </button>
            </form>
        </div>
    );
}

export default ExamPage;
