"use client"
import { API_URL } from '@/app/constans/constans';
import fileUploader from '@/app/helpers/fileUploader';
import React, { useState } from 'react'

export default function page() {
    const { uploader, fileLoading } = fileUploader()
    const [file, setFile] = useState("")

    const handleChange = async (e) => {
        const file = e.target.files[0];
        uploader(file)
    }
    console.log(fileLoading)
    // const handleChange = async (e) => {
    //     const fileValue = e.target.files[0];
    //     console.log(fileValue)
    //     setFile(fileValue)

    //     const formData = new FormData();
    //     formData.append("photo", fileValue)

    //     try {
    //         const response = await fetch(`${API_URL + "/test/upload"}`, {
    //             method: "POST",
    //             // headers: {
    //             //     "Content-type": "application/json"
    //             // },
    //             body: formData
    //         });

    //         const result = await response.json();
    //         console.log(result)
    //     } catch (error) {
    //         console.log("client error", error)
    //     }

    // }

    // const handleSubmit = async (e) => {
    //     e.preventDefault();

    //     const formData = new FormData();
    //     formData.append("photo", file)

    //     try {
    //         const response = await fetch(`${API_URL + "/test/upload"}`, {
    //             method: "POST",
    //             // headers: {
    //             //     "Content-type": "application/json"
    //             // },
    //             body: formData
    //         });

    //         const result = await response.json();
    //         console.log(result)
    //     } catch (error) {
    //         console.log("client error", error)
    //     }

    // }

    return (
        <form className=' w-full min-h-screen flex items-center justify-center flex-col'>
            <input onChange={handleChange} type="file" className='input' />
            <input type="text" name='email' onChange={handleChange} className='input' />
            <input type="text" name='email' onChange={handleChange} className='input' />
            <button className='loginBtn'>Submit</button>
        </form>
    )
}
