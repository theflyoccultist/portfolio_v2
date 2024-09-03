import express from 'express';
import nodemailer from 'nodemailer';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

app.use(cors());

app.get('/', (req, res) => {
    res.send('Contact form backend is running');
});

app.post('/api/contact', async (req, res) => {
    const { email, message } = req.body;
  
    if (!email || !message) {
        return res.status(400).json({ error: 'Email and message are required.'})
    }

    try {
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: 'example@gmail.com',
                pass: 'example',
            },
        });

        const mailOptions = {
            from: email,
            to: 'example@gmail.com',
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
