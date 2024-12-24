import React, { useContext } from 'react';
import { contextApi } from '@/app/contextApi/Context';
import { FaShoppingCart } from 'react-icons/fa';
import Link from 'next/link';

export default function Cart() {
    const { cart } = useContext(contextApi);

    return (
        <Link href={"/profile/checkout"} className="relative inline-block ">
            {/* Cart Icon */}
            <FaShoppingCart className="text-4xl text-gray-700 cursor-pointer hover:text-red-600" />

            {/* Cart Length Badge */}
            {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold py-0.5 px-2 rounded-full">
                    {cart.length}
                </span>
            )}
        </Link>
    );
}
