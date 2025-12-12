import {makeAutoObservable} from "mobx";
import type {IProfile} from "../models/profile.ts";
import AuthService from "../services/AuthService.ts";

export default class AuthStore {
    isLoading = false
    isAuth = false
    profile: IProfile | null = null

    constructor() {
        makeAutoObservable(this);
    }

    setAuth(bool: boolean) {
        this.isAuth = bool;
    }

    setProfile(profile: IProfile | null) {
        this.profile = profile;
    }

    setLoading(bool: boolean) {
        this.isLoading = bool;
    }

    // async registerProfile(data: {email: string, password: string}) {
    //     this.setLoading(true);
    //     try {
    //         const response = await AuthService.register(data);
    //         console.log(response);
    //         localStorage.setItem("session_token", response.session_token);
    //     } catch (e: any) {
    //         console.log(e.response?.data?.message)
    //     } finally {
    //         this.setLoading(false);
    //     }
    // }

    async checkAuth() {
        this.setLoading(true);
        try {
            const response = await AuthService.checkAuth()
            if (response){
                this.setAuth(true);
                this.setProfile(response.data.profile);
            } else {
                localStorage.removeItem("token");
                this.setAuth(false);
                this.setProfile(null);
            }
        } catch (e: any) {
            console.log(e);
        } finally {
            this.setLoading(false);
        }
    }

    async login(data: {email: string; password: string; }) {
        this.setLoading(true);
        try {
            const response = await AuthService.login(data);
            localStorage.setItem("token", response.data.token);
            this.setAuth(true);
            this.setProfile(response.data.profile);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        } finally {
            this.setLoading(false);
        }
    }

    async logout() {
        try {
            await AuthService.logout();
            localStorage.removeItem("token");
            this.setAuth(false);
            this.setProfile(null);
        } catch (e: any) {
            console.log(e.response?.data?.message);
        }
    }
}