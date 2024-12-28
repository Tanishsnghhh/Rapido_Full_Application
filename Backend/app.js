const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const app = express();
const cookieParser = require('cookie-parser');
const connectToDb = require('./db/db');
const userRoutes = require('./routes/user.routes');
const captainRoutes = require('./routes/captain.routes');
const mapsRoutes = require('./routes/maps.routes');
const rideRoutes = require('./routes/ride.routes');
const generateUPIQR =require('./qrcode.cjs')


connectToDb();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());



app.get('/', (req, res) => {
    res.send('Hello World');
});

app.use('/users', userRoutes);
app.use('/captains', captainRoutes);
app.use('/maps', mapsRoutes);
app.use('/rides', rideRoutes);

app.post('/generate-qr', async (req, res) => {
    const {  amount } = req.body;
    try {
        const qrCode = await generateUPIQR( amount);
        res.status(200).json({ qrCode });
    } catch (error) {
        res.status(500).send('Error generating QR code');
    }
});


module.exports = app;

