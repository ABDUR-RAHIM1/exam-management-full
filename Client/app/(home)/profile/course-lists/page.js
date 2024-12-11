import React from 'react';
import CourseCard from '../profileComponent/CourseCard'; // Ensure this is the correct path
import servicesData2 from '@/app/DemoData/ServicesData2'; // Assuming this is your demo data file

export default function CourseListHomePage() {
    return (
        <div className="bg-gray-100 min-h-screen py-10  ">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">All Courses</h1>
            <div className=" flex flex-wrap gap-6 px-4">
                {servicesData2.map((course) => (
                    <CourseCard key={course.title} course={course} />
                ))}
            </div>
        </div>
    );
}
