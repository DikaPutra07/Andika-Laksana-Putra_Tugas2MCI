const express = require('express');
const app = express();
const port = 3000;
// const mahasiswaRoute = require('../app/routes/mahasiswaRoute');
const userRoute = require('../app/routes/userRoute');
const orderRoute = require('../app/routes/orderRoute');
const ticketRoute = require('../app/routes/ticketRoute');
const pembayaranRoute = require('../app/routes/pembayaranRoute');
const orderStatusRoute = require('../app/routes/orderStatusRoute');
const listBankRoute = require('../app/routes/listBankRoute');
const statusPembayaranRoute = require('../app/routes/statusPembayaranRoute');

const cors = require('cors');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => res.send('Hello World!'));
app.get('/test', (req, res) => res.send('Hello Camin MCI Anjay!'));

//app.use('/mahasiswa', mahasiswaRoute);
app.use('/user', userRoute);
app.use('/order', orderRoute);
app.use('/ticket', ticketRoute);
app.use('/pembayaran', pembayaranRoute);
app.use('/order-status', orderStatusRoute);
app.use('/list-bank', listBankRoute);
app.use('/status-pembayaran', statusPembayaranRoute);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));