"use client"

import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdDelete } from 'react-icons/md';

export default function BlogTable({ blogs }) {

    const [blogData, setBlogData] = useState([]); // Initialize with an empty array

    useEffect(() => {
        if (blogs) {
            setBlogData(blogs);
        }
    }, [blogs]);

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
            cell: (row) => <Image width={50} height={50} src={row.photo} alt={row.title} className="w-16 h-16 object-cover my-2 rounded-md" />,
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
            selector: (row) => <div className={`px-2 py-1 ${row.status === "accept" ? "bg-green-200 text-green-900" : row.status === "pending" ? "bg-yellow-300 text-yellow-900" : "bg-red-200 text-red-900"}`}>
                {row.status}
            </div>,
            sortable: true,
        },
        {
            name: "User",
            selector: (row) => row.user.name,
        },
        {
            name: "Created At",
            selector: (row) => new Date(row.createdAt).toLocaleDateString(),
            sortable: true,
        },
        {
            name: "Delete",
            selector: (row) => <button 
                className='bg-red-800 text-white border-none rounded-sm p-1'
            >
                <MdDelete className="text-xl" />
            </button>,
            sortable: true,
        },
    ];

    return (
        <div>
            <DataTable
                columns={columns}
                data={blogData}
                pagination
                highlightOnHover
                responsive
                subHeader
            />
        </div>
    )
}
