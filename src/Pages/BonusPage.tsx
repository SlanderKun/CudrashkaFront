import React from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import '../css/style.css'; // <-- ИСПРАВЛЕННЫЙ ПУТЬ

export const BonusPage: React.FC = () => {
    const { user } = useStore();
    const navigate = useNavigate();

    return (
        <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px' }}>
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', marginBottom: '20px', color: '#666' }}>
                ← На главную
            </button>
            
            <div className="card">
                <h2 style={{ marginTop: 0, marginBottom: '20px' }}>История бонусов</h2>
                
                {user.bonusHistory.length === 0 ? (
                    <p style={{ textAlign: 'center', color: '#999' }}>История пуста</p>
                ) : (
                    <div>
                        {user.bonusHistory.map(item => (
                            <div key={item.id} className="transaction-item">
                                <div>
                                    <div style={{ fontWeight: 'bold', color: '#333' }}>{item.description}</div>
                                    <div style={{ fontSize: '12px', color: '#999', marginTop: '4px' }}>
                                        {item.date} 
                                        {item.expire_at && item.type === 'accural' && ` • Сгорает: ${item.expire_at}`}
                                    </div>
                                </div>
                                <div style={{ 
                                    fontWeight: 'bold', 
                                    color: item.type === 'accural' ? '#4CAF50' : '#F44336',
                                    fontSize: '18px'
                                }}>
                                    {item.type === 'accural' ? '+' : '-'}{item.amount}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};