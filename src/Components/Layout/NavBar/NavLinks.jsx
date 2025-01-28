import React from "react";

const NavLinks = ({ navItems, activeSection }) => {
    return navItems.map((item) => (
        <button
            key={item.label}
            onClick={() => document.getElementById(item.href.slice(1)).scrollIntoView({ behavior: "smooth" })}
            className={`whitespace-nowrap transition-colors ${activeSection === item.label.replace(/\s+/g, "") ? "text-yellow-400" : "text-white"
                } hover:text-yellow-400`}
        >
            {item.label}
        </button>
    ));
};

export default NavLinks;