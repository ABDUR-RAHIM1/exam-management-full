"use client";
import Cookies from "js-cookie";
import Image from "next/image";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import { IoIosArrowForward, IoIosClose } from "react-icons/io";
import demoProfile from "@/public/Images/profile.png"
import ActionsBtn from "./ActionsBtn";
import Cart from "./profileComponent/Cart";

export default function ProfileSidebar(props) {
    const router = useRouter()
    const path = usePathname();
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const { name, photo } = props.profileInfo

    const profileItems = [
        { name: "Profile Overview", path: "/profile" },
        { name: "Course Lists", path: "/profile/course-lists" },
        { name: "My Course", path: "/profile/my-courses" },
        { name: "My Exams", path: "/profile/my-exams" },
        { name: "Upcoming Exams", path: "/profile/upcoming-exams" },
        { name: "Exam History", path: "/profile/exam-history" },
        { name: "Certificates", path: "/profile/certificates" },
        { name: "Course Enrollment", path: "/profile/course-enrollment" },
        { name: "Profile Settings", path: "/profile/settings" },
        { name: "Payment History", path: "/profile/payment-history" },
        { name: "Support & FAQs", path: "/profile/support" },
    ];

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen); // Toggle sidebar open/close
    };

    const handleLogOut = () => {
        Cookies.remove("userToken")
        setTimeout(() => {
            router.push('/')
        }, 1000);
    }




    return (
        <div className="relative h-screen pb-20 bg-blue-500 text-white overflow-y-auto md:w-[22%]">

            {/* Arrow button to open sidebar on mobile */}
            <span
                onClick={toggleSidebar}
                className={`${sidebarOpen ? "bg-red-500" : "bg-blue-600"} text-2xl z-[8888] fixed top-[5rem] left-0 cursor-pointer  px-3 py-2 md:hidden flex items-center text-white`}
            >
                {sidebarOpen ? (
                    <>
                        <IoIosClose className="cursor-pointer text-white" />
                    </>
                ) : (
                    <>
                        <IoIosArrowForward className="cursor-pointer text-2xl text-white" />
                    </>
                )}
            </span>

            {/* Sidebar */}
            <aside
                className={`fixed inset-y-0 left-0 z-[10] py-24 md:py-10 p-4 transform transition-transform duration-300 md:relative md:translate-x-0 md:w-full h-screen 
    ${sidebarOpen ? "translate-x-0 w-[60%] md:w-full bg-blue-500" : "-translate-x-full bg-blue-600"}`}
            >

                <div className="my-6 w-full bg-blue-500 py-4 px-2 rounded-md">
                    {/* Profile Photo and Name */}
                    <div className="w-20 h-20 rounded-full m-auto relative ">
                        <Image
                            src={photo || demoProfile}
                            width={64}
                            height={64}
                            alt="Profile Picture"
                            className="w-full h-full rounded-full"
                        />
                        {/* Edit Profile Icon */}
                        <div className="absolute -bottom-2 -right-2">
                            <ActionsBtn userData={props.profileInfo} />
                        </div>
                    </div>
                    <p className="text-center my-3 font-bold italic">{
                        name || "N/A"
                    }</p>
                </div>

                <div className="mt-8 text-center">
                    <Cart />
                </div>

                <ul className="space-y-2 my-16">
                    {profileItems.map((service, index) => (
                        <li key={index}>
                            <Link
                                href={service.path}
                                className={`block py-2 px-3 rounded text-white hover:bg-blue-700 transition-colors duration-200 ${path === service.path ? "bg-blue-700" : ""
                                    }`}
                            >
                                {service.name}
                            </Link>
                        </li>
                    ))}
                    <button onClick={handleLogOut} className="w-full py-3 px-5 bg-red-600 text-white my-6 font-bold hover:scale-105 duration-200">
                        Log Out
                    </button>
                </ul>
            </aside>
        </div>
    );
}
