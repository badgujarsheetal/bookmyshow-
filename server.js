const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const app = express();
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'cinema'
});

db.connect(err => {
    if (err) throw err;
    console.log('MySQL connected...');
});

app.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 8);
    db.query('INSERT INTO users (name, email, password) VALUES (?, ?, ?)', [name, email, hashedPassword], (err, result) => {
        if (err) throw err;
        res.send('User registered!');
    });
});

app.post('/login', (req, res) => {
    const { email, password } = req.body;
    db.query('SELECT * FROM users WHERE email = ?', [email], async (err, results) => {
        if (err) throw err;
        if (results.length === 0 || !(await bcrypt.compare(password, results[0].password))) {
            return res.status(401).send('Incorrect email or password');
        }
        const token = jwt.sign({ id: results[0].id }, 'secret', { expiresIn: '1h' });
        res.json({ token });
    });
});

// Booking confirmation email/SMS would be handled by a service like Twilio or SendGrid
app.post('/book', (req, res) => {
    const { userId, movieId, seats, totalPrice } = req.body;
    const bookingTime = new Date();
    db.query('INSERT INTO bookings (user_id, movie_id, seats, total_price, booking_time) VALUES (?, ?, ?, ?, ?)', 
    [userId, movieId, seats, totalPrice, bookingTime], (err, result) => {
        if (err) throw err;
        // Logic to send email/SMS notification
        res.send('Booking successful!');
    });
});

// Fetch notifications
app.get('/notifications', (req, res) => {
    // Logic to fetch and send notifications
    res.send('Notifications endpoint');
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});