"use client"
import React, { useState } from "react";

export default function Cart({ bgColor, textColor }) {
    const [isCartVisible, setIsCartVisible] = useState(false); // Cart visibility state

    const toggleCartVisibility = () => {
        setIsCartVisible(!isCartVisible);
    };


    const bgColorCode = bgColor ? bgColor : "bg-white"
    const textColorCode = textColor ? textColor : "text-yellow-600"

    return (
        <div>
            {/* Show Button */}
            {!isCartVisible && (
                <div
                    onClick={toggleCartVisibility}
                    className="fixed bg-blue-600 rounded-md p-3 cursor-pointer text-white bottom-10 left-4 z-50"
                >
                    <p className="text-2xl font-bold">Show Cart</p>
                </div>
            )}

            {/* Cart Section */}
            {isCartVisible && (
                <div
                    className={`w-[300px] h-auto shadow-lg rounded-md fixed z-50 bottom-10 left-4 p-4 ${bgColorCode} ${textColor}  `}
                >
                    <h2 className="text-lg font-bold text-gray-700 border-b pb-2 mb-4">Cart</h2>
                    <div className="flex flex-col gap-4 relative">
                        {/* Example Cart Item */}
                        <div className="flex items-center justify-between bg-gray-100 p-2 rounded-md">
                            <div>
                                <p className={`font-semibold`}>Course Name</p>
                                <p className="text-sm text-gray-600">Price: $100</p>
                            </div>
                            <button className="text-red-500 font-bold hover:text-red-700">
                                Remove
                            </button>
                        </div>
                    </div>
                    <div className="mt-4 border-t pt-4">
                        <p className="font-bold text-gray-800">Total: $300</p>
                        <button className="w-full bg-blue-500 text-white py-2 mt-2 rounded-md hover:bg-blue-600">
                            Checkout
                        </button>
                    </div>
                    {/* Hide Button */}
                    <div
                        onClick={toggleCartVisibility}
                        className="bg-blue-600 rounded-md p-3 cursor-pointer text-white absolute top-[-40px] right-0"
                    >
                        <p className="text-2xl font-bold">Hide</p>
                    </div>
                </div>
            )}
        </div>
    );
}
