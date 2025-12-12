// src/store/UiStore.ts

import { makeAutoObservable } from 'mobx';

export type PageType = 
    'home' | 'profile' | 'orders' | 'booking' |
    'promocodes' | 'settings' | 'logout'; 

export class UiStore {
    currentPage: PageType = 'home';
    isSidebarOpen: boolean = false;
    isQrModalOpen: boolean = false; 

    constructor() {
        makeAutoObservable(this);
    }

    setPage = (page: PageType) => {
        this.currentPage = page;
        this.isSidebarOpen = false;
    }

    toggleSidebar = () => {
        this.isSidebarOpen = !this.isSidebarOpen;
    }

    openQrModal = () => {
        this.isQrModalOpen = true;
    }

    closeQrModal = () => {
        this.isQrModalOpen = false;
    }
}