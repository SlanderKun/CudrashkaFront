import React from 'react';
import styles from "../../LoginPage/LoginBackground/styles.module.css";
import {observer} from "mobx-react-lite";

interface IProps {
    children: React.ReactNode
}


const HomeBackground: React.FC<IProps> = ({children}) => {
    return (
        <div className={styles.background}>
            {children}
            <div className={styles.freeSpace}>
                <div className={styles.logo}/>
            </div>
        </div>
    );
};

export default observer(HomeBackground);