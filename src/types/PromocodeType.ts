// Файл: src/types/PromocodeType.ts

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