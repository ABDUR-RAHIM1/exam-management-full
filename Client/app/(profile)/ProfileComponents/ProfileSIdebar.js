import Link from 'next/link'
import React from 'react'

export default function ProfileSIdebar() {

    const items = [
        {
            item: "Profile Overview",
            icon: "Icon",
            path: "/profile"
        },
        {
            item: "Course Lists",
            icon: "Icon",
            path: "/profile/course-list"
        },
        {
            item: "Upcoming Exam",
            icon: "Icon",
            path: "/profile/upcoming-exam"
        },
        {
            item: "My Exams",
            icon: "Icon",
            path: "/profile/my-exams"
        },
        {
            item: "Course Enrollment",
            icon: "Icon",
            path: "/profile/course-enrolment"
        },
        {
            item: "Profile Settings",
            icon: "Icon",
            path: "/profile/settings"
        },
    ]
    return (

        <nav className="w-full" >
            <div className="space-y-3">
                {
                    items && items.map((item, index) => (
                        <Link href={item.path} key={index} className={` w-full inline-block hover:bg-gray-700 px-4 py-2 rounded text-center md:text-left font-[500] capitalize text-yellow-50`}>
                            {item.item}
                        </Link>
                    ))
                }
                {/* <li className="hover:bg-gray-700 px-4 py-2 rounded text-center md:text-left">
                    <a href="#">Dashboard</a>
                </li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-center md:text-left">
                    <a href="#">Settings</a>
                </li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-center md:text-left">
                    <a href="#">Messages</a>
                </li>
                <li className="hover:bg-gray-700 px-4 py-2 rounded text-center md:text-left">
                    <a href="#">Logout</a>
                </li> */}
            </div>
        </nav >
    )
}
