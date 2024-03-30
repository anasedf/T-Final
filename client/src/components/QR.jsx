import React, { useState } from 'react';
import { useSnapshot } from 'valtio';
import QRCode from "qrcode.react"

import state from '../store';

const QR = ({ setQRImage }) => {

    const snap = useSnapshot(state);

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        phoneNumber: '',
        address: ''
    });

    const [qrCodeValue, setQRCodeValue] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = () => {
        const { firstName, lastName, address, phoneNumber } = formData;

        const data = `Firstanme: ${firstName}, Lastname: ${lastName}, Address: ${address}, Phone Number: ${phoneNumber}`;
        setQRCodeValue(data);
        console.log('Form submitted:', formData);
    };

    return (
        <div
        className='absolute left-full ml-3'>
            <div>
                <label htmlFor="firstName">First Name:</label>
                <input
                type="text"
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="lastName">Last Name:</label>
                <input
                type="text"
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="phoneNumber">Phone Number:</label>
                <input
                type="text"
                id="phoneNumber"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="address">Address:</label>
                <input
                type="text"
                id="address"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                />
            </div>
            <button onClick={handleSubmit}
                style={{
                    backgroundColor: '#4CAF50', // สีพื้นหลัง
                    color: 'white', // สีข้อความ
                    padding: '15px 32px', // ขนาดของ padding
                    textAlign: 'center', // จัดข้อความตรงกลาง
                    textDecoration: 'none', // ไม่มีการเส้นใต้ข้อความ
                    display: 'inline-block', // ทำให้ button เป็น block และปรับขนาดตามข้อความ
                    fontSize: '16px', // ขนาดตัวอักษร
                    margin: '4px 2px', // ระยะห่างของ button
                    cursor: 'pointer', // เปลี่ยนรูปร่างของ cursor เมื่อนำมาบน button
                    borderRadius: '10px', // ทำให้มีรูปร่างเสมือนวงกลม
                    border: 'none' // ไม่มีเส้นขอบ
                }}
                >Generate QR Code</button>
            <br />
            {qrCodeValue && (
                <div>
                    <h3>QR Code</h3>
                    <QRCode value={qrCodeValue} />
                </div>
            )}
            
        </div>
        
    );
    
};

export default QR;
