"use client";
import { contextApi } from "@/app/contextApi/Context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import { FaRegCircleQuestion } from "react-icons/fa6";
import { MdOutlineDashboardCustomize } from "react-icons/md";
import { TbDeviceTabletQuestion } from "react-icons/tb"
import { SiThefinals  } from "react-icons/si"
import { BiSolidPurchaseTag   } from "react-icons/bi"
import { IoCreate } from "react-icons/io5";
import { BsClipboardDataFill  } from "react-icons/bs";
import { GrCertificate   } from "react-icons/gr";
import { CiSettings   } from "react-icons/ci";

export default function Sidebar() {
    const { dashArrowClick, setDashArrowClick } = useContext(contextApi);
    const path = usePathname();

    const items = [
        {
            parentItem: "Home",
            childItem: [
                { icon: <MdOutlineDashboardCustomize />, item: "Dashboard", path: "/dashboard" },
            ],
        },
        {
            parentItem: "Questions",
            childItem: [
                { icon: <FaRegCircleQuestion  />, item: "Add Question", path: "/dashboard/questions/add" },
                { icon: <TbDeviceTabletQuestion />, item: "All Questions", path: "/dashboard/questions/all" },
            ],
        },
        {
            parentItem: "Courses",
            childItem: [
                { icon: <IoCreate  />, item: "Create Course", path: "/dashboard/courses/add" },
                { icon: <BsClipboardDataFill  />, item: "All Course", path: "/dashboard/courses/all" },
                { icon: <BiSolidPurchaseTag  />, item: "Purchase", path: "/dashboard/courses/purchase" },
            ],
        },
        {
            parentItem: "Results",
            childItem: [
                { icon: <SiThefinals />, item: "Exam Results", path: "/dashboard/exam-results" },
                { icon: <GrCertificate  />, item: "Certificate", path: "/dashboard/results/certificate" },
            ],
        },
        {
            parentItem: "Settings",
            childItem: [
                { icon: <CiSettings  />, item: "Profile Settings", path: "/dashboard/settings/profile" },
                { icon: <CiSettings  />, item: "Account Settings", path: "/dashboard/settings/account" },
            ],
        },
    ];

    return (
        <div
            className={`${dashArrowClick ? "w-[80px] px-5" : "w-[200px] pr-5"} pt-20
                h-screen overflow-y-scroll transition-all duration-300 border-r border-gray-300`}
        >
            <ul>
                {items.map((item, index) => (
                    <div key={index} className="my-4">
                        <h4
                            className={`${path.includes(item.parentItem.toLowerCase())
                                ? "bg-blue-500 text-white"
                                : "bg-gray-200 text-gray-700"
                                } font-bold my-2 px-3 py-3 rounded-r-full`}
                        >
                            {item.parentItem}
                        </h4>
                        {item.childItem.map((childItem, idx) => (
                            <li key={idx} className="mb-2 pl-5">
                                <Link
                                    href={childItem.path}
                                    className={`${path === childItem.path
                                        ? "text-blue-500 font-medium border border-gray-300 rounded-md bg-white"
                                        : "text-gray-600 hover:text-gray-800"
                                        } text-[13px] capitalize font-semibold w-full   py-2 px-2 flex items-start gap-2 `}
                                >
                                    <span className=" text-xl">{childItem.icon}</span>
                                    {childItem.item}
                                </Link>
                            </li>
                        ))}
                    </div>
                ))}
            </ul>
        </div>
    );

}
