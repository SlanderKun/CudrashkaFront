import React from 'react';
import { useStore } from '../../store/useStore';
import { useNavigate } from 'react-router-dom';
import '../../css/style.css';

export const Header: React.FC = () => {
    const { user, logout } = useStore();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/');
    };

    return (
        <header className="header">
            <div 
                onClick={() => navigate('/')} 
                style={{ fontWeight: 'bold', fontSize: '20px', color: '#FF85A2', cursor: 'pointer' }}
            >
                Кудряшка
            </div>

            {user.isLoggedIn && (
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <button className="nav-btn" onClick={() => navigate('/bonuses')}>
                        Бонусы: {user.bonusBalance}
                    </button>
                    <button className="nav-btn" onClick={() => navigate('/promocodes')}>
                        Промокоды
                    </button>
                    <button 
                        onClick={handleLogout}
                        style={{
                            background: '#ffebee',
                            border: 'none',
                            borderRadius: '8px',
                            padding: '8px 12px',
                            cursor: 'pointer',
                            color: '#c62828',
                            fontSize: '12px',
                            fontWeight: 'bold'
                        }}
                    >
                        Выйти
                    </button>
                </div>
            )}
        </header>
    );
};