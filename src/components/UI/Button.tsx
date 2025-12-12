import React from 'react';
import '../../css/common.css'; 

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary';
}

export const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', style, ...props }) => {
    const baseStyle: React.CSSProperties = {
        padding: '12px 20px',
        borderRadius: '12px',
        border: 'none',
        fontSize: '16px',
        fontWeight: 'bold',
        cursor: 'pointer',
        width: '100%',
        backgroundColor: variant === 'primary' ? '#FF85A2' : '#f0f0f0', 
        color: variant === 'primary' ? '#fff' : '#333',
        marginTop: '10px',
        ...style
    };

    return (
        <button style={baseStyle} {...props}>
            {children}
        </button>
    );
};