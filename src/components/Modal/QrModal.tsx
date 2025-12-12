import React, { useEffect, useState } from 'react';
import * as QRCode from 'qrcode'; 
import { Button } from '../UI/Button';

interface QrModalProps {
    isOpen: boolean;
    onClose: () => void;
    phone: string;
}

export const QrModal: React.FC<QrModalProps> = ({ isOpen, onClose, phone }) => {
    const [qrCodeUrl, setQrCodeUrl] = useState<string>('');
    const qrValue = `KUDRI-${phone}`; 
    useEffect(() => {
        if (isOpen && phone) {
            QRCode.toDataURL(qrValue, { errorCorrectionLevel: 'H', type: 'image/png' })
                .then(url => {
                    setQrCodeUrl(url);
                })
                .catch(err => {
                    console.error('Ошибка генерации QR-кода:', err);
                });
        }
    }, [isOpen, phone, qrValue]); 

    if (!isOpen) return null;

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: 1000
        }}>
            <div style={{ backgroundColor: '#fff', padding: '30px', borderRadius: '20px', textAlign: 'center', maxWidth: '300px' }}>
                <h3>Ваш код для списания</h3>
                <div style={{ margin: '20px auto', padding: '10px', border: '2px dashed #FF85A2', display: 'inline-block' }}>
                    {qrCodeUrl ? (
                        <img src={qrCodeUrl} alt="QR Code" style={{ width: '200px', height: '200px' }} />
                    ) : (
                        <p>Загрузка QR-кода...</p>
                    )}
                </div>
                <p style={{ fontSize: '14px', color: '#666' }}>Покажите этот код администратору</p>
                <Button variant="secondary" onClick={onClose}>Закрыть</Button>
            </div>
        </div>
    );
};