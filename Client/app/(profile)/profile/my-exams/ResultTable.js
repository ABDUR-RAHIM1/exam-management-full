"use client"
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import { MdDownload } from 'react-icons/md'

export default function ResultTable({ data }) {
    const [isClient, setIsClient] = useState(true)
    useEffect(() => {
        setIsClient(!isClient)
    }, [])
    console.log(data)

    const columns = [
        {
            name: "Category",
            selector: row => row.questionCategory
        },
        {
            name: "Course",
            selector: row => row.questionTitle
        },
        {
            name: "isComplete",
            selector: row => row.isComplete,
            cell: row => (
                <span className={`${row.isComplete ? "bg-green-600" : "bg-red-600"} p-1 text-white`}>
                    {row.isComplete ? "Yes" : "No"}
                </span>
            ),
        },
        {
            name: "Right A",
            selector: row => row.rightAnswers
        },
        {
            name: "Wrong A",
            selector: row => row.wrongAnswers
        },
        {
            name: "Total Q",
            selector: row => row.wrongAnswers + row.rightAnswers
        },
        {
            name: "Total Mark",
            selector: row => row.totalMark ? row.totalMark : "N/A"
        },
        {
            name: "View",
            selector: row => <Link href={`/results/${row._id}`} className=' inline-block py-2 px-3 bg-blue-700 text-white rounded-md font-bold'>
                Details
            </Link>
        },
        {
            name: "Download",
            selector: row => <Link href={`/results/pdf/${row._id}`} className=' flex items-center gap-1 py-2 px-3 bg-blue-500 text-white rounded-md font-bold'>
                PDF <MdDownload className=' text-xl' />
            </Link>
        },
    ]

    if (isClient) {
        return "Loading . . . "
    }
    return (
        <div className="p-4 bg-white rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Results</h2>
            <DataTable
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                striped
            />
        </div>
    )
}
