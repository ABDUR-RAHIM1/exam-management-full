import React from 'react';   
import EnrolBtn from '@/app/components/Globals/EnrolBtn';
import CourseActions from './CourseActions';


/// uses profile
const CourseCard = (props) => {
    const { category, title, desc, books, duration, schedule, regularPrice, offerPrice, note } = props.courseData;

    return (
        <div className="w-[31%] bg-white shadow-md rounded-lg overflow-hidden">
            <div className="p-6">
                {/* Course Title */}
                <h2 className="text-xl font-bold text-gray-800 mb-2">{title}</h2>

                {/* Category */}
                <p className="text-sm text-gray-500 italic mb-4">Category: {category}</p>

                {/* Description */}
                <p className="text-gray-600 mb-4">{desc}</p>

                {/* Books */}
                <div className="mb-4">
                    <h3 className="font-semibold text-gray-700 mb-2">Books Included:</h3>
                    <ul className="list-disc list-inside text-gray-600">
                        {books.map((book, index) => (
                            <li key={index}>{book}</li>
                        ))}
                    </ul>
                </div>

                {/* Note */}
                <div className="my-5 bg-gray-200 py-3 px-1">
                    <ul className='list-disc list-inside'>
                        <h3 className=' font-bold my-2 italic'>বিঃদ্রঃ </h3>
                        {
                            note && note.map((n, i) => (
                                <li key={i}>{n}</li>
                            ))
                        }
                    </ul>
                </div>

                {/* Duration */}
                <p className="text-gray-600 mb-4">
                    <span className="font-bold">Duration:</span> {duration}
                </p>

                {/* Schedule */}
                <div className="mb-4">
                    <CourseActions routinee={schedule} />
                </div>

                {/* Prices */}
                <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600">
                        <span className="font-bold">TK:</span>{" "}
                        <span className="line-through text-red-500">৳{regularPrice}</span>
                    </p>
                    <p className="text-green-600 font-bold">TK: ৳{offerPrice}</p>
                </div>

                {/* Enroll Button */}
                <EnrolBtn courseData={props.courseData} />
            </div>
        </div>
    );
};

export default CourseCard;
