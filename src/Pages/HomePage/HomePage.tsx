import React from 'react';
import {observer} from "mobx-react-lite";
import HomeBackground from "../../components/HomePage/HomeBackground/HomeBackground.tsx";
import BonusesSection from "../../components/HomePage/BonusesSection/BonusesSection.tsx";
import PromocodesSection from "../../components/HomePage/PromocodesSection/PromocodesSection.tsx";

const HomePage: React.FC = () => {
    return (
        <>
            <HomeBackground>
                <div>
                    <BonusesSection/>
                    <PromocodesSection/>
                </div>
            </HomeBackground>
        </>
    );
};

export default observer(HomePage);