import Link from 'next/link'

export default function NotFound() {
    return (
        <div className='w-full h-screen flex flex-col items-center justify-center'>
            <h2 className=' text-2xl to-red-500'>Not Found</h2>
            <p>Could not find requested resource</p>
            <Link href="/">Return Home</Link>
        </div>
    )
}