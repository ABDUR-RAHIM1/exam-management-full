import React from 'react'

export default function Heading({ text, sub, center }) {
    return (
        <div className={`${center ? "text-center" : ""} my-8`}>
            <h2 className={` text-2xl md:text-4xl font-bold my-5 `}>
                {text || "Heading missing!"}
            </h2>
            <h4 className=' text-xl md:text-2xl italic'>{sub || " "}</h4>
        </div>
    )
}
