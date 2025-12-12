import React, { createContext, useState, useContext } from 'react';
import type { ReactNode } from 'react';

export interface Promocode {
    code: string;
    type: 'percentage' | 'fixed';
    status: 'active' | 'used' | 'expired';
    description: string;
    value: number;
    redeemed_at: string | null;
    expire_at: string;
}

export interface User {
    phone: string;
    isLoggedIn: boolean;
    bonusBalance: number;
    promocodes: Promocode[];
}


const MOCK_PROMOS: Promocode[] = [
    { code: "ABC1234", type: "percentage", status: "active", description: "За первое место на осеннем чемпионате", value: 15.0, redeemed_at: null, expire_at: "2024-12-31" },
    { code: "WELCOME", type: "fixed", status: "active", description: "Приветственный бонус", value: 300, redeemed_at: null, expire_at: "2025-01-01" },
    { code: "OLD2023", type: "percentage", status: "used", description: "Скидка 2023", value: 10.0, redeemed_at: "2023-10-10", expire_at: "2023-12-31" }
];

interface RootStoreContextType {
    user: User;
    login: (phone: string) => void;
    logout: () => void;
}

const defaultUser: User = {
    phone: '',
    isLoggedIn: false,
    bonusBalance: 0,
    promocodes: []
};

export const RootStoreContext = createContext<RootStoreContextType>({
    user: defaultUser,
    login: () => {},
    logout: () => {}
});

export const RootStoreProvider = ({ children }: { children: ReactNode }) => { 
    const [user, setUser] = useState<User>(defaultUser);

    const login = (phone: string) => {
        console.log(`Loggin in with ${phone}...`);
        setUser({
            phone: phone,
            isLoggedIn: true,
            bonusBalance: 250,
            promocodes: MOCK_PROMOS
        });
    };

    const logout = () => {
        setUser(defaultUser);
    };

    return (
        <RootStoreContext.Provider value={{ user, login, logout }}>
            {children}
        </RootStoreContext.Provider>
    );
};

