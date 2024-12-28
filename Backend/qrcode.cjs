const QRCode = require('qrcode');

const generateUPIQR = async ( amount) => {
    const upiUrl =`upi://pay?pa=tanishkumar934@ybl&pn=Tanish_singh&am=${amount}&cu=INR`; // UPI URL format
    const qrCode = await QRCode.toDataURL(upiUrl); // Generate QR code
    return qrCode;
};

module.exports = generateUPIQR;
