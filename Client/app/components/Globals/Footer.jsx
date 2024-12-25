import Link from 'next/link';
import React from 'react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa'; // For social media icons

export default function Footer() {
    return (
        <footer className="bg-gray-800 text-white py-8">
            <div className="wrap mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-5 md:px-20">
                {/* Column 1: About */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">About Us</h3>
                    <p className="text-sm text-gray-400">
                        We are dedicated to helping students prepare for competitive exams with the best study materials, mock tests, and tips from professionals.
                    </p>
                </div>

                {/* Column 2: Quick Links */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Quick Links</h3>
                    <ul className="text-sm space-y-2">
                        <li><a href="#" className="hover:text-blue-400">Home</a></li>
                        <li><a href="#" className="hover:text-blue-400">Courses</a></li>
                        <li><a href="#" className="hover:text-blue-400">Exam Dates</a></li>
                        <li><a href="#" className="hover:text-blue-400">Contact Us</a></li>
                        <li><Link href="/about" className="hover:text-blue-400">About Us</Link></li>
                    </ul>
                </div>

                {/* Column 3: Contact & Social Media */}
                <div className="space-y-4">
                    <h3 className="text-xl font-bold">Contact Us</h3>
                    <p className="text-sm text-gray-400">Email: support@examapp.com</p>
                    <p className="text-sm text-gray-400">Phone: +880 123-456-7890</p>
                    <div className="flex space-x-4 mt-4">
                        <a href="#" className="hover:text-blue-400"><FaFacebookF /></a>
                        <a href="#" className="hover:text-blue-400"><FaTwitter /></a>
                        <a href="#" className="hover:text-blue-400"><FaLinkedinIn /></a>
                        <a href="#" className="hover:text-blue-400"><FaInstagram /></a>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="mt-8 border-t border-gray-700 pt-4 text-center text-sm text-gray-400">
                <p>&copy; {new Date().getFullYear()} Online Exam Application. All rights reserved.</p>
            </div>
        </footer>
    );
}
