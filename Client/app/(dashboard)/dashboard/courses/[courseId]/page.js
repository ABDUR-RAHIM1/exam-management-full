import React from 'react'

export default function CourseDetails({ params }) {
    const { courseId } = params
    return (
        <div>Course Details is Under Proccesing : {courseId}</div>
    )
}
