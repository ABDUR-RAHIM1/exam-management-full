"use client"
import { contextApi } from '@/app/contextApi/Context'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function ActionsBtn({ userData }) {
    const { setManageData } = useContext(contextApi);
    const router = useRouter()
    const handleEditProfile = () => {
        setManageData(userData)
        router.push("/profile/settings/edit-profile")
    }

    return (
        <button
            onClick={handleEditProfile}
            className=" bg-black text-white px-2 py-1 rounded-full hover:bg-blue-600"
            title="Edit Profile"
        >
            ✎
        </button>
    )
}
