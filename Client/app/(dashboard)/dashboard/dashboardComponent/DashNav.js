"use client"
import { contextApi } from '@/app/contextApi/Context'
import React, { useContext } from 'react'
import { MdMenu } from 'react-icons/md'

export default function DashNav() {

    const { dashArrowClick, setDashArrowClick } = useContext(contextApi)
   
    return (
        <div className=' fixed top-0 left-0 w-full bg-gray-100 z-[999] flex items-center justify-between px-5 py-5  '>
            <div className=' text-4xl font-bold italic'>
                <h2>Tickmark<span className='text-5xl font-extrabold text-blue-800 italic shadow-2xl'>q</span></h2>
            </div>
            <nav>
                <span onClick={() => setDashArrowClick(!dashArrowClick)} className=' text-5xl cursor-pointer'>
                    <MdMenu />
                </span>
            </nav>
        </div>
    )
}
