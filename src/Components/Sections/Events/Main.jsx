import React from "react";
import MockInterviewCarousel from "./Carousel";
import DateButton2 from "./Button2";
import Progarm1 from "../../../assets/Programs/Program1.png"
import Progarm2 from "../../../assets/Programs/Program2.png"
import Progarm3 from "../../../assets/Programs/Program3.png"
import Progarm4 from "../../../assets/Programs/Program4.png"
const mockInterviews = [
    {
        id: 1,
        title: "TradeStorm",
        presenter: "COMET'25 presents",
        details: [
            "Ready to test your trading skills in a risk-free, simulated stock market environment? Here’s your chance to shine and take the first step toward a rewarding career!",
            "✨ Why You Can’t Miss This:",
            "✔️ Internship Interview Opportunities with top organizations await!",
            "✔️ Win from a prize pool worth ₹80,000 💰",
            "✔️ Learn, compete, and grow in a thrilling mock trading experience.",
            "✔️ Showcase your skills to stand out in a competitive field.",
            
        ],
        image: Progarm2, // Remove the curly braces
        link: "https://example.co https://unstop.com/o/UbTqEkW?lb=uMYaY9nS&utm_medium=Share&utm_source=shortUrlm",
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
        image: Progarm4, // Remove the curly braces
        link: "https://unstop.com/o/NdwHlp4?lb=uMYaY9nS&utm_medium=Share&utm_source=shortUrl",
    },
    {
        id: 3,
        title: "ADSAVVY",
        presenter: "COMET'25 presents",
        details: [
            "Unleash your creativity at ADSAVVY! 💡 Test your marketing skills, craft ideas that sell, and tell stories that stick.",
            "Compete in virtual and on-ground rounds for cash-prizes worth ₹17.5K. 🌟 Battle it out at IIT Roorkee! 🏆 Register now!",
            "https://www.instagram.com/p/DFUsyBWIu-e/?igsh=dGg5ejRjNzJsNXBm",
            
        ],
        image: Progarm1, // Remove the curly braces'
        link: "https://unstop.com/o/cYVLeTz?lb=uMYaY9nS&utm_medium=Share&utm_source=shortUrl",
    },
];

const Main = () => {
    return (
        <main>
            <div className="flex flex-col items-center justify-center p-16">
                <MockInterviewCarousel mockInterviews={mockInterviews} />

            </div>
            <DateButton2/>
            <div className="flex flex-col items-center justify-center p-16">
                <MockInterviewCarousel mockInterviews={mockInterviews} />
            </div>
        </main>

    );
};

export default Main;
