import React, { useState } from 'react';
import { useStore } from '../../store/useStore';
import { Button } from '../UI/Button';

export const AuthForm: React.FC = () => {
    const { login, register } = useStore();
    const [isLoginMode, setIsLoginMode] = useState(true);
    
    const [phone, setPhone] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const formatPhone = (value: string) => {
        const digits = value.replace(/\D/g, '');
        if (digits.length === 0) return '';
        if (digits[0] === '7' || digits[0] === '8') {
             const rest = digits.substring(1, 11);
             let res = '+7';
             if (rest.length > 0) res += ` (${rest.substring(0, 3)}`;
             if (rest.length >= 3) res += `) ${rest.substring(3, 6)}`;
             if (rest.length >= 6) res += `-${rest.substring(6, 8)}`;
             if (rest.length >= 8) res += `-${rest.substring(8, 10)}`;
             return res;
        }
        return '+7 ' + digits.substring(0, 10);
    };

    const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPhone(formatPhone(e.target.value));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const cleanPhone = phone.replace(/\D/g, '');
        if (cleanPhone.length < 11) {
            alert('Введите корректный номер телефона');
            return;
        }

        if (isLoginMode) {
            login(phone, password);
        } else {
            if (!username) return;
            register(phone, username, password);
        }
    };

    return (
        <div style={pageBackgroundStyle}>
            <div style={whiteCardStyle}>
                <div style={{ marginBottom: '30px' }}>
                    <h1 style={{ color: '#3d3d3d', fontSize: '2rem', margin: '0 0 5px' }}>
                        Кудряшка
                    </h1>
                    <p style={{ color: '#8898AA', fontSize: '0.9rem' }}>
                        {isLoginMode ? 'Вход в систему' : 'Создание аккаунта'}
                    </p>
                </div>

                <form onSubmit={handleSubmit}>
                    {!isLoginMode && (
                        <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                            <label style={labelStyle}>Имя</label>
                            <input 
                                type="text" 
                                placeholder="Как к вам обращаться?" 
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                                style={blueInputStyle}
                            />
                        </div>
                    )}

                    <div style={{ marginBottom: '15px', textAlign: 'left' }}>
                        <label style={labelStyle}>Телефон</label>
                        <input 
                            type="tel" 
                            placeholder="+7 (999) 000-00-00" 
                            value={phone}
                            onChange={handlePhoneChange}
                            required
                            style={blueInputStyle}
                        />
                    </div>
                    
                    <div style={{ marginBottom: '25px', textAlign: 'left' }}>
                        <label style={labelStyle}>Пароль</label>
                        <input 
                            type="password" 
                            placeholder="Введите пароль" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            style={blueInputStyle}
                        />
                    </div>

                    <Button type="submit" style={{ background: '#FF85A2' }}>
                        {isLoginMode ? 'Войти' : 'Создать аккаунт'}
                    </Button>
                </form>

                <div style={{ marginTop: '20px' }}>
                    <button 
                        onClick={() => setIsLoginMode(!isLoginMode)}
                        style={{ background: 'none', border: 'none', color: '#8898AA', cursor: 'pointer', textDecoration: 'underline' }}
                    >
                        {isLoginMode ? 'Нет аккаунта? Зарегистрироваться' : 'Есть аккаунт? Войти'}
                    </button>
                </div>
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
    background: 'linear-gradient(135deg, #E0F7FA 0%, #E3F2FD 50%, #f5eee5 100%)',
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
    marginBottom: '5px'
};

const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '12px',
    fontWeight: 'bold',
    color: '#8898AA',
    marginBottom: '8px',
    marginLeft: '5px',
    textTransform: 'uppercase',
};