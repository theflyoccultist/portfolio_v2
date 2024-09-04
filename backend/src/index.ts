import express, { Request, Response } from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

import dotenv from 'dotenv';
dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors({
    origin: 'http://localhost:5173',
    methods: ['GET', 'POST'],
    credentials: true
}));

app.get('/', (req: Request, res: Response) => {
    res.send('Contact form backend is running');
});

app.post('/api/contact', async (req: Request, res: Response) => {
    const { email, message } = req.body;
  
    if (!email || !message) {
        return res.status(400).json({ error: 'Email and message are required.'})
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: 'New Contact Form Submission',
            text: message,
        };

        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'Email sent successfully.'});
    } catch (error) {
        console.error('Error sending email:', error);
        res.status(500).json({ error: 'Failed to send email.'})
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});