"use client"
import { AuthPostHandler } from '@/app/actions/users/authPostHandler';
import useFileUploader from '@/app/helpers/fileUploader';
import { useToken } from '@/app/hooks/useToken';
import Cookies from 'js-cookie';
import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

const RegistrationPage = () => {
    const { uploader, uploadResponse, imgUrl } = useFileUploader()
    const [loading, setLoading] = useState(false);
    const [isClick, setIsClick] = useState(false); // Determines Login or Signup
    const router = useRouter();
    const token = useToken();

    useEffect(() => {
        if (token) {
            toast.info("You are already logged in!");
            setTimeout(() => {
                router.push("/profile");
            }, 1000);
        }
    }, [token]);

    const [formData, setFormData] = useState({
        name: "",
        emailPhone: '',
        password: '',
        photo: '',
        collage: '',
        address: '',
    });

    const handleChange = (e) => {
        const { type, name, value, files } = e.target;

        if (type === "file") {
            uploader(files[0])
        }

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // imageUrl set the formState after uploading
    useEffect(() => {
        if (imgUrl) {
            setFormData({
                ...formData,
                photo: imgUrl,
            })
        }
    }, [imgUrl]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        const apiEndpoint = isClick ? "/user/login" : "/user/register";

        try {
            // Make API call using `AuthPostHandler`
            const { result, status } = await AuthPostHandler(formData, apiEndpoint);
            console.log(result)
            if (status === 200) {
                toast.success(result.message);

                if (isClick) { // Login case
                    // Cookies.set("userToken", result.token, { expires: 2 / 24 });
                    Cookies.set("userToken", result.token);
                    router.refresh()
                    router.push("/profile");
                } else {
                    toast.info("Registration successful! Please log in.");
                    setIsClick(true);
                }
            } else {
                toast.error(result.message); // Handle failure case
            }
        } catch (error) {
            console.error(error);
            toast.error("An unexpected error occurred!");
        } finally {
            setLoading(false);
        }
    };
    console.log(formData)

    const { status, message } = uploadResponse; // form fileUploader hook

    const getStatusClass = (status) => {
        if (status === 102) return "text-yellow-500";
        if (status === 200) return "text-green-600";
        if (!status) return "text-black";
        return "text-red-500";
    };

    return (
        <div className="min-h-screen py-20 flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-lg">
                <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-6">
                    {isClick ? "Login" : "Sign Up"}
                </h1>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {!isClick && (
                        <>
                            <div className="mb-4">
                                <label className={getStatusClass(status)}>
                                    {message || "Your Photo"}
                                </label>
                                <input
                                    type="file"
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Enter photo URL"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Name:</label>
                                <input
                                    type="text"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Enter your Good name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Collage:</label>
                                <input
                                    type="text"
                                    name="collage"
                                    value={formData.collage}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Enter your collage name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 font-medium mb-2">Address:</label>
                                <input
                                    type="text"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    className="input"
                                    placeholder="Enter your address"
                                />
                            </div>
                        </>
                    )}
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Email/Phone:</label>
                        <input
                            type="text"
                            name="emailPhone"
                            value={formData.emailPhone}
                            onChange={handleChange}
                            className="input"
                            required
                            placeholder="Enter your email or phone"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="block text-gray-700 font-medium mb-2">Password:</label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className="input"
                            required
                            placeholder="******"
                        />
                    </div>
                    <button
                        type="submit"
                        className="loginBtn"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : (isClick ? "Login" : "Signup")}
                    </button>
                </form>
                <p className="text-center text-gray-600 mt-4">
                    {isClick ? "Don't have an account?" : "Already have an account?"}
                    <span
                        onClick={() => setIsClick(!isClick)}
                        className="text-blue-500 hover:underline cursor-pointer ml-2"
                    >
                        {isClick ? "Sign Up Here" : "Login Here"}
                    </span>
                </p>
            </div>
        </div>
    );
};

export default RegistrationPage;
