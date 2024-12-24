"use client"
import { contextApi } from '@/app/contextApi/Context'
import React, { useContext } from 'react'
import { toast } from 'react-toastify';

export default function EnrolBtn({ courseData }) {
    const { cart, setCart } = useContext(contextApi);

    const handleClick = (data) => { 
        const isAlreadyInCart = cart.some(item => item._id === data._id);

        if (!isAlreadyInCart) {
            setCart([...cart, data]);  
        } else {
            toast.warning("Course is already in the cart.")
            console.log(`Course with id ${data._id} is already in the cart.`);
        }
    };

    return (
        <button
            onClick={() => handleClick(courseData)}
            className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
            Enroll Now
        </button>
    );
}
