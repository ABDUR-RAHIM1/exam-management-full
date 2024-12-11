import Heading from '@/app/helpers/Heading'
import Link from 'next/link';
import React from 'react'

export default function Notice() {
    const notices = [
        { id: 1, title: 'Exam Date Announced', description: 'The final exam will be held on October 10th.', date: '2024-09-28' },
        { id: 2, title: 'Mock Test Results', description: 'Mock test results are available now.', date: '2024-09-15' },
        { id: 3, title: 'Exam Syllabus', description: 'Check the syllabus for the upcoming exam.', date: '2024-08-30' },
        { id: 4, title: 'Hall Ticket Download', description: 'Hall tickets are available for download.', date: '2024-08-25' }
    ];

    return (
        <div className='px-5 md:px-10  border-b border-gray-300'>
            <div className=' flex items-center justify-between flex-wrap'>
                <div className=" w-full md:w-[70%] overflow-x-auto py-10  border-gray-400 pr-0 md:pr-4">
                    <Heading text={"Notice Boards"} />

                    <table className="min-w-[700px] md:min-w-full bg-white border border-gray-300">
                        <thead>
                            <tr className="bg-gray-100 border-b">
                                <th className="text-left py-2 px-4">Title</th>
                                <th className="text-left py-2 px-4">Description</th>
                                <th className="text-left py-2 px-4">Date</th>
                                <th className="text-left py-2 px-4">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {notices.map((notice) => (
                                <tr key={notice.id} className="border-b hover:bg-gray-50">
                                    <td className="py-2 px-4">{notice.title}</td>
                                    <td className="py-2 px-4">{notice.description}</td>
                                    <td className="py-2 px-4">{notice.date}</td>
                                    <td className="py-2 px-4">
                                        <button className="bg-blue-500 px-3 py-2 text-white rounded-md hover:bg-blue-600 duration-200 text-[14px]  mr-4">View</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/*  right side */}

                <div className='w-full md:w-[28%]  py-10 my-5 md:my-0 p-4 border-0 md:border-l border-gray-400'>
                    <div className='my-5'>
                        <h2 className='text-lg font-bold mb-4'>Quick Links</h2>
                        <ul className='list-disc list-inside mb-6'>
                            <li><Link href="https://www.10minuteschool.com" target="_blank" rel="noopener noreferrer">10 Minute School</Link></li>
                            <li><Link href="https://www.shikhbe.shobai" target="_blank" rel="noopener noreferrer">Shikhbe Shobai</Link></li>
                            <li><Link href="https://www.bdjobstraining.com" target="_blank" rel="noopener noreferrer">Bdjobs Training</Link></li>
                            <li><Link href="https://www.skill.jobs" target="_blank" rel="noopener noreferrer">Skill Jobs</Link></li>
                            <li><Link href="https://www.sheiboi.com" target="_blank" rel="noopener noreferrer">Shei Boi</Link></li>
                        </ul>
                    </div>


                    <div className=' my-5'>
                        <h2 className='text-lg font-bold mb-4'>Subscribe for Updates</h2>
                        <form>
                            <input type="email" placeholder="Your Email" className='border p-2 mb-2 w-full' required />
                            <button type="submit" className='bg-blue-500 text-white py-2 px-4 rounded'>Subscribe</button>
                        </form>
                    </div>

                    {/* Google Ad Placeholder */}
                    <div className="google-ad w-full h-40 bg-gray-200 flex items-center justify-center rounded-lg">
                        {/* Placeholder text to represent ad space */}
                        <span className="text-gray-600">Google Ad Placeholder</span>
                    </div>




                </div>

            </div>

        </div>
    )
}
