import React from 'react'

export default function NoDataFound({ text }) {
    return (
        <div className=' w-full h-screen flex flex-col items-center justify-center text-center py-10 '>
            <h1 className=' text-3xl text-red-500 italic'>
                {text || "No Data Found!"}
            </h1>
        </div>
    )
}
