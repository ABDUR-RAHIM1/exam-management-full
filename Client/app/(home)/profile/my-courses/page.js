import { getDataHandler } from '@/app/actions/users/getData';
import React from 'react';
import PurcheseCard from '../profileComponent/PurchesCard.';

export default async function MyCourses() {
    const { result } = await getDataHandler('/user/purchase/me');

    if (!result || result.length === 0) {
        return <p className='my-10 text-red-600'>No courses found!</p>;
    }

    return (
        <div className="p-4 py-10 bg-gray-50">
            <h1 className="text-2xl font-bold mb-4">My Courses</h1>
            <div className=' flex flex-wrap justify-between gap-5 md:gap-0'>
                <div className=" w-full md:w-[34%] flex justify-between flex-wrap gap-4">
                    {result.map((courseData) => (
                        <PurcheseCard key={courseData._id} courseData={courseData} />
                    ))}
                </div>
                <div className=' w-full md:flex-1 ml-0 md:ml-4 border-l border-gray-400 px-3 '>
                    right side
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, hic a. Consequatur et dolor placeat praesentium reprehenderit illo ipsum, ex sapiente repellat adipisci debitis ad laborum velit hic odit veritatis unde quam assumenda nostrum. Unde aliquid beatae sequi, modi consequuntur numquam repellendus reiciendis rerum culpa adipisci eaque hic obcaecati aliquam praesentium quam facere eum ea dolores ipsum officia. Quae perspiciatis libero, exercitationem explicabo necessitatibus consequatur sunt architecto quis possimus illum perferendis, obcaecati quod, labore vero eum nam soluta itaque rerum sed. Ab natus perspiciatis illum voluptates sunt at necessitatibus aut cum numquam debitis minima ratione magni voluptatem, itaque possimus aliquid!
                </div>

            </div>
        </div>
    );
}
