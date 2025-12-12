import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { Button } from '../UI/Button';

export const AuthForm: React.FC = () => {
    const { login } = useStore();
    const [phoneInput, setPhoneInput] = useState('');
    const [passwordInput, setPasswordInput] = useState('');

    const handleLogin = (e: React.FormEvent) => {
        e.preventDefault();
        login(phoneInput); 
    };

    return (
        // 1. ОБЩИЙ ФОН ("Синеватый как облака")
        <div style={pageBackgroundStyle}>
            
            {/* 2. БЕЛАЯ КАРТОЧКА ПО ЦЕНТРУ */}
            <div style={whiteCardStyle}>
                
                {/* Логотип и заголовок */}
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ color: '#3d3d3dff', fontSize: '2rem', margin: '0 0 5px' }}>
                        Кудряшка
                    </h1>
                    <p style={{ color: '#8898AA', margin: 0, fontSize: '0.9rem' }}>
                        Вход в бонусную систему
                    </p>
                </div>

                <form onSubmit={handleLogin}>
                    {/* 3. ПОЛЯ ВВОДА (Голубые) */}
                    <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                        <label style={labelStyle}>Номер телефона</label>
                        <input 
                            type="tel" 
                            placeholder="+7 (999) 000-00-00" 
                            value={phoneInput}
                            onChange={(e) => setPhoneInput(e.target.value)}
                            required
                            style={blueInputStyle}
                        />
                    </div>
                    
                    <div style={{ marginBottom: '25px', textAlign: 'left' }}>
                        <label style={labelStyle}>Пароль</label>
                        <input 
                            type="password" 
                            placeholder="Введите пароль" 
                            value={passwordInput}
                            onChange={(e) => setPasswordInput(e.target.value)}
                            required
                            style={blueInputStyle}
                        />
                    </div>

                    {}
                    <Button type="submit" style={{ padding: '15px', fontSize: '16px', boxShadow: '0 4px 12px rgba(68, 94, 134, 0.4)', background: '#525c69ff' }}>
                        Войти
                    </Button>
                </form>

                <p style={{ color: '#AAB8C2', fontSize: '12px', marginTop: '30px' }}>
                    Демо-режим: введите любой номер
                </p>
            </div>
        </div>
    );
};

const pageBackgroundStyle: React.CSSProperties = {
    minHeight: '100vh',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'linear-gradient(135deg, #E0F7FA 0%, #E3F2FD 50%, #f5eee5ff 100%)',
    padding: '20px'
};


const whiteCardStyle: React.CSSProperties = {
    backgroundColor: '#ffffff',
    width: '100%',
    maxWidth: '360px',
    padding: '40px 30px',
    borderRadius: '24px', 
    boxShadow: '0 20px 40px rgba(176, 190, 213, 0.3)', 
    textAlign: 'center',
};


const blueInputStyle: React.CSSProperties = {
    width: '100%',
    padding: '16px',
    borderRadius: '12px',
    border: 'none', 
    backgroundColor: '#F0F7FF', 
    color: '#32325D', 
    fontSize: '16px',
    outline: 'none',
    transition: 'all 0.2s ease',
    boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.02)' 
};

const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#8898AA',
    marginBottom: '8px',
    marginLeft: '5px',
    textTransform: 'uppercase',
    letterSpacing: '0.5px'
};