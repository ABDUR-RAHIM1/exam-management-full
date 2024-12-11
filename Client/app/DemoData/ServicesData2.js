import { routineeImg } from "./DemoImg";

const coursesData = [
    {
        _id: "1", // Unique identifier
        title: "BCS Special",
        category: "Government Jobs",
        desc: "Comprehensive preparation for BCS with detailed guidance and mock tests.",
        books: ["General Knowledge by XYZ", "Bangladesh Affairs by ABC", "Mock Test Series"],
        duration: "6 months",
        schedule: routineeImg,
        regularPrice: 15000,
        offerPrice: 13000,
        note: "24 hour support"
    },
    {
        _id: "2", // Unique identifier
        title: "Bank Recruitment Masterclass",
        category: "Banking Sector",
        desc: "Focused course on bank recruitment with weekly exams and skill improvement.",
        books: ["Banking Aptitude Guide", "Reasoning Skills Handbook", "Current Affairs 2024"],
        duration: "4 months",
        schedule: routineeImg,
        regularPrice: 12000,
        offerPrice: 11000,
        note: "24 hour support"
    },
    {
        _id: "3", // Unique identifier
        title: "NTRC Teaching Mastery",
        category: "Teaching",
        desc: "Tailored course for government teaching exams with pedagogy and practical exercises.",
        books: ["Teaching Methods by XYZ", "NTRC Question Bank"],
        duration: "5 months",
        schedule: routineeImg,
        regularPrice: 13000,
        offerPrice: 11500,
        note: "24 hour support"
    },
    {
        _id: "4", // Unique identifier
        title: "Primary School Preparation",
        category: "Teaching",
        desc: "Preparation course for primary school teacher recruitment exams.",
        books: ["Primary Pedagogy Guide", "Child Development Textbook"],
        duration: "3 months",
        schedule: routineeImg,
        regularPrice: 10000,
        offerPrice: 8500,
        note: "24 hour support"
    }
];

export default coursesData;
