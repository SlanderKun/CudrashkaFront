import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { AuthForm } from '../components/Auth/AuthForm'; 
import { Button } from '../components/UI/Button'; 
import { QrModal } from '../components/Modal/QrModal'; 

export const HomePage: React.FC = () => {
    const { user } = useStore();

    if (!user.isLoggedIn) {
        return <AuthForm />;
    }
    
    const [showQr, setShowQr] = useState(false);
    const navigate = useNavigate();

    return (

        <div style={{ padding: '30px 20px', maxWidth: '600px', margin: '0 auto' }}>
            
            {}
            <div style={{ 
                backgroundColor: '#fff', 
                padding: '30px', 
                borderRadius: '20px', 
                textAlign: 'center', 
                marginBottom: '30px',
                boxShadow: '0 10px 30px rgba(0,0,0,0.08)', 
            }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '15px' }}>
                    <span style={{ fontSize: '3rem', color: '#FF85A2' }}>🐾</span>
                    <h2 style={{ 
                        margin: 0, 
                        fontSize: '3rem', 
                        fontWeight: '900',
                        color: '#333'
                    }}>
                        {user.bonusBalance}
                    </h2>
                    <span style={{ fontSize: '1.5rem', color: '#FF85A2' }}>бонусов</span>
                </div>
                <p style={{ margin: '10px 0 0 0', opacity: 0.7, fontSize: '1.2rem' }}>
                    Ваш текущий баланс 
                </p>
            </div>

            {}
            <div style={{ 
                marginBottom: '40px', 
                display: 'grid', 
                gap: '15px' 
            }}>
                {}
                <Button 
                    onClick={() => setShowQr(true)}
                    style={{ 
                        padding: '20px 0', 
                        fontSize: '1.2rem', 
                        fontWeight: 'bold',
                        borderRadius: '15px',
                        boxShadow: '0 8px 15px rgba(255, 133, 162, 0.4)' 
                    }}
                >
                    Показать QR-код для оплаты
                </Button>
                
                {}
                <Button 
                    variant="secondary" 
                    onClick={() => navigate('/profile')}
                    style={{ 
                        padding: '20px 0', 
                        fontSize: '1.1rem',
                        borderRadius: '15px',
                        backgroundColor: '#FFB7C5',
                        color: '#333'
                    }}
                >
                    Мои ПРОМОКОДЫ и Скидки
                </Button>
            </div>

            {}
            <div style={{ 
                background: '#fff', 
                padding: '30px', 
                borderRadius: '20px', 
                border: '1px solid #eee',
                boxShadow: '0 5px 15px rgba(0,0,0,0.05)',
            }}>
                <h3 style={{ marginTop: 0, borderBottom: '2px solid #FFB7C5', paddingBottom: '10px' }}>
                    Как использовать Бонусы
                </h3>
                
                {}
                <p style={{ color: '#FF85A2', fontWeight: 'bold', textAlign: 'center', fontSize: '1.1rem', marginBottom: '20px' }}>
                    Вы всегда получаете 5% от каждого чека обратно!
                </p>

                {}
                <ul style={{ paddingLeft: '20px', color: '#555', lineHeight: '1.8' }}>
                    <li style={{ marginBottom: '10px' }}>
                        <span style={{ fontWeight: 'bold', color: '#FF85A2' }}>25%</span> — можно оплатить комплексные услуги (стрижка, окрашивание).
                    </li>
                    <li style={{ marginBottom: '10px' }}>
                        <span style={{ fontWeight: 'bold', color: '#FF85A2' }}>50%</span> — можно оплатить дополнительные услуги (маски, уходы, экспресс-укладка).
                    </li>
                    <li>
                        Бонусы не сгорают в течение 12 месяцев.
                    </li>
                </ul>
            </div>

            <QrModal isOpen={showQr} onClose={() => setShowQr(false)} phone={user.phone} />
        </div>
    );
};