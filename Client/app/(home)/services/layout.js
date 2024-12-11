 
// Metadata for the page
export const metadata = {
    title: "Online Exam Services - Prepare for Success with Mock Tests & Resources",
    description: "Access top-notch online exam services, mock tests, and free study resources to boost your exam preparation. Suitable for competitive exams, job placement tests, and more.",
    keywords: "online exams, mock tests, study resources, competitive exams, exam preparation, free learning resources, job exam practice",
};




export default function ServicesLayout({ children }) {

    return (

        <div className="flex flex-col md:flex-row bg-gray-50 my-0">
            {/* Main Content */}
            <main className="flex-1 px-4 py-5 border-b md:border-b-0 md:border-r border-gray-200">
                {children}
            </main>

            {/* Sidebar */}
            <aside className="w-full md:w-[300px] p-4 bg-gray-100 rounded-lg shadow-md md:h-auto">
                <h2 className="text-xl font-bold mb-4 text-blue-600">Free Resources</h2>
                <ul className="list-disc list-inside space-y-3">
                    <li>
                        <a
                            href="https://www.10minuteschool.com"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            10 Minute School
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.khanacademy.org"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Khan Academy
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.coursera.org/courses?query=free"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Free Courses on Coursera
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.edx.org/free-online-courses"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            Free edX Courses
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://ocw.mit.edu/index.htm"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-500 hover:underline"
                        >
                            MIT OpenCourseWare
                        </a>
                    </li>
                </ul>
            </aside>
        </div>

    );
}
