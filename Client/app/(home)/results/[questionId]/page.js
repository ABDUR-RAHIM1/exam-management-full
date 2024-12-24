import { getDataById } from '@/app/actions/globals/getDataById'
import NoDataFound from '@/app/components/Globals/NoDataFound'
import { getResultById } from '@/app/constans/constans'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'
import { GrDatabase } from "react-icons/gr";

export default async function ResultsDetails({ params }) {
    const { questionId } = params
    const getDetailsApiEndpoint = `${getResultById + questionId}`
    const { status, result } = await getDataById(getDetailsApiEndpoint);
 

    if (status !== 200 || !result) {
        return <NoDataFound />
    }
    const minusMark = 0.25

    return (
        <div className='bgGradient overflow-hidden'>

            <div className="max-w-4xl mx-auto bg-white my-10 shadow-lg rounded-lg p-6">
                {result && (
                    <div>
                        {/* Question Header */}
                        <div className="border-b-2 pb-4 mb-6">
                            {/* Website Name and Logo */}
                            <div className="flex items-center justify-between">
                                <div className="flex items-center">
                                    <Image
                                        src="https://placehold.co/600x400/png"
                                        width={50}
                                        height={50}
                                        alt="TickMarkQ Logo"
                                        className="w-16 h-16 rounded-full mr-3"
                                    />
                                    <h1 className="text-3xl font-bold text-blue-600">TickMarkQ</h1>
                                </div>
                                <p className="text-sm font-medium text-gray-500 italic">
                                    Empowering Knowledge, One Question at a Time
                                </p>
                            </div>
                            {/* Title */}
                            <h2 className="font-extrabold my-4 text-5xl text-center text-indigo-700 tracking-wide flex items-center justify-center">
                                <span className='text-6xl'><GrDatabase  /></span>  Result Sheet
                            </h2>
                            <div className="bg-gradient-to-r my-5 from-blue-50 to-indigo-100 p-6 rounded-lg shadow-md flex items-center justify-between flex-wrap">
                                <div className='flex-1'>

                                    {/* Category */}
                                    <h3 className="text-2xl font-bold text-gray-800 my-3">
                                        <span className="text-indigo-500">Category:</span> {result.questionCategory}
                                    </h3>

                                    {/* Course */}
                                    <h4 className="text-xl font-semibold text-gray-700 my-2">
                                        <span className="text-indigo-500">Course:</span> {result.questionTitle}
                                    </h4>

                                    {/* Minus Mark */}
                                    <h4 className="text-lg font-medium text-red-500 my-2">
                                        <span className="text-gray-600">Minus Mark:</span> {minusMark} per Wrong Answer
                                    </h4>

                                    {/* Total Mark */}
                                    <h4 className="text-lg font-medium text-green-600 my-2">
                                        <span className="text-gray-600">Total Mark:</span> {result.totalMark}
                                    </h4>
                                </div>
                                <div className='flex-1 flex items-center flex-col gap-4'>
                                    <div className='flex items-center gap-2'><p>Correct Answer :</p> <span className='w-[20px] h-[20px] inline-block rounded-full bg-green-600' /> </div>
                                    <div className='flex items-center gap-2'><p>Wrong Answer :</p> <span className='w-[20px] h-[20px] inline-block rounded-full bg-red-600' /> </div>
                                    <div className='flex items-center gap-2'><p>Suggest Answer :</p> <span className='w-[20px] h-[20px] inline-block rounded-full bg-blue-600' /> </div>
                                </div>
                            </div>


                            {/* Date and Time */}
                            <div className="flex items-center justify-end mt-4 text-sm text-gray-500">
                                <div className="bg-blue-50 text-blue-600 px-4 py-2 rounded-md shadow-sm font-medium">
                                    Exam Summary
                                </div>
                            </div>
                        </div>

                        {/* Summary */}
                        <div className="flex justify-between bg-blue-50 p-4 rounded-md text-lg text-gray-700 font-medium mb-8">
                            <p><span className="font-bold text-blue-600">Total Q:</span> {result.rightAnswers + result.wrongAnswers}</p>
                            <p><span className="font-bold text-green-600">Right Q:</span> {result.rightAnswers}</p>
                            <p><span className="font-bold text-red-600">Wrong Q:</span> {result.wrongAnswers}</p>
                        </div>

                        {/* Questions and Answers */}
                        <div>
                            {result.questions.map((question, i) => (
                                <Details key={question._id} question={question} index={i} />
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}



const Details = (props) => {
    const { questionText, options, selectedAns, correctAns, clarification } = props.question
    const { index } = props;

    return (
        <div className="bg-gray-50 p-4 rounded-md mb-6 shadow">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                <span>{index + 1 + " ."}</span>    {questionText}
            </h2>
            <ul className="space-y-4">
                {options.map((option, optionIndex) => (
                    <li key={optionIndex} className="flex items-center ">
                        <span className="mr-2 font-bold">{String.fromCharCode(97 + optionIndex)}.</span>
                        <span
                            className={`px-3 py-2 rounded-md text-sm font-medium 
                    ${optionIndex === selectedAns
                                    ? selectedAns === Number(correctAns)
                                        ? 'bg-green-100 text-green-700 border border-green-300'
                                        : 'bg-red-100 text-red-700 border border-red-300'
                                    : optionIndex === Number(correctAns)
                                        ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                        : 'bg-gray-200 text-gray-700'
                                }`}
                        >
                            {option}
                        </span>
                        {optionIndex === selectedAns && (
                            <span className="ml-2 text-lg">
                                {selectedAns === Number(correctAns) ? (
                                    <FaCheck className="text-green-500" />
                                ) : (
                                    <MdClose className="text-red-500" />
                                )}
                            </span>
                        )}
                    </li>
                ))}
            </ul>
            <div className="bg-green-100 mt-4 p-3 rounded text-sm ">
                <p className='text-green-600'>
                    {clarification}
                </p>
            </div>
        </div>
    )
}