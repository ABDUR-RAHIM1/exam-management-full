import React from 'react';

export default function NotFound({ page }) {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50">
            <h1 className="text-4xl font-bold text-gray-800 mb-2">Oops! {page} Not Found</h1>
            <p className="text-gray-600 mb-8 text-center">
                {" Sorry, you are looking for doesn't exist or has been moved."}
            </p>
            <a href="/" className="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-lg">
                Go Home
            </a>
        </div>
    );
}
