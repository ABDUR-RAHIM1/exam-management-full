import Image from 'next/image';
import { demoImg, noImg } from '@/app/DemoData/DemoImg';
import Link from 'next/link';
import { getDataHandler } from '@/app/actions/users/getData';

export default async function BlogPage() {

    const blogApiMe = "/user/blogs"
    const { result } = await getDataHandler(blogApiMe)
    const acceptedBlogs = result && result.filter(blog => blog.status === "accept")
    const letestBlogs = acceptedBlogs && acceptedBlogs.slice(0, 6);

    return (
        <div className="flex flex-col lg:flex-row gap-6 p-6">

            <div className={`flex-1 bg-white p-6 rounded-lg shadow-md `}>
                <h2 className="text-3xl font-bold mb-6 text-blue-600">All Posts </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {
                        acceptedBlogs && acceptedBlogs.length > 0 &&
                        acceptedBlogs.map((blog) => (
                            <div
                                key={blog._id}
                                className="flex flex-col border rounded-lg p-4 hover:shadow-lg transition-shadow duration-200"
                            >
                                <Image
                                    src={blog.photo || noImg}
                                    alt={`Blog ${blog.id}`}
                                    width={500}
                                    height={300}
                                    className="w-full h-40 rounded-md mb-4"
                                />
                                <Link href={`/blogs/${blog._id}`} className="text-gray-700 mb-3 font-bold hover:text-blue-600 hover:underline duration-200">
                                    {blog.title.length > 35
                                        ? blog.title.slice(0, 35) + '...'
                                        : blog.title}
                                </Link>
                                <p className="text-gray-700 mb-3  ">
                                    {blog.description.length > 60
                                        ? blog.description.slice(0, 60) + '...'
                                        : blog.description}
                                </p>
                                <p className="text-gray-500 text-sm">
                                    Published on: {new Date(blog.createdAt).toDateString()}
                                </p>
                            </div>
                        ))}
                </div>
            </div>

            {/*  right side */}
            <div className="w-full lg:w-[30%] bg-blue-50 p-6 rounded-lg shadow-md">
                <h2 className="text-3xl font-bold mb-6 text-blue-600">Latest Post</h2>
                <div className="flex flex-col border rounded-lg p-4">
                    {
                        letestBlogs && letestBlogs.map((blog, index) => (
                            <div className=' flex gap-3' key={index}>
                                <p className=' font-bold'>{index + 1 + ". "}</p>
                                <Link href={`/blogs/${blog._id}`} className="text-blue-700 mb-3 font-bold hover:text-blue-600 hover:underline duration-200">
                                    {blog.title.length > 35
                                        ? blog.title.slice(0, 35) + '...'
                                        : blog.title}
                                </Link>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    );
}
