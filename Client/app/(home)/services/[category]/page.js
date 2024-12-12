import { getDataByQuery } from '@/app/actions/users/getDataByQuary';
import NoDataFound from '@/app/components/Globals/NoDataFound';
import React from 'react'
import CourseCard from '../CourseCard';
import Cart from '@/app/components/Globals/Cart';



/// for dynamic services category items 
export default async function ServicesCategory({ params }) {
    const { category } = params;

    const { status, result } = await getDataByQuery(category)

    if (status === 404) {
        return <NoDataFound text={result.message} />
    }


    return (
        <div className=" w-full  relative bg-gray-100 min-h-screen py-10  ">
            <h1 className="text-center text-3xl font-bold text-gray-800 mb-6">All Courses of
                <span className=' ml-3 text-blue-800 font-bold'>{category}</span>
            </h1>
            <div className=" flex flex-wrap gap-6 px-4">
                {result && result.map(course => (
                    <CourseCard key={course._id} courseData={course} />
                ))}
            </div>

            {/* <Cart /> */}
            <Cart bgColor='bg-red-500' textColor="text-white" />

        </div>
    )
}
