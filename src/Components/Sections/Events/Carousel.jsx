import React, { useState } from 'react';

const MockInterviewCarousel = ({ mockInterviews }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [showModal, setShowModal] = useState(false);
    const [selectedInterview, setSelectedInterview] = useState(null);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? mockInterviews.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === mockInterviews.length - 1 ? 0 : prev + 1));
    };

    const handleCardClick = (interview) => {
        setSelectedInterview(interview);
        setShowModal(true);
    };

    const getVisibleCards = () => {
        const cards = [];
        const length = mockInterviews.length;

        // Previous card
        const prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
        cards.push({ ...mockInterviews[prevIndex], position: 'left' });

        // Current card
        cards.push({ ...mockInterviews[currentIndex], position: 'center' });

        // Next card
        const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
        cards.push({ ...mockInterviews[nextIndex], position: 'right' });

        return cards;
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-4 py-8 h-[600px] border-2 border-gray-300 rounded-lg overflow-hidden">
            {/* Navigation Arrows */}
            <button
                onClick={handlePrevious}
                className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white text-4xl md:text-5xl hover:text-orange-500 transition-colors"
                aria-label="Previous"
            >
                ←
            </button>

            <button
                onClick={handleNext}
                className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white text-4xl md:text-5xl hover:text-orange-500 transition-colors"
                aria-label="Next"
            >
                →
            </button>

            {/* Cards Container with smooth scrolling effect */}
            <div className="relative h-full flex items-center justify-center overflow-hidden">
                {getVisibleCards().map((card, index) => {
                    const isCenter = card.position === 'center';
                    const isLeft = card.position === 'left';

                    return (
                        <div
                            key={`${card.id}-${card.position}`}
                            className={`absolute transition-all duration-700 ease-in-out cursor-pointer
                                ${isCenter ? 'z-10 scale-100 opacity-100' : 'z-0 scale-90 opacity-70'}
                                ${isLeft ? '-translate-x-[60%]' : isCenter ? 'translate-x-0' : 'translate-x-[60%]'}`}
                            style={{
                                width: '80%',
                                maxWidth: '400px',
                            }}
                            onClick={() => isCenter && handleCardClick(card)}
                        >
                            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform">
                                <div className="relative h-64">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-cover"
                                    />
                                    {!isCenter && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                                    )}
                                </div>
                                <div className="p-4">
                                    <div className="text-sm text-gray-600 mb-1">{card.presenter}</div>
                                    <h3 className="text-xl font-bold">{card.title}</h3>
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Modal */}
            {showModal && selectedInterview && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 w-full mx-4 max-h-[90vh] overflow-y-auto transform md:translate-y-0 translate-y-10">
                        <div className="flex justify-end">
                            <button
                                onClick={() => setShowModal(false)}
                                className="text-gray-500 hover:text-gray-700 text-xl"
                            >
                                ×
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-4 overflow-y-auto">
                                <h2 className="text-2xl font-bold">{selectedInterview.title}</h2>
                                <p className="text-sm text-gray-600">{selectedInterview.presenter}</p>
                                <div className="space-y-3">
                                    {selectedInterview.details.map((detail, index) => (
                                        <p key={index} className="text-gray-700">
                                            {detail}
                                        </p>
                                    ))}
                                </div>
                            </div>
                            <div className="relative h-[400px] bg-gray-100 rounded-lg overflow-hidden">
                                <img
                                    src={selectedInterview.image}
                                    alt="Mock Interview"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MockInterviewCarousel;
