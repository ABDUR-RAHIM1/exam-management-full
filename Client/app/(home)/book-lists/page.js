import { demoImg2, dummyPdf } from '@/app/DemoData/DemoImg';
import Heading from '@/app/helpers/Heading';
import Image from 'next/image';
import React from 'react';

const BookLists = () => {


    const books = Array.from({ length: 40 }, (_, index) => ({
        id: index + 1,
        title: `Pdf dummy Books Title ${index + 1}`,
        author: `Author ${index + 1}`,
        pdf: `link-to-pdf-${index + 1}`,
        image: index % 2 === 0 ? demoImg2 : dummyPdf,
    }));



    return (
        <div className="px-5 md:px-10 py-10 bg-gray-50 overflow-hidden">
            <Heading text={"PDF Books"} center={true} />
            <div className=' my-16 w-full md:w-[60%] m-auto'>
                <input type="search"
                    name='search'
                    className='py-4 px-3 w-full rounded-md border-2 border-gray-500 focus:outline-none'
                    placeholder='Search The Book'
                />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {books.map((book) => (
                    <div key={book.id} className="bg-white shadow-lg rounded-lg p-4">
                        <div className=' w-full h-[250px] overflow-hidden  '>
                            <Image
                                src={book.image}
                                width={500}
                                height={500}
                                alt={book.title}
                                className='w-full h-full hover:scale-125 duration-200'
                            />
                        </div>
                        <div className=' my-5'>
                            <h2 className="text-xl font-semibold">{book.title}</h2>
                            <p className="text-gray-700">Author: {book.author}</p>
                            <a
                                href={book.pdf}
                                className="mt-4 inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Read PDF
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BookLists;
