import { useContext } from 'react';
import { RootStoreContext } from './RootStore';

export const useStore = () => {
    return useContext(RootStoreContext);
};