import React from "react";
import { Link } from "react-router-dom";

const NavLinkss = ({ navItems }) => {
  return (
    <ul className="flex space-x-6">
      {navItems.map((item, index) => (
        <li key={index}>
          <Link
            to={item.path} // Using `to` instead of scroll behavior
            className="hover:text-yellow-400 transition-colors"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default NavLinkss;
