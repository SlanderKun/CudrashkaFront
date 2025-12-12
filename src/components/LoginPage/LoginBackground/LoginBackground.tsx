import React from 'react';
import styles from './styles.module.css'

interface IProps {
    children: React.ReactNode
}

const LoginBackground: React.FC<IProps> = ({children}) => {
    return (
        <div className={styles.background}>
            {children}
            <div className={styles.freeSpace}>
                <div className={styles.logo}/>
            </div>
        </div>
    );
};

export default LoginBackground;