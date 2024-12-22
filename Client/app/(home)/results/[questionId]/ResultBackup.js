import { getDataById } from '@/app/actions/globals/getDataById'
import NoDataFound from '@/app/components/Globals/NoDataFound'
import { getResultById } from '@/app/constans/constans'
import Image from 'next/image'
import React from 'react'
import { FaCheck } from 'react-icons/fa'
import { MdClose } from 'react-icons/md'

export default async function ResultsDetails({ params }) {
    const { questionId } = params
    const getDetailsApiEndpoint = `${getResultById + questionId}`
    const { status, result } = await getDataById(getDetailsApiEndpoint);
 
    console.log(result)

    if (status !== 200 || !result) {
        return <NoDataFound />
    }

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

                            {/* Title and Category */}
                            <h2 className="font-bold my-4 text-4xl text-center text-gray-800">
                                Result Sheet
                            </h2>
                            <h3 className="text-2xl font-bold text-gray-700">
                                Category: {result.questionCategory}
                            </h3>
                            <h4 className="text-xl font-semibold text-gray-600 mt-2">
                                Course :  {result.questionTitle}
                            </h4>
                            <h4 className="text-xl font-semibold text-gray-600 mt-2">
                                Total Mark :  {result.totalMark}
                            </h4>

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
                            {result.questions.map((q, i) => (
                                <div key={i} className="bg-gray-50 p-4 rounded-md mb-6 shadow">
                                    <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                        <span>{i + 1 + " ."}</span>    {q.questionText}
                                    </h2>
                                    <ul className="space-y-4">
                                        {q.options.map((o, i2) => (
                                            <li key={i2} className="flex items-center ">
                                                <span className="mr-2 font-bold">{String.fromCharCode(97 + i2)}.</span>
                                                <span
                                                    className={`px-3 py-2 rounded-md text-sm font-medium 
                                                ${o === q.selectedAns
                                                            ? q.selectedAns === q.correctAns
                                                                ? 'bg-green-100 text-green-700 border border-green-300'
                                                                : 'bg-red-100 text-red-700 border border-red-300'
                                                            : o === q.correctAns
                                                                ? 'bg-blue-100 text-blue-700 border border-blue-300'
                                                                : 'bg-gray-200 text-gray-700'
                                                        }`}
                                                >
                                                    {o}
                                                </span>
                                                {o === q.selectedAns && (
                                                    <span className="ml-2 text-lg">
                                                        {q.selectedAns === q.correctAns ? (
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
                                            {q.clarification}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}
