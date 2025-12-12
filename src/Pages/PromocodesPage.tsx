import React, { useState } from 'react';
import { useStore } from '../store/useStore';
import { useNavigate } from 'react-router-dom';
import '../css/style.css';
import {observer} from "mobx-react-lite"; // <-- ИСПРАВЛЕННЫЙ ПУТЬ

type TabType = 'active' | 'used' | 'expired';

const PromocodesPage: React.FC = () => {
    const { user } = useStore();
    const navigate = useNavigate();
    const [currentTab, setCurrentTab] = useState<TabType>('active');

    const filteredPromos = user.promocodes.filter(p => p.status === currentTab);

    const renderTab = (type: TabType, label: string) => (
        <button
            onClick={() => setCurrentTab(type)}
            style={{
                flex: 1,
                padding: '12px',
                border: 'none',
                background: currentTab === type ? '#FF85A2' : '#f0f0f0',
                color: currentTab === type ? '#fff' : '#666',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                transition: 'all 0.2s'
            }}
        >
            {label}
        </button>
    );

    return (
        <div style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <button onClick={() => navigate('/')} style={{ background: 'none', border: 'none', fontSize: '16px', cursor: 'pointer', marginBottom: '20px', color: '#666' }}>
                ← На главную
            </button>

            <div className="card">
                <h2 style={{ marginTop: 0 }}>Мои Промокоды</h2>
                
                <div style={{ display: 'flex', gap: '10px', marginBottom: '25px', marginTop: '15px' }}>
                    {renderTab('active', 'Активные')}
                    {renderTab('used', 'Использованы')}
                    {renderTab('expired', 'Истекли')}
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    {filteredPromos.length === 0 && (
                        <div style={{ textAlign: 'center', padding: '30px', color: '#999' }}>
                            В этом разделе пока пусто
                        </div>
                    )}

                    {filteredPromos.map((promo) => (
                        <div key={promo.code} style={{ 
                            border: '1px solid #eee', 
                            borderRadius: '16px', 
                            padding: '20px',
                            backgroundColor: currentTab === 'active' ? '#fff' : '#fafafa',
                            opacity: currentTab === 'active' ? 1 : 0.6,
                            position: 'relative',
                            overflow: 'hidden'
                        }}>
                            {currentTab === 'active' && (
                                <div style={{ 
                                    position: 'absolute', left: 0, top: 0, bottom: 0, width: '6px', 
                                    backgroundColor: '#FF85A2' 
                                }} />
                            )}
                            
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '10px' }}>
                                <div style={{ fontSize: '18px', fontWeight: 'bold', color: '#333' }}>
                                    {promo.code}
                                </div>
                                <div style={{ 
                                    background: '#FF85A2', color: '#fff', 
                                    padding: '4px 8px', borderRadius: '6px', 
                                    fontWeight: 'bold', fontSize: '14px' 
                                }}>
                                    -{promo.value}{promo.type === 'percentage' ? '%' : '₽'}
                                </div>
                            </div>
                            
                            <p style={{ margin: '0 0 10px 0', color: '#555' }}>{promo.description}</p>
                            
                            <div style={{ fontSize: '12px', color: '#999' }}>
                                {currentTab === 'active' && `Действует до: ${promo.expire_at}`}
                                {currentTab === 'used' && `Использован: ${promo.redeemed_at}`}
                                {currentTab === 'expired' && `Истёк: ${promo.expire_at}`}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default observer(PromocodesPage);