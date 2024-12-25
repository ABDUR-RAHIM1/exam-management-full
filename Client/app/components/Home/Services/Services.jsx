import { demoImg } from '@/app/DemoData/DemoImg'
import servicesData from '@/app/DemoData/ServicesData'
import Heading from '@/app/helpers/Heading'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


export default function Services() {
    return (
        <div className=' wrap   bg-gray-100 '>
            <Heading text={"Achieve Your Goals with Our Course Selection"} />

            <div className=' flex items-center justify-between flex-wrap'>
                {
                    servicesData.map((service, index) => (
                        <div key={index} className=' w-full md:w-[48%] my-5 p-3 bg-gray-50 shadow-md'>
                            <div className=' w-full h-[350px] overflow-hidden'>
                                <Image
                                    width={500}
                                    height={500}
                                    src={demoImg}  // image change letter
                                    alt={service.title}
                                    className={`${index % 2 === 0 ? "rounded-br-[150px]" : "rounded-bl-[150px]"} w-full h-full hover:scale-110 duration-200`} here
                                />
                            </div>
                            <h2 className='cardTitle'>{service.title}</h2>
                            <p>{service.description}</p>

                            <Link href={"/"} className=' text-2xl inline-block underline text-red-500 font-medium my-5'>Apply Now</Link>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}
