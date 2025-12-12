import {makeAutoObservable} from "mobx";
import AuthService from "../services/AuthService.ts";

export default class AuthStore {
    isLoading = false
    isAuth = false

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await AuthService.checkAuth()
            if (response){
                this.setAuth(true);
            } else {
                localStorage.removeItem("token");
                this.setAuth(false);
            }
        } catch (e: any) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }

    async register(data: {phone: string, password: string}) {
        this.setLoading(true);
        try {
            const response = await AuthService.register(data);
            console.log(response);
            return response.status;
        } catch (e: any) {
            console.log(e.response?.data?.message)
        } finally {
            this.setLoading(false);
        }
    }

    async login(data: {phone: string; password: string; }) {
        this.setLoading(true);
        try {
            const response = await AuthService.login(data);

            localStorage.setItem("token", response.data?.access_token);
            this.setAuth(true);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }
}