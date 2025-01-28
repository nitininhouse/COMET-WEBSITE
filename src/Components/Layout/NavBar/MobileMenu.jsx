import React from "react";

const MobileMenu = ({ isMenuOpen, setIsMenuOpen, navItems, activeSection, handleRegisterRedirect }) => {
    return (
        <>
            <div
                className={`fixed inset-0 bg-black bg-opacity-50 transition-opacity lg:hidden z-50 ${isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsMenuOpen(false)}
            />
            <div
                className={`fixed top-0 right-0 h-full w-72 bg-black transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${isMenuOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex flex-col h-full">
                    <div className="flex justify-end p-4">
                        <button
                            onClick={() => setIsMenuOpen(false)}
                            className="text-yellow-400 w-8 h-8 relative focus:outline-none"
                            aria-label="Close menu"
                        >
                            <span className="block absolute w-8 h-0.5 bg-current transform rotate-45 top-1/2"></span>
                            <span className="block absolute w-8 h-0.5 bg-current transform -rotate-45 top-1/2"></span>
                        </button>
                    </div>
                    <div className="flex flex-col space-y-4 px-4">
                        {navItems.map((item) => (
                            <button
                                key={item.label}
                                onClick={() => {
                                    document.getElementById(item.href.slice(1)).scrollIntoView({ behavior: "smooth" });
                                    setIsMenuOpen(false);
                                }}
                                className={`whitespace-nowrap transition-colors ${activeSection === item.label.replace(/\s+/g, "") ? "text-yellow-400" : "text-white"
                                    } hover:text-yellow-400`}
                            >
                                {item.label}
                            </button>
                        ))}
                        <button
                            onClick={handleRegisterRedirect}
                            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors text-center mt-4"
                        >
                            Register
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
};

export default MobileMenu;