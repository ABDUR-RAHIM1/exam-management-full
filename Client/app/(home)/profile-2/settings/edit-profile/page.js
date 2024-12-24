"use client"
import { postDataHandler } from '@/app/actions/users/postData';
import { contextApi } from '@/app/contextApi/Context';
import fileUploader from '@/app/helpers/fileUploader';
import { useRouter } from 'next/navigation';
import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const EditProfile = () => {
    const { manageData } = useContext(contextApi);
    const { uploader, uploadResponse, imgUrl } = fileUploader();
    const { message, status } = uploadResponse;
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const [formData, setFormData] = useState({
        name: "",
        photo: "",
        emailPhone: '',
        collage: '',
        address: '',
    });


    useEffect(() => {
        if (manageData !== null) {
            setFormData(manageData);
        }
    }, []);

    useEffect(() => {
        if (imgUrl !== "") {
            setFormData({
                ...formData,
                photo: imgUrl
            })
        }
    }, [imgUrl])

    const handleChange = (e) => {
        const { type, name, value, files } = e.target;
        if (type === "file") {
            uploader(files[0])
        }
        setFormData({ ...formData, [name]: value });
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("submit")
        const updateApi = `/user/update/${manageData?._id}`
        try {
            setIsLoading(true)
            const { result, status } = await postDataHandler(formData, "PUT", updateApi);
            if (status === 200) {
                toast.success(result.message)
                router.refresh()
            } else {
                toast.error(result.message)
            }
        } catch (error) {
            console.log(error)
            toast.error("Form Submit Failed")
        } finally {
            setIsLoading(false)
        }
    };

    const getStatusClass = (status) => {
        if (status === 102) return "text-yellow-500";
        if (status === 200) return "text-green-600";
        if (!status) return "text-black";
        return "text-red-500";
    };

    const isUpdate = manageData && Object.keys(manageData).length > 0

    return (
        <div className='w-full bg-gray-50 py-10'>
            <div className="p-4 max-w-lg mx-auto shadow-xl">
                <h2 className="text-xl font-semibold mb-4">Edit Your Account</h2>
                <form onSubmit={handleSubmit}>
                    {/* Profile Photo */}
                    <div className="mb-4">
                        <label className="block font-medium">
                            <p className={getStatusClass(status)}>
                                {message || "Profile Photo"}
                            </p>
                        </label>
                        <input
                            type='file'
                            name="photo"
                            onChange={handleChange}
                            required={!isUpdate}
                            className="input"
                        />
                    </div>

                    {/* name */}
                    <div className="mb-4">
                        <label className="block font-medium">Name</label>
                        <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                    </div>
                    {/* Email or Phone */}
                    <div className="mb-4">
                        <label className="block font-medium">Email or Phone</label>
                        <input
                            type="text"
                            name="emailPhone"
                            value={formData.emailPhone}
                            onChange={handleChange}
                            required
                            className="input"
                        />
                    </div>



                    {/* Collage */}
                    <div className="mb-4">
                        <label className="block font-medium">Collage</label>
                        <input
                            type="text"
                            name="collage"
                            value={formData.collage}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>

                    {/* Address */}
                    <div className="mb-4">
                        <label className="block font-medium">Address</label>
                        <input
                            type="text"
                            name="address"
                            value={formData.address}
                            onChange={handleChange}
                            className="input"
                        />
                    </div>

                    <button
                        disabled={isLoading}
                        type="submit"
                        className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-200"
                    >
                        {isLoading ? "Loading . . ." : "Update"}
                    </button>
                </form>
            </div>
        </div>

    );
};

export default EditProfile;
