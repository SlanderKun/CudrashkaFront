import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { Button } from '../components/UI/Button';
import { useNavigate } from 'react-router-dom';
import type { Promocode } from '../store/RootStore'; 

export const ProfilePage: React.FC = () => {
    const { user } = useStore();
    const navigate = useNavigate();
    const [filter, setFilter] = useState<'active' | 'used'>('active');

    const filteredPromos = user.promocodes.filter(p => 
        filter === 'active' ? p.status === 'active' : p.status !== 'active'
    );

    return (
        <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', fontSize: '24px', cursor: 'pointer' }}>←</button>
                <h2 style={{ marginLeft: '10px' }}>Мои Промокоды</h2>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
                <Button 
                    variant={filter === 'active' ? 'primary' : 'secondary'} 
                    onClick={() => setFilter('active')}
                    style={{ padding: '8px 15px', fontSize: '14px' }}
                >
                    Активные
                </Button>
                <Button 
                    variant={filter === 'used' ? 'primary' : 'secondary'} 
                    onClick={() => setFilter('used')}
                    style={{ padding: '8px 15px', fontSize: '14px' }}
                >
                    История
                </Button>
            </div>

            <div>
                {filteredPromos.length === 0 && <p style={{textAlign: 'center', color: '#999'}}>Пусто...</p>}
                
                {filteredPromos.map((promo) => (
                    <div key={promo.code} style={{ 
                        border: '1px solid #eee', borderRadius: '12px', padding: '15px', marginBottom: '10px',
                        backgroundColor: promo.status === 'active' ? '#fff' : '#f9f9f9',
                        opacity: promo.status === 'active' ? 1 : 0.7
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <h3 style={{ margin: 0, color: '#333' }}>{promo.code}</h3>
                            <span style={{ fontWeight: 'bold', color: '#FF85A2' }}>
                                -{promo.value}{promo.type === 'percentage' ? '%' : '₽'}
                            </span>
                        </div>
                        <p style={{ margin: '5px 0', fontSize: '14px', color: '#666' }}>{promo.description}</p>
                        {promo.status === 'active' && (
                            <p style={{ fontSize: '12px', color: '#999', margin: '5px 0 0 0' }}>Действует до: {promo.expire_at}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};