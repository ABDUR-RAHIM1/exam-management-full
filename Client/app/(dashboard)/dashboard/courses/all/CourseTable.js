"use client";
import { deleteHandler } from '@/app/actions/users/deleteHandler';
import { courseDelete } from '@/app/constans/constans';
import { contextApi } from '@/app/contextApi/Context';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';
import { toast } from 'react-toastify';

export default function CourseTable({ courseData }) {
    const { setManageData } = useContext(contextApi);
    const router = useRouter();
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

    const onEdit = (data) => {
        setManageData(data);
        router.push("/dashboard/courses/add");
    };

    const onDelete = async (data) => {
        console.log("Deleting:", data); // Add delete logic

        try {
            const deleleApi = `${courseDelete + data._id}`
            const { status, result } = await deleteHandler(deleleApi);
            if (status === 200) {
                toast.success(result.message)
                router.refresh()
            }
        } catch (error) {
            console.log(error)
            toast.error("Somthing Wrong!")
        }
    };

    const columns = [
        {
            name: 'Category',
            selector: row => (
                <Link
                    className="font-bold hover:text-blue-500 hover:underline transition-all"
                    href={`/dashboard/courses/${row._id}`}
                >
                    {row.category}
                </Link>
            ),
            sortable: true,
        },
        {
            name: 'Title',
            selector: row => row.title,
            sortable: true,
        },
        {
            name: 'Description',
            selector: row => <p>
                {row.desc && row.desc.length > 30 ? row.desc.slice(0, 30) : row.desc}
            </p>,
            sortable: false,
        },
        {
            name: 'Duration',
            selector: row => row.duration,
            sortable: true,
        },
        {
            name: 'Regular Price',
            selector: row => `৳${row.regularPrice}`,
            sortable: true,
        },
        {
            name: 'Offer Price',
            selector: row => `৳${row.offerPrice}`,
            sortable: true,
        },
        {
            name: ' Edit',
            cell: row => (
                <div className="flex gap-2 bg-red-500">
                    <button
                        className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                        onClick={() => onEdit(row)}
                    >
                        Edit
                    </button>
                </div>
            ),
        },

        {
            name: ' Delete',
            cell: row => (
                <div className="flex gap-2 bg-red-500">
                    <button
                        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                        onClick={() => onDelete(row)}
                    >
                        Delete
                    </button>
                </div>
            ),
        },
    ];

    if (!isMounted) return null;

    return (
        <div className="p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Course Table</h2>
            <DataTable
                columns={columns}
                data={courseData}
                pagination
                highlightOnHover
                striped
            />
        </div>
    );
}
