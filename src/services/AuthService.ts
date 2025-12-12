import type { AxiosResponse } from "axios";
import apiInstance from "../core/httpConfig.ts";
import type {AuthResponse} from "../models/auth/AuthResponse.ts";

export default class AuthService {
    static async login(data: {
        phone: string,
        password: string,
    }) {
        return apiInstance.post<AuthResponse>(`/auth/signin`, data);
    }
    static async register(data: {
        phone: string,
        password: string,
    }): Promise<AxiosResponse<AuthResponse>> {
        return apiInstance.post<AuthResponse>(`/auth/signup`, data);
    }
    static async checkAuth() {
        return await apiInstance.get<AuthResponse>(`/auth/me`,
            {
                withCredentials: true,
            },
        );
    }

    static async logout(): Promise<unknown> {
        return apiInstance.post(`/logout`);
    }
}