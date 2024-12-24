"use client";
import { contextApi } from "@/app/contextApi/Context";
import Image from "next/image";
import React, { useContext } from "react";

export default function Routinee() {
    const { manageData } = useContext(contextApi);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-6">
            {/* Title */}
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Routine</h1>

            {/* Routine Image */}
            <div className="border rounded-lg overflow-hidden shadow-lg max-w-3xl">
                <Image
                    src={manageData}
                    width={800}
                    height={600}
                    alt="Routine"
                    className="w-full h-auto"
                />
            </div>

        </div>
    );
}
