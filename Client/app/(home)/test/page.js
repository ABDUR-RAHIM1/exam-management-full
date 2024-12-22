"use client"
import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';  // Import uuid to generate unique IDs

const Dashboard = () => {
    const [questions, setQuestions] = useState([]);
    const [newQuestion, setNewQuestion] = useState({
        questionId: '', // Initialize as an empty string or null
        questionText: '',
        options: ['', '', '', ''],
        selectedAns: '',
        correctAns: '',
    });
    const [editingIndex, setEditingIndex] = useState(null);  // Track which question is being edited

    
    // Handle input changes for question text and other fields
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewQuestion((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    // Handle changes for option inputs
    const handleOptionChange = (index, value) => {
        const updatedOptions = [...newQuestion.options];
        updatedOptions[index] = value;
        setNewQuestion((prev) => ({
            ...prev,
            options: updatedOptions,
        }));
    };

    // Add or update a question
    const handleAddQuestion = () => {
        if (editingIndex !== null) {
            // If editing, update the question with the same ID
            const updatedQuestions = [...questions];
            updatedQuestions[editingIndex] = newQuestion;
            setQuestions(updatedQuestions);
            setEditingIndex(null);  // Reset the edit index after update
        } else {
            // If adding, assign a new unique ID
            setQuestions((prev) => [
                ...prev,
                { ...newQuestion, questionId: uuidv4() }, // Use uuidv4() to generate a unique ID
            ]);
        }
        // Reset the new question state
        setNewQuestion({
            questionId: '',
            questionText: '',
            options: ['', '', '', ''],
            selectedAns: '',
            correctAns: '',
        });
    };

    // Edit a question
    const handleEditQuestion = (index) => {
        setNewQuestion(questions[index]);
        setEditingIndex(index); // Set the index of the question being edited
    };

    // Submit the data
    const handleSubmit = async () => {
        const dataToSend = {
            questionCategory: "BCS",
            questionTitle: "BCS 02",
            course: "675aa8a51b021c1213325b39",
            examDate: "2024-12-15",
            examTime: "10:00 AM",
            questions: questions
        };

        try {
            // You can replace this part with your API call
            console.log('Response:', dataToSend);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <div className="min-h-screen bg-gray-100 p-8">
            <div className="max-w-4xl mx-auto bg-white p-6 rounded-lg shadow-lg">
                <h1 className="text-3xl font-bold text-center mb-6">Question Dashboard</h1>
                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">{editingIndex !== null ? 'Edit Question' : 'Add New Question'}</h2>
                    <input
                        type="text"
                        name="questionText"
                        value={newQuestion.questionText}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        placeholder="Enter Question"
                    />
                    {newQuestion.options.map((option, index) => (
                        <div key={index} className="mb-3">
                            <input
                                type="text"
                                value={option}
                                onChange={(e) => handleOptionChange(index, e.target.value)}
                                className="w-full p-3 border border-gray-300 rounded-md"
                                placeholder={`Option ${index + 1}`}
                            />
                        </div>
                    ))}
                    <input
                        type="text"
                        name="correctAns"
                        value={newQuestion.correctAns}
                        onChange={handleInputChange}
                        className="w-full p-3 border border-gray-300 rounded-md mb-4"
                        placeholder="Enter Correct Answer"
                    />
                    <button
                        onClick={handleAddQuestion}
                        className="w-full py-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        {editingIndex !== null ? 'Update Question' : 'Add Question'}
                    </button>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-semibold mb-4">Added Questions</h2>
                    {questions.length === 0 ? (
                        <p className="text-gray-500">No questions added yet.</p>
                    ) : (
                        questions.map((q, index) => (
                            <div key={q.questionId} className="bg-gray-50 p-4 rounded-md mb-4 shadow-md">
                                <p className="font-semibold">{q.questionText}</p>
                                <ul className="ml-4 mt-2 space-y-2">
                                    {q.options.map((opt, idx) => (
                                        <li key={idx} className="text-gray-700">- {opt}</li>
                                    ))}
                                </ul>
                                <p className="mt-2 text-sm text-gray-500">Correct Answer: {q.correctAns}</p>
                                <button
                                    onClick={() => handleEditQuestion(index)}
                                    className="mt-2 py-1 px-4 bg-yellow-500 text-white rounded-md hover:bg-yellow-600 transition duration-200"
                                >
                                    Edit
                                </button>
                            </div>
                        ))
                    )}
                </div>

                <button
                    onClick={handleSubmit}
                    className="w-full py-3 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition duration-200"
                >
                    Submit Questions
                </button>
            </div>
        </div>
    );
};

export default Dashboard;
