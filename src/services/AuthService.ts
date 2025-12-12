import type { AxiosResponse } from "axios";
import apiInstance from "../core/httpConfig.ts";
import type {AuthResponse} from "../models/auth/AuthResponse.ts";

//пример сревиса

export default class AuthService {
    static async login(data: {
        email: string,
        password: string,
    }): Promise<AxiosResponse<AuthResponse>> {
        return apiInstance.post<AuthResponse>(`/login`, data);
    }
    static async register(data: {
        email: string,
        password: string,
    }): Promise<AxiosResponse<AuthResponse>> {
        return apiInstance.post<AuthResponse>(`/register`, data,
        {
            withCredentials: true,
        });
    }
    static async checkAuth(): Promise<AxiosResponse<AuthResponse>> {
        return await apiInstance.post<AuthResponse>(`/refresh-tokens`,
            {},
            {
                withCredentials: true,
            },
        );
    }

    static async logout(): Promise<unknown> {
        return apiInstance.post(`/logout`);
    }
}