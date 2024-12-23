import React from "react";
import Image from "next/image";
import { demoImg, noImg } from "@/app/DemoData/DemoImg";
import { getDataHandler } from "@/app/actions/users/getData";
import { MdPerson, MdAccessTime } from "react-icons/md";
import Link from "next/link";

export default async function BlogDetails({ params }) {
    const { blogId } = params;
    const blogApiMe = "/user/blogs"
    const { result } = await getDataHandler(blogApiMe)
    const BlogDetails = result && result.find(blog => blog._id === blogId)

    const { title, description, photo, author, createdAt } = BlogDetails
    const titleWords = title.split(/\s+/).map(word => word.toLowerCase());

    const relatedPosts = result.filter(blog => {
        if (blog._id === blogId) return false; // Exclude the current blog
        const blogTitleWords = blog.title.split(/\s+/).map(word => word.toLowerCase());
        return blogTitleWords.some(word => titleWords.includes(word)); // Check for matching words
    });



    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6">
            {/* Left Section: Blog Details */}
            <div className="flex-1 bg-white p-6 rounded-lg shadow-lg">
                {/* Blog Image */}
                <Image
                    src={photo || noImg}
                    alt="Blog Image"
                    width={800}
                    height={500}
                    loading="lazy"
                    className="w-full h-auto max-h-[500px] object-cover rounded-md mb-6"
                />

                {/* Author and Date */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-gray-600 mb-6 gap-4">
                    <p className="font-medium text-red-600 text-lg flex items-center gap-2">
                        <MdPerson className="text-2xl" />
                        <strong className=" capitalize">Author: {author.name} <span className=" text-blue-900">{`(${author.role})`}</span></strong>
                    </p>
                    <p className="text-red-600 text-lg flex items-center gap-2">
                        <MdAccessTime className="text-2xl" />
                        <span>Date: {new Date(createdAt).toDateString()}</span>
                    </p>
                </div>


                {/* Description */}
                <div className="text-gray-800 my-20 text-lg leading-relaxed">
                    <p className=" font-bold my-6 text-2xl">{title}</p>
                    {description && description.split(".").map((p, i) => (
                        <p key={i}>{p.trim()}.</p>
                    ))}
                </div>

                <Link href={"/blogs"} className="text-xl font-bold inline-block py-3 px-5 bg-blue-500 text-white rounded-md shadow-md">
                    Back
                </Link>

            </div>

            {/* Right Section: Additional Info */}
            <div className="w-full lg:w-[30%] bg-gray-50 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-blue-600 mb-4">
                    Related Posts
                </h2>
                <ul className="list-disc list-inside space-y-3">
                    {relatedPosts && relatedPosts.map((info, index) => (
                        <li
                            key={index}
                            className="text-gray-700 hover:text-blue-500 cursor-pointer transition"
                        >
                            <Link href={`/blogs/${info._id}`} className=" text-gray-700 mb-3 font-bold hover:text-blue-600 hover:underline duration-200">
                                {info.title.length > 35
                                    ? info.title.slice(0, 35) + '...'
                                    : info.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
