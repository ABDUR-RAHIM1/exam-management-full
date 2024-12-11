import React from 'react';

const exams = [
    { id: 1, subject: "BCS Exam", date: "2024-09-15", marks: 85 },
    { id: 2, subject: "Bank Exam", date: "2024-09-20", marks: 90 },
    { id: 3, subject: "Government Job Exam", date: "2024-09-25", marks: 75 },
    { id: 4, subject: "Private Sector Exam", date: "2024-09-30", marks: 88 },
    { id: 5, subject: "Interview Preparation", date: "2024-10-05", marks: 92 },
];

export default function MyExamPage() {


    return (
        <div className="min-h-screen flex flex-col items-center bg-gray-100 p-5">
            <h1 className="text-3xl font-semibold mb-4 text-blue-600">My Exam Results</h1>

            <div className="w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Subject</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Marks</th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {exams.map((exam) => (
                            <tr key={exam.id} className="hover:bg-gray-100 transition duration-200">
                                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{exam.subject}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{exam.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">{exam.marks}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">

                                    <button

                                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200"
                                    >
                                        Full History
                                    </button>
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

        </div>
    );
}
