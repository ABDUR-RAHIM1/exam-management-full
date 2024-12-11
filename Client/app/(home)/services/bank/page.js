import Heading from '@/app/helpers/Heading';
import React from 'react';

export default function BankPage() {

    const BankDemoData = Array.from({ length: 8 }, (_, index) => ({
        id: index + 1,
        category: `Bank Category ${index + 1}`,
        price: `৳${(index + 3) * (index + 1) * 1000}`,
        duration: `${index + 2} months`,
        description: `This is a brief description for Bank Category ${index + 1}. It covers essential topics for Bank exam preparation.`,
        availableSeats: 50 - index * 5,
        startDate: `2024-0${index + 2}-01`,
        instructor: `Instructor ${String.fromCharCode(65 + index)}`,
        rating: (4.5 - index * 0.5).toFixed(1),
    }));

    return (
        <div className="px-4 py-8">
            <Heading text={"Bank Courses"} center={true} />
            <div className="servicesWrap">
                {BankDemoData.map((item) => (
                    <div
                        key={item.id}
                        className="servicesCard"
                    >
                        <h3>{item.category}</h3>
                        <p className="text-gray-600 mb-2">{item.description}</p>
                        <p className="font-bold">
                            Price: <span className="text-blue-600">{item.price}</span>
                        </p>
                        <p>Duration: {item.duration}</p>
                        <p>Available Seats: {item.availableSeats}</p>
                        <p>Start Date: {item.startDate}</p>
                        <p>Instructor: {item.instructor}</p>
                        <div className="servicesCard2">
                            <span>Rating: {item.rating}</span>
                            <button>
                                Enroll Now
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
