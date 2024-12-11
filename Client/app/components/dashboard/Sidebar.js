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
    {
        name: "My Exams",
        path: "/dashboard/exam",
        icon: <FaUserGraduate className="mr-3 text-lg" />,
        subItems: [
            { name: "All Exams", path: "/dashboard/exam/all" },
            { name: "Upcoming Exams", path: "/dashboard/exam/upcoming" }
        ]
    },
    {
        name: "Questions",
        path: "/dashboard/questions",
        icon: <FaClipboardList className="mr-3 text-lg" />,
        subItems: [
            { name: "All Questions", path: "/dashboard/questions/all" },
            { name: "Add Question", path: "/dashboard/questions/add" },
            { name: "Question Bank", path: "/dashboard/questions/bank" }
        ]
    },
    {
        name: "Results",
        path: "/dashboard/results",
        icon: <FaClipboardList className="mr-3 text-lg" />,
        subItems: [
            { name: "Exam Results", path: "/dashboard/results/exam" },
            { name: "Certificate", path: "/dashboard/results/certificate" }
        ]
    },
    {
        name: "Analytics",
        path: "/dashboard/analytics",
        icon: <FaChartBar className="mr-3 text-lg" />,
        subItems: []
    },
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


export default function Sidebar() {
    return (
        <div className=" p-4">
            <h2 className="text-2xl font-bold mb-8">Dashboard</h2>
            <nav className="flex flex-col w-full space-y-1">
                {menuItems.map((item, index) => (
                    <div key={index}>
                        <Link href={item.path} className="w-full flex items-center py-3 px-4 rounded hover:bg-blue-700 transition duration-200">
                            {item.icon}
                            <span>{item.name}</span>
                        </Link>
                        {item.subItems.length > 0 && (
                            <div className="ml-8 mt-1">
                                {item.subItems.map((subItem, subIndex) => (
                                    <Link key={subIndex} href={subItem.path} className="w-full flex items-center py-2 px-4 text-sm rounded hover:bg-blue-600 transition duration-200">
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
