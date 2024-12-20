import Link from 'next/link';
import React from 'react';
import { FaHome, FaUserGraduate, FaClipboardList, FaChartBar, FaCog } from "react-icons/fa";

const menuItems = [
    {
        name: "Home",
        path: "/dashboard",
        icon: <FaHome className="mr-3 text-lg" />,
        subItems: []
    },
    // {
    //     name: "My Exams",
    //     path: "/dashboard/exam",
    //     icon: <FaUserGraduate className="mr-3 text-lg" />,
    //     subItems: [
    //         { name: "All Exams", path: "/dashboard/exam/all" },
    //         { name: "Upcoming Exams", path: "/dashboard/exam/upcoming" }
    //     ]
    // },
    {
        name: "Questions",
        path: "/dashboard/questions",
        icon: <FaClipboardList className="mr-3 text-lg" />,
        subItems: [
            { name: "All Questions", path: "/dashboard/questions/all" },
            { name: "Add Question", path: "/dashboard/questions/add" },
            // { name: "Question Bank", path: "/dashboard/questions/bank" }
        ]
    },
    {
        name: "Courses",
        path: "/dashboard/coures",
        icon: <FaClipboardList className="mr-3 text-lg" />,
        subItems: [
            { name: "Create Course", path: "/dashboard/courses/add" },
            { name: "All Course", path: "/dashboard/courses/all" },
            { name: "Purchase", path: "/dashboard/courses/purchase" },
        ]
    },
    {
        name: "Results",
        path: "/dashboard/results",
        icon: <FaClipboardList className="mr-3 text-lg" />,
        subItems: [
            { name: "Exam Results", path: "/dashboard/exam-results" },
            { name: "Certificate", path: "/dashboard/results/certificate" }
        ]
    },
    // {
    //     name: "Analytics",
    //     path: "/dashboard/analytics",
    //     icon: <FaChartBar className="mr-3 text-lg" />,
    //     subItems: []
    // },
    {
        name: "Settings",
        path: "/dashboard/settings",
        icon: <FaCog className="mr-3 text-lg" />,
        subItems: [
            { name: "Profile Settings", path: "/dashboard/settings/profile" },
            { name: "Account Settings", path: "/dashboard/settings/account" }
        ]
    }
];


export default function DashboardSidebar() {
    return (
        <div className=" w-full ">
            <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
            <nav className="flex flex-col w-full space-y-1">
                {menuItems.map((item, index) => (
                    <div key={index} className=' w-full'>
                        <Link href={item.path} className=" flex items-center gap-3 w-full py-2 px-3 rounded text-white hover:bg-blue-700 transition-colors duration-200 ">
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                        {item.subItems.length > 0 && (
                            <div className="ml-8 mt-1">
                                {item.subItems.map((subItem, subIndex) => (
                                    <Link key={subIndex} href={subItem.path} className=" flex items-center gap-3 w-full py-2 px-3 rounded text-white hover:bg-blue-700 transition-colors duration-200 ">
                                        {subItem.name}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>
                ))}
            </nav>
        </div>
    );
}
