"use client";
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { MdDelete, MdEdit, MdOutlineMoreVert } from "react-icons/md";
import demoPhoto from "@/public/Images/profile.png"
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { contextApi } from '@/app/contextApi/Context';
import { deleteHandler } from '@/app/actions/users/deleteHandler';
import { toast } from 'react-toastify';

export default function BlogPost(props) {
    const { setManageData } = useContext(contextApi)
    const { status, result } = props.blog || {};
    const [blogs, setBlogs] = useState([]);
    const [activeRowId, setActiveRowId] = useState(null);
    const router = useRouter()


    useEffect(() => {
        if (status === 200 && result) {
            setBlogs(result);
        }
    }, [status, result]);

    if (status !== 200) {
        return <p>Blog Not Found</p>;
    }

    const handleClickAction = (id) => {
        setActiveRowId((prevId) => (prevId === id ? null : id));
    };

    const getColorWithStatus = (status) => {
        if (status === "pending") return "bg-yellow-700"
        if (status === "accept") return "bg-green-600"
        if (status === "reject") return "bg-red-600"
    }


    /// edit blog handler
    const handleEditBlog = (blog) => {
        setManageData(blog);
        router.push("/profile")
    }

    const handleDeleteBlog = async (id) => {
        try {
            const deleteApi = `/user/blogs/${id}`
            const { status, result } = await deleteHandler(deleteApi);

            if (status === 200) {
                toast.success(result.message);
                router.refresh()
            }

        } catch (error) {
            console.log(error)
            toast.error("Delete Failed!")
        }
    }

    const columns = [
        {
            name: 'Title',
            selector: (row) => <div>
                <Link href={`/blogs/${row._id}`} className=' font-semibold hover:text-blue-500 hover:underline'>{row.title && row.title.length > 15 ? row.title.slice(0, 15) + " . . ." : row.description}</Link>
                <small className=' my-2 inline-block text-blue-900'>{new Date(row.createdAt).toLocaleDateString()}</small>
            </div>,
            sortable: true,
        },
        {
            name: 'Photo',
            cell: (row) => (
                <Image
                    src={row.photo || demoPhoto}
                    width={50}
                    height={50}
                    alt="Blog"
                    className='w-[70px] h-[70px] rounded-md my-5'
                />
            ),
            sortable: false,
        },
        {
            name: "Status",
            selector: row => <button className={` ${getColorWithStatus(row.status)} px-4 py-2  text-white rounded-md mr-2`}>{row.status}</button>
        },
        {
            name: "Actions",
            selector: (row) => (
                <div className="">
                    <button
                        onClick={() => handleClickAction(row._id)}
                        className="relative z-[11] px-4 py-2 text-blue-600 rounded-md"
                    >
                        <span className="relative text-2xl font-bold">
                            <MdOutlineMoreVert />
                        </span>
                    </button>

                    {activeRowId === row._id && (
                        <div className="py-2 px-3 flex gap-3 justify-around bg-gray-300 absolute top-[-11px] left-[-11px] ">
                            <span onClick={() => handleEditBlog(row)} className=' text-3xl font-bold p-1 rounded-md text-white bg-blue-500'><MdEdit /></span>
                            <span onClick={() => handleDeleteBlog(row._id)} className=' text-3xl font-bold p-1 rounded-md text-white bg-red-500'><MdDelete /></span>
                        </div>
                    )}
                </div>
            ),
        },
    ];

    return (
        <DataTable
            title="Blog Posts"
            columns={columns}
            data={blogs}
            pagination
            highlightOnHover
            pointerOnHover
        />
    );
}
