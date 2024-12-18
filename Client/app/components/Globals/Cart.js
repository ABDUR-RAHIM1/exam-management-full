"use client";
import { postDataHandler } from "@/app/actions/users/postData";
import { contextApi } from "@/app/contextApi/Context";
import Image from "next/image";
import React, { useContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export default function Cart({ bgColor, textColor }) {
    const { cart, setCart } = useContext(contextApi);
    const [isCartVisible, setIsCartVisible] = useState(false); // Cart visibility state
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);
    const [loading, setLoading] = useState(false);

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };

    useEffect(() => {
        if (cart && cart.length > 0) {
            setSelectedCourses(cart);
            const total = cart.reduce((acc, course) => acc + course.offerPrice, 0);
            setTotalPrice(total);
        }  
    }, [cart]);


    const handleCreatePost = async () => {
        setLoading(true);
        try {
            const data = {
                course: cart,
                paymentStatus: true,
            };
            const postApi = "/user/purchase";
            const { status, result } = await postDataHandler(data, "POST", postApi);
            console.log(result)
            if (status === 201) {
                toast.success(result.message);
                setCart([]);
            } else {
                toast.error(result.message);
            }
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong!");
        } finally {
            setLoading(false);
        }
    };

    const bgColorCode = bgColor ? bgColor : "bg-white";
    const textColorCode = textColor ? textColor : "text-gray-800";

    return (
        <div>
            {/* Show Button */}
            {!isCartVisible && (
                <div
                    onClick={toggleCartVisibility}
                    className="fixed bg-yellow-500 rounded-full p-4 cursor-pointer text-white bottom-10 left-4 z-50 flex items-center gap-2 shadow-lg hover:bg-yellow-600 transition"
                >
                    {/* Cart Icon */}
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M3.75 4.5h16.5M4.5 8.25h15M6.75 8.25v9m10.5-9v9m-6.75-9h3m-3 9h3M8.625 18.375a.375.375 0 10.75 0 .375.375 0 00-.75 0zm6-.375a.375.375 0 10.75 0 .375.375 0 00-.75 0z"
                        />
                    </svg>
                    <span className="font-semibold text-sm">
                        View Courses ({cart.length})
                    </span>
                </div>
            )}


            {/* Cart Section */}
            {isCartVisible && (
                <div
                    className={`fixed top-[150px] left-4 z-50 p-4 w-[300px] h-auto rounded-lg shadow-lg ${bgColorCode}`}
                >
                    {/* Hide Button */}
                    <button
                        onClick={toggleCartVisibility}
                        className="absolute top-0 right-0 mt-[-10px] mr-[-10px] text-2xl bg-red-600 text-white py-2 px-4 rounded-full hover:bg-red-700 shadow-lg"
                    >
                        ×
                    </button>

                    <h2 className={`text-lg font-bold border-b pb-2 mb-4 ${textColorCode}`}>
                        Cart
                    </h2>
                    <div className="flex flex-col gap-4">
                        {selectedCourses.length > 0 ? (
                            selectedCourses.map((course) => (
                                <div
                                    key={course._id}
                                    className="flex items-center justify-between bg-gray-100 p-2 rounded-md"
                                >
                                    <div>
                                        <p className="font-semibold text-gray-800">{course.title}</p>
                                        <p className="text-sm text-gray-600">
                                            Offer Price: ৳{course.offerPrice}
                                        </p>
                                    </div>
                                    <Image
                                        width={100}
                                        height={100}
                                        src={course.schedule}
                                        alt={course.title}
                                        className="w-12 h-12 rounded-lg"
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-center text-gray-500">No courses in cart.</p>
                        )}
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <p className="font-bold text-gray-800">Total: ৳{totalPrice}</p>
                        <button
                            onClick={handleCreatePost}
                            className="w-full bg-blue-500 text-white py-2 mt-2 rounded-md hover:bg-blue-600"
                        >
                            {loading ? "Processing..." : "Proceed to Payment"}
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
