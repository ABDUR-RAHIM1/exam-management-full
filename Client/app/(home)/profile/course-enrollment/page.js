import { getDataHandler } from '@/app/actions/users/getData';
import React from 'react';
import PurcheseCard from '../profileComponent/PurchesCard.';

export default async function CourseEnrolment() {
    const { result } = await getDataHandler('/user/purchase/me');

    if (!result || result.length === 0) {
        return <p className='my-10 text-red-600'>No courses found!</p>;
    }

    return (
        <div className="p-4 py-10 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">My Courses</h1>
                <div className="flex justify-between flex-wrap gap-4">
                    {result.map((courseData) => (
                        <PurcheseCard key={courseData._id} courseData={courseData} />
                    ))}
                </div>
        </div>
    );
}
