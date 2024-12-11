"use client";

import React, { useContext, useState, useEffect } from "react";
import { contextApi } from "@/app/contextApi/Context";
import { postDataHandler } from "@/app/actions/users/postData";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function CheckOutPage() {
    const { cart, setCart } = useContext(contextApi);
    const router = useRouter()
    const [selectedCourses, setSelectedCourses] = useState([]);
    const [totalPrice, setTotalPrice] = useState(0);

    const [loading, setLoading] = useState(false)

    useEffect(() => {
        if (cart && cart.length > 0) {
            setSelectedCourses(cart);
            const total = cart.reduce((acc, course) => acc + course.offerPrice, 0);
            setTotalPrice(total);
        } else {
            // router.push("/profile/course-lists")
            toast.warning("No Course Choosen!")
        }

    }, [cart]);


    const handleCreatePost = async () => {
        setLoading(true)
        try {
            const data = {
                course: cart,
                paymentStatus: true
            }
            const postApi = "/user/purchase"
            const { status, result } = await postDataHandler(data, "POST", postApi);
            if (status === 201) {
                toast.success(result.message);
                setCart([])
            } else {
                toast.error(result.message)
            }

        } catch (error) {
            console.log(error)
            toast.error("somthing Wrong!")
        } finally {
            setLoading(false)
        }
    }

    return (
        <div className="p-6 max-w-4xl mx-auto">
            <h1 className="text-2xl font-bold mb-4">Checkout Page</h1>

            {/* Display selected courses */}
            <div className="space-y-4">
                {selectedCourses.map((course) => (
                    <div
                        key={course._id}
                        className="border p-4 rounded-lg shadow-sm flex justify-between items-center"
                    >
                        <div>
                            <h2 className="text-lg font-semibold">{course.title}</h2>
                            <p className="text-sm text-gray-600">{course.desc}</p>
                            <p className="text-sm font-medium text-blue-500">
                                Duration: {course.duration}
                            </p>
                            <p className="text-sm font-medium text-gray-500">
                                Regular Price: <del>৳{course.regularPrice}</del>
                            </p>
                            <p className="text-sm font-medium text-green-600">
                                Offer Price: ৳{course.offerPrice}
                            </p>
                        </div>
                        <img
                            src={course.schedule.src}
                            alt={course.title}
                            className="w-20 h-20 object-cover rounded-lg"
                        />
                    </div>
                ))}
            </div>

            {/* Total Price Section */}
            <div className="mt-6">
                <h2 className="text-lg font-semibold">Total Price</h2>
                <p className="text-2xl font-bold text-green-600">৳{totalPrice}</p>
            </div>

            {/* Checkout Button */}
            <div className="mt-6">
                <button onClick={handleCreatePost} className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
                    {
                        loading ? "Proccesing . . ." : " Proceed to Payment"
                    }
                </button>
            </div>
        </div>
    );
}
