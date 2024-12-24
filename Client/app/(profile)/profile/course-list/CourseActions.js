"use client"
import { contextApi } from '@/app/contextApi/Context'
import { useRouter } from 'next/navigation'
import React, { useContext } from 'react'

export default function CourseActions(props) {
    const router = useRouter()
    const { setManageData } = useContext(contextApi)
    const { routinee } = props

    const handleRoutineeClick = (routinee) => {
        router.push("/profile/routine")
        setManageData(routinee)
    }
    return (
        <button onClick={() => handleRoutineeClick(routinee)} className=' w-full py-2 px-5 inline-block bg-green-500 text-white my-3'>
            Routinee
        </button>
    )
}
