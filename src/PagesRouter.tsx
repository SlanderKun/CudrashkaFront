import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { HomePage } from './Pages/HomePage';
import { PromocodesPage } from './Pages/PromocodesPage';
import { BonusPage } from './Pages/BonusPage';

export const PagesRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/promocodes" element={<PromocodesPage />} />
            <Route path="/bonuses" element={<BonusPage />} />
        </Routes>
    );
};