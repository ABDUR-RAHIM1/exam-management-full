"use client";
import { postDataHandler } from "@/app/actions/users/postData";
import { adminLogin } from "@/app/constans/constans";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { toast } from "react-toastify";

export default function AdminAuth() {

    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        role: "admin", // Default role
        password: "",
    });



    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try { 
            const { result, status } = await postDataHandler(formData, "POST", adminLogin);

            if (status === 200) {
                toast.success(result.message);
                Cookies.set("examAdminToken", result.token); // Use Cookies.set
                router.refresh()
                router.push("/dashboard"); // Use router.push directly
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.error("Error during login:", error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="px-5 md:px-0 py-16 flex flex-col lg:flex-row items-center justify-between h-screen bg-gray-100">
            {/* Left Section */}
            <div className="w-full h-screen md:w-[50%] bg-blue-600 flex items-center justify-center text-white">
                <div className="text-center p-8">
                    <h1 className="text-4xl font-bold">Admin Portal</h1>
                    <p className="mt-4 text-lg">Welcome back! Please login to access your dashboard.</p>
                </div>
            </div>


            {/* Right Section */}
            <div className="px-10 mr-0 md:mr-5 w-full md:w-[45%] bg-white shadow-md rounded-lg p-6">
                <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>
                <form className="space-y-4" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-semibold mb-1">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            className="input w-full"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="role" className="block text-sm font-semibold mb-1">
                            Role
                        </label>
                        <select
                            id="role"
                            name="role"
                            value={formData.role}
                            onChange={handleInputChange}
                            className="input w-full"
                            required
                        >
                            <option value="admin">Admin</option>
                            <option value="moderator">Moderator</option>
                        </select>
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-semibold mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleInputChange}
                            className="input w-full"
                            placeholder="Enter your password"
                            required
                        />
                    </div>
                    <button type="submit" className="loginBtn">
                        {loading ? "Loading ..." : "Login"}
                    </button>
                </form>
            </div>
        </div>
    );
}
