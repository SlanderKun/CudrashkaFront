export enum ProfileStatuses{
    UNVERIFIED = "unverified",
    PENDING = "pending",
    HR = "hr",
    UNIVERSITY = "university",
    ADMIN = "admin"
}
export enum ProfileColor{
    UNVERIFIED = '#D31A2B',
    PENDING = '#4B4C4D',
    HR = '#421AD3',
    UNIVERSITY = '#421AD3',
    ADMIN = '#D31A2B'
}
export enum ProfileText{
    UNVERIFIED = 'Аккаунт не верифицирован',
    PENDING = 'Аккаунт на проверке',
    HR = 'HR-менеджер',
    UNIVERSITY = 'Университет',
    ADMIN = 'Администратор'
}

export const PROFILE_COLOR_MAPPER: {
    [key in ProfileStatuses]: ProfileColor
} = {
    [ProfileStatuses.UNVERIFIED]: ProfileColor.UNVERIFIED,
    [ProfileStatuses.PENDING]: ProfileColor.PENDING,
    [ProfileStatuses.HR]: ProfileColor.HR,
    [ProfileStatuses.UNIVERSITY]: ProfileColor.UNIVERSITY,
    [ProfileStatuses.ADMIN]: ProfileColor.ADMIN,
}

export const PROFILE_NAME_MAPPER: {
    [key in ProfileStatuses]: ProfileText
} = {
    [ProfileStatuses.UNVERIFIED]: ProfileText.UNVERIFIED,
    [ProfileStatuses.PENDING]: ProfileText.PENDING,
    [ProfileStatuses.HR]: ProfileText.HR,
    [ProfileStatuses.UNIVERSITY]: ProfileText.UNIVERSITY,
    [ProfileStatuses.ADMIN]: ProfileText.ADMIN,
}
export interface ElementList {
    title: string,
    description: string,
}

export interface IProfile {
    status: ProfileStatuses,
    elements: ElementList[],
}