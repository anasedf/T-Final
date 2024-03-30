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
    const [qrImageURL, setQRImageURL] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleGenerateQRCode = () => {
        const { firstName, lastName, address, phoneNumber } = formData;

        const data = `Firstname: ${firstName}, Lastname: ${lastName}, Address: ${address}, Phone Number: ${phoneNumber}`;
        setQRCodeValue(data);

        // Set QR Image to parent component
        setQRImage(data); // นำรูปภาพ QR code ไปอัปเดต state ใน Customizer

        console.log('Form submitted:', formData);

        // Generate QR Code Image URL
        const canvas = document.querySelector("canvas");
        if (canvas !== null) {
            const qrImageURL = canvas.toDataURL("image/png");
            setQRImageURL(qrImageURL);
            setFile(qrImageURL);
        }
    };

    const handleDownloadQR = () => {
        const downloadLink = document.createElement("a");
        downloadLink.href = qrImageURL;
        downloadLink.download = "qr_code.png";
        downloadLink.click();
    };

    const handleDownloadQRCode = () => {
        const canvas = document.getElementById('tutorial');
        const qrCodeURL = canvas.toDataURL('image/png');
        const downloadLink = document.createElement('a');
        downloadLink.href = qrCodeURL;
        downloadLink.download = 'QR_Code.png';
        document.body.appendChild(downloadLink);
        downloadLink.click();
        document.body.removeChild(downloadLink);
    };

    return (
        <div className='absolute left-full ml-3'>
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
            <button
<<<<<<< HEAD
                onClick={handleGenerateQRCode}
=======
                onClick={handleSubmit}
>>>>>>> 0a8a3c70c297add783c9781cc009ecdd15ee56e6
                style={{
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    padding: '15px 32px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    display: 'inline-block',
                    fontSize: '16px',
                    margin: '4px 2px',
                    cursor: 'pointer',
                    borderRadius: '10px',
                    border: 'none'
                }}
            >
                Generate QR Code
            </button>
            <br />
            {qrCodeValue && (
                <div>
                    <h3>QR Code</h3>
                    <QRCode value={qrCodeValue} id="tutorial" />
                    <button
                        onClick={handleDownloadQRCode}
                        style={{
                            backgroundColor: '#008CBA',
                            color: 'white',
                            padding: '10px 20px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '14px',
                            margin: '10px 0',
                            cursor: 'pointer',
                            borderRadius: '5px',
                            border: 'none'
                        }}
                    >
                        Download QR Code
                    </button>
                </div>
            )}
<<<<<<< HEAD
=======
            {qrImageURL && (
                <div>
                    <button
                        onClick={handleDownloadQR}
                        style={{
                            backgroundColor: '#008CBA',
                            color: 'white',
                            padding: '10px 20px',
                            textAlign: 'center',
                            textDecoration: 'none',
                            display: 'inline-block',
                            fontSize: '16px',
                            margin: '4px 2px',
                            cursor: 'pointer',
                            borderRadius: '10px',
                            border: 'none'
                        }}
                    >
                        Download QR Code
                    </button>
                </div>
            )}
>>>>>>> 0a8a3c70c297add783c9781cc009ecdd15ee56e6
        </div >
    );
};

export default QR;
