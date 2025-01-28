import React from "react";
import MockInterviewCarousel from "./Carousel";

const mockInterviews = [
    {
        id: 1,
        title: "MOCK INTERVIEWS II 2024",
        presenter: "COMET'25 presents",
        details: [
            "Solve real-world problems with advanced data analytics and machine learning, powered by KOED Learning. Prizes worth ₹65K!"
        ],
        image: "/api/placeholder/600/800"
    },
    {
        id: 2,
        title: "POWERPLAY DRAFT",
        presenter: "COMET'25 presents",
        details: [
            "Gear up for the ultimate strategic showdown at COMET'25! 🏆 The Powerplay Draft is here to ignite your passion for team building, bidding, and crafting winning plans. 🎯",
            "✨ Prizes worth ₹12K🎁 Goodies & Certificates for winners",
            "📅 Join us on 8th-9th February!📢 Limited registrations: Only 300 slots available!📱 Scan the QR code to register now!",
        ],
        image: "/api/placeholder/600/800"
    },
    {
        id: 3,
        title: "MOCK INTERVIEWS II 2024",
        presenter: "IIT Roorkee presents",
        details: [
            "Interview panel consists of industry professionals with 5+ years of experience to help you prepare for actual interviews",
            "Across all core engineering domains at IIT Roorkee, SDE, Data Science/ML, Consultancy, Product Management, Finance and more.",
            "Interview feedback and detailed report along with resume analysis will be provided.",
            "A student can register for only one interview."
        ],
        image: "/api/placeholder/600/800"
    },
];

const Main = () => {
    return (
        <main>
            <div className="flex flex-col items-center justify-center p-16">
                <MockInterviewCarousel mockInterviews={mockInterviews} />
            </div>
            <div className="flex flex-col items-center justify-center p-16">
                <MockInterviewCarousel mockInterviews={mockInterviews} />
            </div>
        </main>

    );
};

export default Main;
