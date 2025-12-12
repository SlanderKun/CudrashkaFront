import React from 'react';
import { useStore } from '../store/useStore';
import { AuthForm } from '../components/Auth/AuthForm'; 
import { useNavigate } from 'react-router-dom';
import * as QRCode from 'qrcode';
import '../css/style.css'; // <-- ИСПРАВЛЕННЫЙ ПУТЬ

export const HomePage: React.FC = () => {
    const { user } = useStore();
    const navigate = useNavigate();
    const [qrUrl, setQrUrl] = React.useState('');

    React.useEffect(() => {
        if (user.phone) {
            QRCode.toDataURL(`KUDRI-${user.phone}`, { width: 300, margin: 2 })
                .then(url => setQrUrl(url));
        }
    }, [user.phone]);

    if (!user.isLoggedIn) {
        return <AuthForm />;
    }

    return (
        <div className="dashboard-grid">
            {/* Левая колонка (QR) */}
            <div className="card" style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <h3 style={{ margin: '0 0 20px 0', color: '#333' }}>Ваша карта</h3>
                <div style={{ border: '4px dashed #FFB7C5', padding: '10px', borderRadius: '15px' }}>
                    {qrUrl && <img src={qrUrl} alt="QR" style={{ width: '100%', maxWidth: '250px', display: 'block' }} />}
                </div>
                <p style={{ color: '#888', fontSize: '0.9rem', marginTop: '15px' }}>
                    Покажите администратору для начисления или списания
                </p>
            </div>

            {/* Правая колонка (Инфо) */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                <div className="card" style={{ background: 'linear-gradient(135deg, #FF85A2 0%, #FFB7C5 100%)', color: 'white' }}>
                    <h2 style={{ margin: 0, fontSize: '1.2rem', opacity: 0.9 }}>Баланс бонусов</h2>
                    <div style={{ fontSize: '3.5rem', fontWeight: 'bold' }}>{user.bonusBalance}</div>
                    <p style={{ margin: 0, opacity: 0.9 }}>1 бонус = 1 рубль</p>
                </div>

                <div className="card">
                    <h3 style={{ marginTop: 0 }}>Быстрые действия</h3>
                    <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                        <button 
                            onClick={() => navigate('/promocodes')}
                            style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid #eee', background: '#fff', cursor: 'pointer', fontWeight: 'bold', color: '#555' }}
                        >
                            🎁 Мои Промокоды
                        </button>
                        <button 
                            onClick={() => navigate('/bonuses')}
                            style={{ flex: 1, padding: '15px', borderRadius: '12px', border: '1px solid #eee', background: '#fff', cursor: 'pointer', fontWeight: 'bold', color: '#555' }}
                        >
                            📊 История Бонусов
                        </button>
                    </div>
                </div>

                <div className="card">
                    <h3 style={{ marginTop: 0, color: '#FF85A2' }}>Правила списания</h3>
                    <ul style={{ paddingLeft: '20px', lineHeight: '1.6', color: '#555' }}>
                        <li><b>25%</b> — оплата комплексных услуг</li>
                        <li><b>50%</b> — оплата уходов и масок</li>
                        <li>Бонусы действительны 12 месяцев</li>
                    </ul>
                </div>
            </div>
        </div>
    );
};