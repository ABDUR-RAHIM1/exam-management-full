"use client"
import React from 'react'
import { Fade } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';


import Image from 'next/image';

export default function Slider() {


    const slideImages = [
        {
            url: "/Images/1.png",
            caption: "Bank Job Preparation"
        },
        {
            url: "/Images/2.png",
            caption: " NTRC Job Preparation"
        },
        {
            url: "/Images/3.png",
            caption: "BCS Job Preparation"
        }
    ];

    return (
        <div className="w-full z-[-1]">
            <Fade>
                {slideImages.map((fadeImage, index) => (
                    <div key={index} className='relative h-[50vh] md:h-[80vh] lg:h-[90vh]'>
                        {/* Responsive image */}
                        <Image
                            src={fadeImage.url}
                            alt={fadeImage.caption}
                            width={500}
                            height={500}
                            className='w-full h-full object-cover z-[-1]'
                        />
                        {/* Caption */}
                        <div className='absolute bottom-5 left-5 bg-black bg-opacity-50 text-white p-2 rounded'>
                            <h2 className='text-lg md:text-2xl lg:text-3xl'>{fadeImage.caption}</h2>
                        </div>
                    </div>
                ))}
            </Fade>
        </div>
    )
}
