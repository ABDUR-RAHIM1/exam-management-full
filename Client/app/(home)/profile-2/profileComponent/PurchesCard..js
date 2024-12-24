import React from 'react';
import CourseActions from './CourseActions';

export default function PurcheseCard({ courseData }) {
    const { course, isEnrolled, isCompleted, purchaseDate } = courseData;

    return (
        <div className="w-full md:w-[31%] border p-4 rounded-md shadow-xl bg-white">
            <p><strong>Enrollment Status:</strong> {isEnrolled ? 'Enrolled' : 'Not Enrolled'}</p>
            <p><strong>Completion Status:</strong> {isCompleted ? 'Completed' : 'Not Completed'}</p>
            <p><strong>Purchase Date:</strong> {new Date(purchaseDate).toLocaleDateString()}</p>

            {/* Course details */}
            <div className="mt-4">
                <h3 className="font-medium text-lg">Courses:</h3>
                <ul className="list-disc ml-6">
                    {course.map((c, index) => (
                        <CourseCard key={index} courseData={c} />
                    ))}
                </ul>
            </div>
        </div>
    );
}


const CourseCard = (props) => {
    const { category, title, duration, schedule } = props.courseData;
    return (
        <>
            <li> <strong>Category :</strong> {category}</li>
            <li> <strong>Title :</strong> {title}</li>
            <li><strong>Duration :</strong>{duration}</li>
            <CourseActions routinee={schedule} />
        </>
    )
}