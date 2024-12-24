"use client"
import { demoImg2, demoImg3 } from '@/app/DemoData/DemoImg';
import Heading from '@/app/helpers/Heading';
import Image from 'next/image';
import React from 'react';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'; // import slideshow styles

// Sample testimonials data
const testimonials = [
    {
        image: demoImg3,
        name: "John Doe",
        feedback: "This platform helped me prepare for my exams in a structured and efficient way. The materials are top-notch!",
        date: "2024-09-15"
    },
    {
        image: demoImg2,
        name: "Jane Smith",
        feedback: "I loved the flexibility of learning at my own pace. The mock tests were really helpful in building my confidence.",
        date: "2024-09-20"
    },
    {
        image: demoImg3,
        name: "Michael Johnson",
        feedback: "The study resources are comprehensive and up to date. I couldn't have done better without them!",
        date: "2024-09-25"
    }
];

export default function Testimonials() {
    return (
        <div className='wrap bg-gray-100 py-10'>
            <Heading text={"What Our Students Say"} sub={"Testimonials from students"} center={true} />

            <div className="relative slide-container py-10">
                <Zoom scale={0.4} cssClass="custom-slide">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="p-8 py-16 bg-white rounded-lg shadow-md text-center mx-2">
                            <Image
                                width={500}
                                height={500}
                                src={testimonial.image}
                                alt={testimonial.name}
                                className="mx-auto mb-4 rounded-full w-20 h-20 object-cover"
                            />
                            {/* Testimonial Feedback */}
                            <p className="text-lg italic">{testimonial.feedback}</p>
                            <h3 className="mt-4 text-xl font-semibold">{testimonial.name}</h3>
                            <p className="text-sm text-gray-500">{testimonial.date}</p>
                        </div>
                    ))}
                </Zoom>

            </div>
        </div>
    );
}
