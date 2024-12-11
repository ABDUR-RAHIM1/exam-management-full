import React from 'react'

export default function DashboardHome() {
    return (
        <div>
            <header className="flex justify-between items-center py-4 px-6 bg-white rounded-lg shadow-md mb-8">
                <h1 className="text-2xl font-semibold text-gray-800">Welcome to Admin Dashboard</h1>
                <button className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-lg hover:bg-blue-700">Logout</button>
            </header>

            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Demo widgets for overview */}
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold">Total Exams</h2>
                    <p className="mt-4 text-3xl font-bold text-blue-600">12</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold">Average Score</h2>
                    <p className="mt-4 text-3xl font-bold text-green-600">85%</p>
                </div>
                <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-lg font-semibold">Upcoming Exams</h2>
                    <p className="mt-4 text-3xl font-bold text-yellow-600">3</p>
                </div>
            </section>
        </div>
    )
}
