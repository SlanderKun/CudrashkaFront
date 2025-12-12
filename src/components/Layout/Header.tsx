import React from 'react';
import { useStore } from '../../store/useStore';
import { useNavigate } from 'react-router-dom';

export const Header: React.FC = () => {
    const { user, logout } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header style={{
            backgroundColor: '#fff',
            padding: '15px 20px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            boxShadow: '0 2px 10px rgba(0,0,0,0.05)',
            position: 'sticky',
            top: 0,
            zIndex: 100
        }}>
            {}
            <div 
                onClick={() => navigate('/')} 
                style={{ fontWeight: 'bold', fontSize: '20px', color: '#FF85A2', cursor: 'pointer', display: 'flex', alignItems: 'center' }}
            >
                Кудряшка
            </div>

            {}
            {user.isLoggedIn && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '14px', fontWeight: 'bold', color: '#333' }}>
                        {user.bonusBalance} Б
                    </span>
                    <button 
                        onClick={handleLogout}
                        style={{
                            background: 'none',
                            border: '1px solid #ddd',
                            borderRadius: '8px',
                            padding: '5px 10px',
                            cursor: 'pointer',
                            color: '#666',
                            fontSize: '12px'
                        }}
                    >
                        Выйти
                    </button>
                </div>
            )}
        </header>
    );
};