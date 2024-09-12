import express from 'express';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

const router = express.Router();

router.route('/').get((req, res) => {
    res.status(200).json({ message: "Hello from champ" });
});

router.route('/').post(async (req, res) => {
    try {
        const { prompt } = req.body;

        // สร้าง string ที่มีรูปแบบตามที่ต้องการ
        const result = 
            `Firstname : ${prompt[0]}, 
            Lastname : ${prompt[1]}, 
            Address : ${prompt[2]}, 
            MobilePhone : ${prompt[3]}`;

        // สร้าง URL ของ API ของ qrserver.com โดยใช้ข้อมูลที่ส่งมาจากลูกค้า
        let apiUrl = `https://api.qrserver.com/v1/create-qr-code/?size=1024x1024&data=${result}`;

        // เรียกใช้ API ของ qrserver.com เพื่อสร้าง QR code
        apiUrl = decodeURI(apiUrl);
        apiUrl = encodeURI(apiUrl);
        const response = await axios.get(apiUrl, { responseType: 'arraybuffer' });
        const image = Buffer.from(response.data, 'binary').toString('base64')
        // ตรวจสอบสถานะของการเรียก API

        if (image) {
            res.status(200).json({ photo: image });
        }
        else {
            res.status(500).json({ message: "[Error] Image couldn't be fetched!" });
        }

    } catch (error) {
        console.error('Error:', error.message);
        res.status(500).json({ message: "[Error] Something went wrong!" });
    }
});

export default router;
