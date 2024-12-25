"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { MdDelete, MdEdit } from "react-icons/md";

export default function UserTable({ data }) {
    const [userData, setUserData] = useState([]);

    useEffect(() => {
        setUserData(data); // Set initial data
    }, [data]);

    // Define table columns
    const columns = [
        {
            name: "Photo",
            cell: (row) => (
                <Image
                    width={50}
                    height={50}
                    src={row.photo}
                    alt="User Photo"
                    style={{ width: "40px", height: "40px", borderRadius: "50%" }}
                />
            )
        },
        {
            name: "Name",
            selector: (row) => row.name,
            sortable: true,
        },
        {
            name: "Email/Phone",
            selector: (row) => row.emailPhone,
            sortable: true,
        },

        {
            name: "College",
            selector: (row) => row.collage,
        },
        {
            name: "Address",
            selector: (row) => row.address,
        },
        {
            name: "Payment Status",
            cell: (row) =>
                row.isPayment ? (
                    <span style={{ color: "green" }}>Paid</span>
                ) : (
                    <span style={{ color: "red" }}>Unpaid</span>
                ),
        },
        {
            name: "Actions",
            cell: (row) => (
                <div>
                    <button
                        onClick={() => handleEdit(row)}
                        style={{
                            marginRight: "10px",
                            backgroundColor: "blue",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "5px",
                        }}
                    >
                        <MdEdit className="text-xl"/>
                    </button>
                    <button
                        onClick={() => handleDelete(row._id)}
                        style={{
                            backgroundColor: "red",
                            color: "white",
                            border: "none",
                            borderRadius: "5px",
                            padding: "5px",
                        }}
                    >
                        <MdDelete className="text-xl"/>
                    </button>
                </div>
            ),
            ignoreRowClick: true,
            allowOverflow: true,
            button: true,
        },
    ];

    // Handlers for actions
    const handleEdit = (user) => {
        alert(`Editing user: ${user.name}`);
        // Add your edit logic here
    };

    const handleDelete = (userId) => {
        const confirm = window.confirm("Are you sure you want to delete this user?");
        if (confirm) {
            setUserData(userData.filter((user) => user._id !== userId));
        }
    };

    return (
        <div>
            <h2>User Management</h2>
            <DataTable 
                columns={columns}
                data={userData}
                pagination
                highlightOnHover
                responsive
                subHeader
                subHeaderComponent={<input placeholder="Search Users..." />}
            />
        </div>
    );
}
