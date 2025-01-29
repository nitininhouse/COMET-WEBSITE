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
        const prevIndex = currentIndex === 0 ? length - 1 : currentIndex - 1;
        cards.push({ ...mockInterviews[prevIndex], position: 'left' });
        cards.push({ ...mockInterviews[currentIndex], position: 'center' });
        const nextIndex = currentIndex === length - 1 ? 0 : currentIndex + 1;
        cards.push({ ...mockInterviews[nextIndex], position: 'right' });
        return cards;
    };

    return (
        <div className="relative w-full max-w-7xl mx-auto px-2 sm:px-4 py-4 sm:py-8 h-[400px] sm:h-[600px] border-2 border-orange-500 rounded-lg overflow-hidden">
            <button
                onClick={handlePrevious}
                className="absolute left-1 sm:left-4 top-1/2 -translate-y-1/2 z-20 text-3xl sm:text-4xl md:text-5xl text-orange-500 transition-colors hover:text-orange-600 bg-white/50 rounded-full p-2 sm:p-3"
                aria-label="Previous"
            >
                <span className="relative top-.001">←</span>
            </button>

            <button
                onClick={handleNext}
                className="absolute right-1 sm:right-4 top-1/2 -translate-y-1/2 z-20 text-3xl sm:text-4xl md:text-5xl text-orange-500 transition-colors hover:text-orange-600 bg-white/50 rounded-full p-2 sm:p-3"
                aria-label="Next"
            >
                <span className="relative top-.001">→</span>
            </button>

            <div className="relative h-full flex items-center justify-center overflow-hidden">
                {getVisibleCards().map((card, index) => {
                    const isCenter = card.position === 'center';
                    const isLeft = card.position === 'left';

                    return (
                        <div
                            key={`${card.id}-${card.position}`}
                            className={`absolute transition-all duration-700 ease-in-out cursor-pointer
                                ${isCenter ? 'z-10 scale-100 opacity-100' : 'z-0 scale-75 sm:scale-90 opacity-60'}
                                ${isLeft
                                    ? '-translate-x-[75%] sm:-translate-x-[60%]'
                                    : isCenter
                                    ? 'translate-x-0'
                                    : 'translate-x-[75%] sm:translate-x-[60%]'
                                }`}
                            style={{
                                width: '90%',
                                maxWidth: '400px',
                            }}
                            onClick={() => isCenter && handleCardClick(card)}
                        >
                            <div className="bg-white rounded-lg shadow-xl overflow-hidden transform transition-transform hover:scale-105">
                                <div className="p-3 sm:p-4">
                                    <div className="text-xs sm:text-sm text-gray-600 mb-1">{card.presenter}</div>
                                    <h3 style={{ fontFamily: "Aquire" }} className="text-lg sm:text-xl text-orange-400 line-clamp-2">{card.title}</h3>
                                </div>

                                <div className="relative h-56 sm:h-72 mt-2">
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="w-full h-full object-contain px-4"
                                    />
                                    {!isCenter && (
                                        <div className="absolute inset-0 bg-black bg-opacity-50" />
                                    )}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            {showModal && selectedInterview && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-2 sm:p-4">
                    <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden relative flex flex-col">
                        <div className="p-4 border-b flex justify-between items-center sticky top-0 bg-white z-10">
                            <h2 className="text-xl sm:text-2xl font-bold truncate pr-8">{selectedInterview.title}</h2>
                            <button
                                onClick={() => setShowModal(false)}
                                className="absolute right-2 top-2 text-gray-500 hover:text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center text-2xl transition-colors"
                                aria-label="Close modal"
                            >
                                ×
                            </button>
                        </div>

                        <div className="overflow-y-auto p-4 flex-grow">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <div className="order-1 lg:order-2">
                                    <div className="relative aspect-video w-full rounded-lg overflow-hidden shadow-lg">
                                        <img
                                            src={selectedInterview.image}
                                            alt="Mock Interview"
                                            className="w-full h-full object-contain bg-white p-4"
                                        />
                                    </div>
                                </div>

                                <div className="order-2 lg:order-1 space-y-4">
                                    <p className="text-sm text-gray-600">{selectedInterview.presenter}</p>
                                    <div className="space-y-3 prose prose-sm sm:prose">
                                        {selectedInterview.details.map((detail, index) => (
                                            <p key={index} className="text-gray-700">
                                                {detail}
                                            </p>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="p-4 border-t bg-white sticky bottom-0">
                            <button
                                onClick={() => window.open(selectedInterview.link, '_blank')}
                                className="w-full py-2 px-4 text-white bg-[#1C4980] hover:bg-[#1C4980] rounded-lg text-lg font-semibold"
                            >
                                Register here
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default MockInterviewCarousel;
