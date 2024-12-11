import servicesData2 from '@/app/DemoData/ServicesData2';
import React from 'react';

export default function ServiceDetails({ params }) {
    const { serviceId } = params;
    const details = params.serviceId && servicesData2.find(s => s.id === Number(serviceId)); // Use find instead of filter to get the exact match

    if (!details) {
        return <div className="text-center">Service not found</div>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6">
            <h1 className="text-4xl font-bold mb-4">{details.title}</h1>
            <p className="text-lg text-gray-700 mb-6">{details.description}</p>

            <div className="bg-gray-100 p-4 rounded-lg shadow-md">
                <h2 className="text-2xl font-semibold mb-2">Service Details:</h2>
                <p className="text-gray-700 mb-2">
                    <strong>Category:</strong> {details.category}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Duration:</strong> {details.duration}
                </p>
                <p className="text-gray-700 mb-2">
                    <strong>Price:</strong> {details.price}
                </p>
                {/* Add more fields as needed */}
            </div>

            {/* You can add additional sections here */}
            <div className="mt-6">
                <h3 className="text-xl font-semibold">Why choose this service?</h3>
                <p className="text-gray-700">{details.benefits}</p>
            </div>
        </div>
    );
}
