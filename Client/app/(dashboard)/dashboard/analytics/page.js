import React from 'react';

export default function Analytics() {
    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h2 className="text-3xl font-semibold mb-6">Analytics</h2>

            {/* Statistics Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-medium">Total Users</h3>
                    <p className="text-2xl font-bold text-blue-600">1,230</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-medium">Total Exams</h3>
                    <p className="text-2xl font-bold text-blue-600">542</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-medium">Average Score</h3>
                    <p className="text-2xl font-bold text-blue-600">78%</p>
                </div>
                <div className="bg-white p-4 rounded-lg shadow-md text-center">
                    <h3 className="text-xl font-medium">Active Sessions</h3>
                    <p className="text-2xl font-bold text-blue-600">320</p>
                </div>
            </div>

            {/* Charts Section */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-medium mb-4">User Growth</h4>
                    {/* Placeholder for a line chart */}
                    <div className="h-64 flex items-center justify-center text-gray-400">
                        Line Chart Here
                    </div>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h4 className="text-lg font-medium mb-4">Exam Participation</h4>
                    {/* Placeholder for a bar chart */}
                    <div className="h-64 flex items-center justify-center text-gray-400">
                        Bar Chart Here
                    </div>
                </div>
            </div>

            {/* Additional Section for Exam Performance Overview */}
            <div className="bg-white p-6 rounded-lg shadow-md mt-8">
                <h4 className="text-lg font-medium mb-4">Performance Overview</h4>
                {/* Placeholder for another chart, such as a pie chart */}
                <div className="h-64 flex items-center justify-center text-gray-400">
                    Pie Chart Here
                </div>
            </div>
        </div>
    );
}
