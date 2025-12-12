import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { ProfilePage } from './Pages/ProfilePage';


export const PagesRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/profile" element={<ProfilePage />} />
            {}
        </Routes>
    );
};