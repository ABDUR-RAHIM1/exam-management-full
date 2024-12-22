import React from 'react';
import { getDataById } from '@/app/actions/globals/getDataById';
import NoDataFound from '@/app/components/Globals/NoDataFound';
import { questionDetailsById } from '@/app/constans/constans';

export default async function QuestionsDetails({ params }) {
    const { questionId } = params;
    const apiEndPoint = `${questionDetailsById + questionId}`;
    const { status, result } = await getDataById(apiEndPoint);

    if (status !== 200) {
        return <NoDataFound />;
    }

    const {
        questionCategory,
        questionTitle,
        examDate,
        examTime,
        examDuration,
        questions,
        createdAt,
    } = result;

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
                        <strong>Exam Date:</strong>{' '}
                        {new Date(examDate).toLocaleDateString('en-US')}
                    </p>
                    <p className="text-gray-600">
                        <strong>Exam Time:</strong> {examTime}
                    </p>
                    <p className="text-gray-600">
                        <strong>Exam Duration:</strong> {examDuration} Minute
                    </p>
                    <p className="text-gray-600">
                        <strong>Created At:</strong>{' '}
                        {new Date(createdAt).toLocaleString('en-US')}
                    </p>
                </div>

                <div>
                    <h2 className="text-2xl font-semibold text-gray-800 mb-4">
                        Questions Preview
                    </h2>
                    {result && questions.length > 0 ? (
                        <div className="space-y-6">
                            {questions.map((question, index) => (
                                <div
                                    key={index}
                                    className="border rounded-md p-4 bg-gray-50"
                                >
                                    <p className="text-gray-800 font-semibold mb-2">
                                        Q{index + 1}: {question.questionText}
                                    </p>
                                    <ul className=" mb-2">
                                        {question.options.map((option, idx) => (
                                            <li
                                                key={idx}
                                                className="text-gray-700"
                                            >
                                                <strong className='mx-2' >{String.fromCharCode(97 + idx)}.</strong>
                                                {option}
                                            </li>
                                        ))}
                                    </ul>
                                    <div className=' font-bold '>
                                        <p className='text-blue-500'>
                                            Correct Answer: {question.correctAns}
                                        </p>
                                        <p className='text-blue-500'>
                                            Clarification: {question.clarification || question.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ) : (
                        <p className="text-red-500">No Questions Available</p>
                    )}
                </div>
            </div>
        </div>
    );
}
