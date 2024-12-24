import React from 'react'

export default function Marque() {
    return (
        <div className='w-full h-[65px] bg-blue-300 text-white flex items-center justify-between'>
            <div className='w-auto px-5 text-3xl font-bold bg-blue-600 h-full flex items-center justify-center '>
                News
            </div>
            <div className='flex-1 px-3'>
                <marquee width="100%" direction="left" height="100%">
                    <p className=' font-bold text-3xl'>  This is a sample scrolling text that has scrolls texts to the right.</p>
                </marquee>
            </div>
        </div>
    )
}
