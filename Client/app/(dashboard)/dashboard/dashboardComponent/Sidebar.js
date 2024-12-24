"use client";
import { contextApi } from "@/app/contextApi/Context";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useContext } from "react";
import items from "./SidebarItems";


export default function Sidebar() {
    const { dashArrowClick, setDashArrowClick } = useContext(contextApi);
    const path = usePathname();
 
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
