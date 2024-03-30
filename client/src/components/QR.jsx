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

        // Set QR Image to parent component
        setQRImage(data); // นำรูปภาพ QR code ไปอัปเดต state ใน Customizer
        
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
            <button onClick={handleSubmit}>Generate QR Code</button>
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
