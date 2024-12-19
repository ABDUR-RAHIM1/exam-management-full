"use client";

import { deleteHandler } from "@/app/actions/users/deleteHandler";
import { questionDelete } from "@/app/constans/constans";
import { contextApi } from "@/app/contextApi/Context";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { toast } from "react-toastify";

export default function QuestionTable({ data }) {
    const { setManageData } = useContext(contextApi)
    const [isClient, setIsClient] = useState(true);
    const router = useRouter();

    useEffect(() => {
        setIsClient(!isClient);
    }, []);

    if (isClient) {
        return "Data Not Found!";
    }

    // Define edit handler
    const handleEdit = (questionData) => {
        // console.log(questionData)
        // setManageData(questionData)
        // router.push("/dashboard/questions/add")
        alert("Under Proccesing . . .")
    };

    // Define delete handler
    const handleDelete = async (questionId) => {
        try {
            const deleteEndpoint = `${questionDelete + questionId}`
            const { status, result } = await deleteHandler(deleteEndpoint)
            if (status === 200) {
                toast.success(result.message)
                router.refresh()
            }
        } catch (error) {
            console.log(error)
            toast.error("Delete Failed!")
        }
    };

    // Define columns for the data table
    const columns = [
        {
            name: "Category",
            selector: (row) => <Link className=" text-blue-500 hover:underline" href={`/dashboard/questions/all/${row._id}`}>
                {row.questionCategory}
            </Link>,
            sortable: true,
        },
        {
            name: "Title",
            selector: (row) => row.questionTitle,
            sortable: true,
        },
        {
            name: "Exam Date",
            selector: (row) =>
                new Date(row.examDate).toLocaleDateString("en-US"),
            sortable: true,
        },
        {
            name: "Exam Time",
            selector: (row) => row.examTime,
            sortable: false,
        },
        {
            name: "Total Questions",
            selector: (row) => row.questions.length,
            sortable: true,
        },
        {
            name: "Edit",
            cell: (row) => (
                <button
                    className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600"
                    onClick={() => handleEdit(row)}
                >
                    Edit
                </button>
            ),
        },
        {
            name: "Delete",
            cell: (row) => (
                <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    onClick={() => handleDelete(row._id)}
                >
                    Delete
                </button>
            ),

        },
    ];

    return (
        <div className="p-4">
            <h2 className="text-2xl font-bold mb-4">Question Table</h2>
            <DataTable
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                striped
                responsive
                customStyles={{
                    headCells: {
                        style: {
                            backgroundColor: "#1e3a8a82",
                            fontWeight: "bold",
                            textAlign: "left",
                        },
                    },
                }}
            />
        </div>
    );
}
