import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import EventsPage from '../Pages/EventsPage';

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/events/" element={<EventsPage />} />
        </Routes>
    );
};

export default AppRoutes;
