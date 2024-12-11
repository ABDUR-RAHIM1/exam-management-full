import servicesData2 from '@/app/DemoData/ServicesData2';
import Link from 'next/link';
import React from 'react';

export default function Services() {


    return (
        <div className="pageWrap">
            <h1 className="text-3xl font-bold text-center mb-6">Services</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesData2.map((service, index) => (
                    <div key={index} className="bg-white shadow-lg rounded-lg p-4 hover:shadow-xl transition-shadow duration-300">
                        <h2 className="text-[17px] font-semibold mb-2">{service.title}</h2>
                        <p className="text-gray-700 mb-4 text-[14px]">{service.description}</p>
                        <Link
                            href={`/services/details/${service.id}`}
                            className="inline-block bg-blue-500 text-white py-2 px-3 text-[14px] rounded hover:bg-blue-600"
                        >
                            Learn More
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    );
}
