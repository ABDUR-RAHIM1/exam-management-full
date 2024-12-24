import React from "react";
import { FaShieldAlt, FaUserFriends, FaChartLine } from "react-icons/fa";
import examImg from "@/public/Images/exam.png";
import Image from "next/image";

export default function AboutPage() {
    return (
        <div className="about-page bg-gradient-to-b from-blue-100 to-white py-16 px-8">
            {/* Hero Section */}
            <div className="text-center mb-16">
                <h1 className="text-5xl font-extrabold text-blue-700">About Us</h1>
                <p className="text-lg text-gray-600 mt-4">
                    Empowering educators and students with innovative online exam solutions.
                </p>
                <div className="mt-8">
                    <Image
                        src={examImg}
                        width={500}
                        height={500}
                        alt="Online Exam Management"
                        className="mx-auto rounded-lg shadow-lg"
                    />
                </div>
            </div>

            {/* Mission and Vision Section */}
            <div className="grid md:grid-cols-2 gap-12 mb-16">
                <div className="bg-white shadow-lg p-8 rounded-lg">
                    <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Mission</h2>
                    <p className="text-gray-700 text-base leading-7">
                        To revolutionize the way exams are conducted by making them accessible,
                        secure, and efficient for educators and students alike.
                    </p>
                </div>
                <div className="bg-white shadow-lg p-8 rounded-lg">
                    <h2 className="text-3xl font-semibold text-blue-500 mb-4">Our Vision</h2>
                    <p className="text-gray-700 text-base leading-7">
                        To become the global leader in online exam solutions, helping institutions
                        embrace digital transformation with ease and confidence.
                    </p>
                </div>
            </div>

            {/* Features Section */}
            <div className="mb-16">
                <h2 className="text-4xl font-bold text-blue-500 text-center mb-10">
                    Why Choose Us?
                </h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="feature bg-white shadow-lg p-6 rounded-lg text-center">
                        <FaShieldAlt className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Secure Exams</h3>
                        <p className="text-gray-600 mt-2">
                            Ensure integrity with advanced anti-cheating technologies.
                        </p>
                    </div>
                    <div className="feature bg-white shadow-lg p-6 rounded-lg text-center">
                        <FaUserFriends className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">
                            User-Friendly Interface
                        </h3>
                        <p className="text-gray-600 mt-2">
                            Intuitive design for seamless navigation for all users.
                        </p>
                    </div>
                    <div className="feature bg-white shadow-lg p-6 rounded-lg text-center">
                        <FaChartLine className="text-4xl text-blue-500 mx-auto mb-4" />
                        <h3 className="text-xl font-semibold text-gray-800">Analytics</h3>
                        <p className="text-gray-600 mt-2">
                            Get detailed insights on performance for better decision-making.
                        </p>
                    </div>
                </div>
            </div>

            {/* Team Section */}
            <div className="team-section text-center">
                <h2 className="text-4xl font-bold text-blue-500 mb-10">Meet Our Team</h2>
                <div className="grid md:grid-cols-3 gap-8">
                    <div className="team-member bg-white shadow-lg p-6 rounded-lg">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">John Doe</h3>
                        <p className="text-sm text-gray-500">CEO & Founder</p>
                    </div>
                    <div className="team-member bg-white shadow-lg p-6 rounded-lg">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">Jane Smith</h3>
                        <p className="text-sm text-gray-500">CTO</p>
                    </div>
                    <div className="team-member bg-white shadow-lg p-6 rounded-lg">
                        <img
                            src="https://via.placeholder.com/150"
                            alt="Team Member"
                            className="w-24 h-24 mx-auto rounded-full mb-4"
                        />
                        <h3 className="text-lg font-semibold text-gray-800">Sam Wilson</h3>
                        <p className="text-sm text-gray-500">Lead Developer</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
