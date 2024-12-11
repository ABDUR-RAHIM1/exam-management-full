"use client";
import { demoProfilePhoto } from "@/app/DemoData/DemoImg";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";
import { RiMenuFold3Fill } from "react-icons/ri";
import { FaBookOpen } from "react-icons/fa";

export default function MobileNavbar() {
    const path = usePathname();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(null); // Track open dropdown


    const toggleDropdown = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const items = [
        { item: "Free Exam", path: "/free-exam" },
        { item: "Blogs", path: "/blogs" },
        { item: "Books", path: "/book-lists" },
        { item: "Account", path: "/auth" },
    ];

    const dropdownItems = [
        { item: "Bcs", path: "/services/bcs" },
        { item: "Bank", path: "/services/bank" },
        { item: "Govt", path: "/services/govt" },
        { item: "Private", path: "/services/private" },
        { item: "Interview", path: "/services/interview" },
    ];

    const dropdownItems2 = [
        { item: "Free Account", path: "/auth" },
        { item: "Premium Account", path: "/auth" },
    ];


    return (
        <div className="px-5 md:px-10 flex justify-between items-center py-5 bg-gray-100 sticky top-0 z-[9999] w-full">
            <Link href="/" className="text-3xl md:text-4xl italic flex items-center gap-2 font-bold hover:text-blue-500 duration-200">
                <FaBookOpen className="text-blue-500" /> Online Exam
            </Link>

            <div className="md:hidden">
                <RiMenuFold3Fill
                    className="text-4xl text-blue-500 cursor-pointer"
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                />
            </div>

            <nav className="HomeNav hidden md:flex items-center">
                {/* Services Dropdown */}
                <div className="relative group cursor-pointer">
                    <span className="hover:bg-blue-500 hover:text-white px-4 py-2 rounded-md duration-200">
                        Services
                    </span>
                    <ul className="absolute top-full left-0 hidden group-hover:flex flex-col space-y-2 bg-white p-4 shadow-md w-[250px]">
                        {dropdownItems.map((item, index) => (
                            <Link
                                key={index}
                                href={item.path}
                                className="block text-gray-700 hover:text-blue-500"
                            >
                                {item.item}
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* Static Items */}
                {items.map((item, index) => (
                    <Link
                        key={index}
                        href={item.path}
                        className={`hover:text-blue-500 px-4 py-2 ${path.includes(item.path) ? "text-blue-500" : ""
                            }`}
                    >
                        {item.item}
                    </Link>
                ))}

               

                {/* Profile Section */}
                <Link href={"/profile"} title="Profile" className="cursor-pointer">
                    <Image
                        src={demoProfilePhoto}
                        width={48}
                        height={48}
                        alt="profile photo"
                        className="rounded-full hover:rotate-6 duration-200"
                    />
                </Link>
            </nav>


            {/* Mobile Menu */}
            {isMenuOpen && (
                <div className="absolute top-[70px] left-0 w-full bg-gray-100 p-6 flex flex-col items-start gap-4 md:hidden z-10">
                    {items.map((item, index) => (
                        <Link
                            href={item.path}
                            key={index}
                            className={`text-xl font-medium hover:text-blue-500 duration-200 ${path.includes(item.path) ? "text-blue-500" : ""
                                }`}
                        >
                            {item.item}
                        </Link>
                    ))}

                    {/* Services Dropdown */}
                    <div className="w-full">
                        <button
                            onClick={() => toggleDropdown("services")}
                            className="text-xl font-medium w-full text-left hover:text-blue-500 duration-200"
                        >
                            Services
                        </button>
                        {openDropdown === "services" && (
                            <div className="ml-4 mt-2 flex flex-col">
                                {dropdownItems.map((item, index) => (
                                    <Link
                                        href={item.path}
                                        key={index}
                                        className="text-lg hover:text-blue-500 duration-200 py-1"
                                    >
                                        {item.item}
                                    </Link>
                                ))}
                            </div>
                        )}
                    </div>

                   

                    {/* Profile Section */}
                    <Link href={"/profile"} title="Profile" className="cursor-pointer">
                        <Image
                            src={demoProfilePhoto}
                            width={48}
                            height={48}
                            alt="profile photo"
                            className="rounded-full hover:rotate-6 duration-200"
                        />
                    </Link>
                </div>
            )}
        </div>
    );
}
