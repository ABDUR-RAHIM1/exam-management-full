import { getDataHandler } from '@/app/actions/users/getData'
import NoDataFound from '@/app/components/Globals/NoDataFound'
import { publicCourseGet } from '@/app/constans/constans'
import React from 'react'
import CourseTable from './CourseTable'

export default async function CourseAllPage() {
    const { result } = await getDataHandler(publicCourseGet)

    if (result && result.length < 1) {
        return <NoDataFound />
    }

    return (
        <div className=" bg-gray-100 rounded-md  min-h-screen py-10  ">
            <CourseTable courseData={result} />
        </div>
    )
}
