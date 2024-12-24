"use client"
import { postDataHandler } from "@/app/actions/users/postData";
import { contextApi } from "@/app/contextApi/Context";
import useFileUploader from "@/app/helpers/fileUploader";
import { useRouter } from "next/navigation";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function AddBlog() {
    const { manageData } = useContext(contextApi);
    const { uploader, uploadResponse, imgUrl } = useFileUploader();
    const [loading, setLoading] = useState(false);
    const router = useRouter();
    const isUpdateBlog = manageData && Object.keys(manageData).length > 0

    const [formData, setFormData] = useState({
        title: "",
        description: "",
        photo: ""
    });
    const handleChange = (e) => {
        const { type, name, value, files } = e.target;
        if (type === "file") {
            uploader(files[0])
        }
        setFormData({
            ...formData,
            [name]: value
        })

    }

    useEffect(() => {
        if (imgUrl) {
            setFormData({
                ...formData,
                photo: imgUrl
            })
        }
    }, [imgUrl])

    //  formData set after Edit Button Click
    useEffect(() => {
        if (manageData) {
            setFormData(manageData)
        }
    }, [manageData])

    const { message, status } = uploadResponse // from fileUplaoder.js

    const getStatusClass = (status) => {
        if (status === 102) return "text-yellow-500";
        if (status === 200) return "text-green-600";
        if (!status) return "text-black";
        return "text-red-500";
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {

            let status;
            let result;

            if (isUpdateBlog) {

                const putApi = `/user/blogs/${manageData._id}`;
                ({ status, result } = await postDataHandler(formData, "PUT", putApi));
            } else {
                const postApi = "/user/blogs";
                ({ status, result } = await postDataHandler(formData, "POST", postApi));
            }

            if (status === 201 || status === 200) {
                toast.success(result.message);
                router.refresh();
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    };



    return (
        <form onSubmit={handleSubmit} className="mb-4" >
            <h2 className="text-lg font-bold mb-2">
                {
                    isUpdateBlog ? "Update The Post" : "Create a New Post"
                }
            </h2>
            <input onChange={handleChange} type="text" value={formData.title} name="title" placeholder="Title" className="input my-4" />
            <textarea
                onChange={handleChange}
                className="w-full input"
                placeholder="What's on your mind?"
                rows="5"
                name="description"
                required
                value={formData.description}
            ></textarea>
            <div className=" my-4">
                <label htmlFor="file" className={getStatusClass(status)}>
                    {message || "Uplaod Photo"}
                </label>
                <input onChange={handleChange} type="file" className="input" id="file" />
            </div>
            <button className="bg-blue-500 w-full text-white px-4 py-2 rounded">
                {loading ? "Posting . . . " : isUpdateBlog ? "Update" : "Post"}
            </button>
        </form >
    );
}
