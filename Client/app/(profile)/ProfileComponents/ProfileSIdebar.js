import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import { MdEdit } from 'react-icons/md'
import ActionsBtn from './ActionBtn'
import ProfileSidebarMobile from './ProfileSidebarMobile'
import ProfileItems from './ProileItems'

export default function ProfileSIdebar({ profileInfo }) {
 

    return (

        <>
            <div className="w-full hidden md:block" >
                <div className=' my-5'>
                    <div className='w-24 h-24 my-3 m-auto relative'>
                        <Image
                            width={50}
                            height={50}
                            src={profileInfo?.photo || demoProfilePhoto}
                            alt={`tickmarq user Photo ${profileInfo.name}`}
                            className=" w-full h-full rounded-full mb-3 m-auto "
                        />
                        <div className="absolute -bottom-2 -right-2">
                            <ActionsBtn userData={profileInfo} />
                        </div>
                    </div>
                    <h2 className="text-lg font-semibold text-gray-200 capitalize text-center">{profileInfo?.name}</h2>
                    <p className="text-sm text-gray-400 text-center">
                        {profileInfo.emailPhone}
                    </p>

                    <div className=' bg-gray-200 h-[2px] w-full my-4' />
                </div>
                <div className="space-y-3">
                    {
                        ProfileItems && ProfileItems.map((item, index) => (
                            <Link href={item.path} key={index} className={` w-full inline-block hover:bg-gray-700 px-4 py-2 rounded text-center md:text-left font-[500] capitalize text-yellow-50`}>
                                {item.item}
                            </Link>
                        ))
                    }
                </div>
                <div style={{ height: "1000px" }}></div>
            </div >
            {/* mobile view te ata dekahbe  */}
            <div className='block md:hidden'>
                <ProfileSidebarMobile />
            </div>
        </>
    )
}
