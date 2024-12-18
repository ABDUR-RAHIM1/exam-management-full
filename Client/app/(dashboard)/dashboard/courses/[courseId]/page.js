import { getDataById } from '@/app/actions/globals/getDataById';
import NoDataFound from '@/app/components/Globals/NoDataFound';
import React from 'react';

export default async function CourseDetails({ params }) {
    const { courseId } = params;
    const api = `/admin/course/${courseId}`;
    const { status, result } = await getDataById(api);

    if (!result) {
        return <NoDataFound />;
    }

    const {
        title,
        category,
        desc,
        books,
        duration,
        schedule,
        regularPrice,
        offerPrice,
        note,
    } = result;

    return (
        <div className="container mx-auto px-4 sm:px-6 py-10 bg-gradient-to-b from-blue-50 to-blue-100">
            {/* Header Section */}
            <div className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white p-6 rounded-lg shadow-md text-center">
                <h1 className="text-2xl md:text-4xl font-bold">{title}</h1>
                <p className="text-sm md:text-lg italic mt-2">Category: {category}</p>
            </div>

            {/* Description Section */}
            <div className="mt-10 bg-white rounded-lg shadow-md p-4 sm:p-6">
                <h2 className="text-xl md:text-2xl font-semibold text-blue-600">About the Course</h2>
                <p className="text-gray-700 mt-4 leading-relaxed text-sm md:text-base">{desc}</p>
            </div>

            {/* Highlights Section */}
            <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
                {/* Books Section */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-600">Books</h3>
                    <ul className="mt-4 text-gray-700 space-y-2">
                        {books.map((book, index) => (
                            <li
                                key={index}
                                className="bg-blue-50 px-2 py-1 sm:px-4 sm:py-2 rounded-md shadow-sm text-sm md:text-base"
                            >
                                {book}
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Duration Section */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-600">Duration</h3>
                    <p className="text-gray-700 mt-4 text-sm md:text-base">{duration}</p>
                </div>

                {/* Notes Section */}
                <div className="bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
                    <h3 className="text-lg md:text-xl font-semibold text-blue-600">Key Notes</h3>
                    <ul className="mt-4 text-gray-700 space-y-2">
                        {note.map((item, index) => (
                            <li
                                key={index}
                                className="bg-blue-50 px-2 py-1 sm:px-4 sm:py-2 rounded-md shadow-sm text-sm md:text-base"
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>

            {/* Schedule Section */}
            <div className="mt-10 bg-white rounded-lg shadow-md p-4 sm:p-6 text-center">
                <h3 className="text-lg md:text-xl font-semibold text-blue-600">Schedule</h3>
                <img
                    src={schedule}
                    alt="Course Schedule"
                    className="mt-4 w-full max-w-md mx-auto rounded-md shadow-lg"
                />
            </div>

            {/* Pricing Section */}
            <div className="mt-10 bg-gradient-to-r from-green-500 to-green-600 text-white p-4 sm:p-6 rounded-lg shadow-md text-center">
                <h3 className="text-xl md:text-2xl font-bold">Pricing</h3>
                <p className="mt-2 text-base sm:text-lg">
                    <span className="line-through text-gray-300">${regularPrice}</span> <br />
                    <span className="text-2xl md:text-3xl font-bold">${offerPrice}</span>
                </p>
                <p className="mt-4 text-sm md:text-base italic">Limited-time offer!</p>
            </div>
        </div>
    );
}
