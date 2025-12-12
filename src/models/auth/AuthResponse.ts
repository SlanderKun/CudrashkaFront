import type {IProfile} from "../profile.ts";

export interface AuthResponse {
    token: string;
    profile: IProfile;
    expiresAt: string;
}