// src/components/NavBar.js
import React from 'react';


const NavBar = () => {
  return (
    <nav className="bg-black text-white p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">Comet'25</h1>
      <ul className="flex space-x-4">
        <li><a href="#about">About</a></li>
        <li><a href="#events">Events</a></li>
        <li><a href="#team">Team</a></li>
        <li><button className="bg-red-600 px-4 py-2 rounded">Register</button></li>
      </ul>
    </nav>
  );
};

export default NavBar;
