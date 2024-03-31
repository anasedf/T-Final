import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';

//import dalleRoutes from './routes/dalle.routes.js';
import apiqrcode from './routes/apiqrcode.js';
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));


//app.use('/api/v1/dalle', dalleRoutes);
app.use('/api/v1/dalle', apiqrcode);
app.get('/', (req, res) => {
    res.status(200).json({ message: "INAHEE" })
});

app.listen(8080, () => {
    console.log("Server is running on port 8080")
});