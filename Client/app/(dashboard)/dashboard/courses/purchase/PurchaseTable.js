"use client"
import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component';

export default function PurchaseTable({ data }) {
    const [isClient, setIsClient] = useState(true)
    useEffect(() => {
        setIsClient(!isClient)
    }, [])

    if (isClient) {
        return "No Data Found"
    }

    let courseCount = 0
    data.forEach(element => {
        // console.log(element.course.length)
        const course = element.course.length
        courseCount += course
    });
    console.log(courseCount)

    const columns = [
        {
            name: '#',
            selector: (row, index) => index + 1,
            sortable: true,
            width: '50px',
        },
        {
            name: 'User Name',
            selector: (row) => row.user.name,
            sortable: true,
        },
        {
            name: 'Email/Phone',
            selector: (row) => row.user.emailPhone,
            sortable: true,
        },
        {
            name: 'Address',
            selector: (row) => row.user.address,
            sortable: true,
        },
        {
            name: 'Course Count',
            selector: (row) => row.course.length,
            sortable: true,
            center: true,
        },
        {
            name: 'Payment Status',
            selector: (row) => (row.paymentStatus ? 'Paid' : 'Pending'),
            sortable: true,
            center: true,
        },
        {
            name: 'Enrolled',
            selector: (row) => (row.isEnrolled ? 'Yes' : 'No'),
            sortable: true,
            center: true,
        },
        {
            name: 'Completed',
            selector: (row) => (row.isCompleted ? 'Yes' : 'No'),
            sortable: true,
            center: true,
        },
        {
            name: 'Purchase Date',
            selector: (row) => new Date(row.purchaseDate).toLocaleDateString(),
            sortable: true,
            center: true,
        },
    ];

    return (
        <div className="mt-6 py-5 w-full overflow-x-scroll">
            <h2 className="text-xl font-bold mb-4">{`Manage Purchase Courses ${courseCount} `}</h2>
            <DataTable
                columns={columns}
                data={data}
                pagination
                highlightOnHover
                responsive
                striped
                defaultSortFieldId={1}
            />
        </div>
    )
}
