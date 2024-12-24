"use client";

import { deleteHandler } from "@/app/actions/users/deleteHandler";
import { postDataHandler } from "@/app/actions/users/postData";
import { deleteBlog, putBlogStatus } from "@/app/constans/constans";
import { noImg } from "@/app/DemoData/DemoImg";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { MdDelete } from "react-icons/md";
import { toast } from "react-toastify";

export default function BlogTable({ blogs }) {
    const [blogData, setBlogData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (blogs) {
            setBlogData(blogs);
        }
    }, [blogs]);

    // Status change handler
    const handleStatusChange = async (e, id) => {
        const { value } = e.target;
        setLoading(true);
        try {
            const statusData = { status: value };
            const editBlogStatusApi = `${putBlogStatus + id}`;
            const { status, result } = await postDataHandler(statusData, "PUT", editBlogStatusApi);

            if (status === 200) {
                toast.success(result.message);
                setBlogData((prevData) =>
                    prevData.map((item) =>
                        item._id === id ? { ...item, status: value } : item
                    )
                );
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    };

    // Delete handler
    const handleDelete = async (id) => {
        setLoading(true);
        try {
            const deleteApi = `${deleteBlog + id}`;
            const { status, result } = await deleteHandler(deleteApi);

            if (status === 200) {
                toast.success("Blog deleted successfully!");
                setBlogData((prevData) => prevData.filter((item) => item._id !== id));
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Failed to delete blog!");
        } finally {
            setLoading(false);
        }
    };

    // Columns for Data Table
    const columns = [
        {
            name: "ID",
            selector: (row, index) => <span>{index + 1}</span>,
            sortable: true,
        },
        {
            name: "Photo",
            selector: (row) => row.photo,
            cell: (row) => (
                <Image
                    width={500}
                    height={500}
                    src={row.photo || noImg}
                    alt={row.title}
                    className="w-16 h-16 object-cover my-2 rounded-md"
                />
            ),
        },
        {
            name: "Title",
            selector: (row) => row.title,
            sortable: true,
        },
        {
            name: "Description",
            selector: (row) => row.description,
            sortable: true,
            cell: (row) => <div className="truncate max-w-xs">{row.description}</div>,
        },
        {
            name: "Status",
            selector: (row) => (
                <div
                    className={`px-2 py-1 ${row.status === "accept"
                        ? "bg-green-200 text-green-900"
                        : row.status === "pending"
                            ? "bg-yellow-200 text-yellow-900"
                            : "bg-red-200 text-red-900"
                        } rounded-sm`}
                >
                    <select
                        onChange={(e) => handleStatusChange(e, row._id)}
                        name="status"
                        id="blogStatus"
                        value={row.status} // Default value from database
                        className="border-none focus:outline-none bg-transparent"
                    >
                        <option value="pending">Pending</option>
                        <option value="accept">Accept</option>
                        <option value="reject">Reject</option>
                    </select>
                </div>
            ),
            sortable: true,
        },
        {
            name: "Author",
            selector: (row) => <p>
                {row.author?.name} <small>({row.author?.role})</small>
            </p>,
        },
        {
            name: "Created At",
            selector: (row) => new Date(row.createdAt).toLocaleDateString(),
            sortable: true,
        },
        {
            name: "Delete",
            selector: (row) => (
                <button
                    className="bg-red-800 text-white border-none rounded-sm p-1"
                    onClick={() => handleDelete(row._id)}
                >
                    <MdDelete className="text-xl" />
                </button>
            ),
            sortable: true,
        },
    ];

    return (
        <div>
            {loading && <p>Loading...</p>}
            <DataTable
                columns={columns}
                data={blogData}
                pagination
                highlightOnHover
                responsive
                subHeader
            />
        </div>
    );
}
