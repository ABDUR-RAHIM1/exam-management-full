import { demoProfilePhoto } from '@/app/DemoData/DemoImg'
import Image from 'next/image'
import React from 'react'

export default function ProfileInfo({ profileInfo }) {
    return (
        <div className=' my-5'>
            <Image
                width={50}
                height={50}
                src={profileInfo.photo || demoProfilePhoto}
                alt={`tickmarq user Photo ${profileInfo.name}`}
                className="w-24 h-24 rounded-full mb-3 m-auto"
            />
            <h2 className="text-lg font-semibold text-gray-200 capitalize text-center">{profileInfo?.name}</h2>
            <p className="text-sm text-gray-400 text-center">
                {profileInfo.emailPhone}
            </p>

            <div className=' bg-gray-200 h-[2px] w-full my-4'/>
        </div>
    )
}
