import Link from 'next/link';
import React from 'react';
import CourseActions from './CourseActions';

const CourseCard = ({ course }) => {
    return (
        <div className="w-[31%] bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
                {/* Course Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{course.title}</h2>

                {/* Category */}
                <p className="text-sm text-gray-500 italic mb-4">Category: {course.category}</p>

                {/* Description */}
                <p className="text-gray-600 mb-4">{course.desc}</p>

                {/* Books */}
                <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Books Included:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {course.books.map((book, index) => (
                            <li key={index}>{book}</li>
                        ))}
                    </ul>
                </div>

                {/* Duration */}
                <p className="text-gray-600 mb-4">
                    <span className="font-bold">Duration:</span> {course.duration}
                </p>

                {/* Schedule */}
                <div className="mb-4">
                    <CourseActions routinee={course.schedule} />
                </div>

                {/* Prices */}
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600">
                        <span className="font-bold">TK:</span>{" "}
                        <span className="line-through text-red-500">৳{course.regularPrice}</span>
                    </p>
                    <p className="text-green-600 font-bold">TK: ৳{course.offerPrice}</p>
                </div>

                {/* Enroll Button */}
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700">
                    Enroll Now
                </button>
            </div>

        </div>
    );
};



export default CourseCard;
