import React, { createContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { User, Promocode, BonusTransaction } from '../types/PromocodeType';

const MOCK_PROMOS: Promocode[] = [
    { code: "SUMMER25", type: "percentage", status: "active", description: "Летняя скидка", value: 15, redeemed_at: null, expire_at: "2025-06-01" },
    { code: "WELCOME", type: "fixed", status: "used", description: "Приветственный бонус", value: 300, redeemed_at: "2024-01-15", expire_at: "2024-02-01" },
    { code: "LATE23", type: "percentage", status: "expired", description: "Зимняя акция", value: 10, redeemed_at: null, expire_at: "2023-12-31" }
];

const MOCK_HISTORY: BonusTransaction[] = [
    { id: '1', type: 'accural', amount: 150, date: '2024-02-20', expire_at: '2025-02-20', description: 'Кэшбэк за стрижку' },
    { id: '2', type: 'spending', amount: 50, date: '2024-03-01', description: 'Оплата шампуня' },
    { id: '3', type: 'accural', amount: 200, date: '2024-03-10', expire_at: '2025-03-10', description: 'Бонус за отзыв' }
];

interface RootStoreContextType {
    user: User;
    login: (phone: string, password?: string) => void;
    register: (phone: string, username: string, password?: string) => void;
    logout: () => void;
}

const defaultUser: User = {
    phone: '',
    username: '',
    isLoggedIn: false,
    bonusBalance: 0,
    promocodes: [],
    bonusHistory: []
};

export const RootStoreContext = createContext<RootStoreContextType>({
    user: defaultUser,
    login: () => {},
    register: () => {},
    logout: () => {}
});

export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User>(defaultUser);

    const login = (phone: string, password?: string) => {
        
        setUser({
            phone,
            username: 'Иван',
            isLoggedIn: true,
            bonusBalance: 300,
            promocodes: MOCK_PROMOS,
            bonusHistory: MOCK_HISTORY
        });
    };

    const register = (phone: string, username: string, password?: string) => {
        
        setUser({
            phone,
            username,
            isLoggedIn: true,
            bonusBalance: 0,
            promocodes: [],
            bonusHistory: []
        });
    };

    const logout = () => {
        setUser(defaultUser);
    };

    return (
        <RootStoreContext.Provider value={{ user, login, register, logout }}>
            {children}
        </RootStoreContext.Provider>
    );
};