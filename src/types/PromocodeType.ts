export interface Promocode {
    code: string;
    type: 'percentage' | 'fixed';
    status: 'active' | 'used' | 'expired';
    description: string;
    value: number;
    redeemed_at: string | null;
    expire_at: string;
}

export interface BonusTransaction {
    id: string;
    type: 'accural' | 'spending';
    amount: number;
    date: string;
    expire_at?: string;
    description: string;
}

export interface User {
    phone: string;
    username?: string;
    isLoggedIn: boolean;
    bonusBalance: number;
    promocodes: Promocode[];
    bonusHistory: BonusTransaction[];
}