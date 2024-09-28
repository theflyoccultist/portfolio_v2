import express, { Request, Response } from 'express';
import sgMail from'@sendgrid/mail'
import cors from 'cors';
import path from 'path'
import dotenv from 'dotenv';
dotenv.config({ path: './backend/.env' });

sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;


app.use(cors({
    origin: ['https://rinkakuworks.com/'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));

app.options('*', cors());

app.use(express.static('/home/fali8410/public_html'));

app.use('/public', express.static(path.join(__dirname, 'public')));

app.get('/backend', (req: Request, res: Response) => {
    res.send('Contact form backend is running');
});

app.post('/send-email', async (req: Request, res: Response) => {
    const { to, from, subject, text } = req.body;

    const msg = {
        to,
        from,
        subject,
        text,
    };

    sgMail
        .send(msg)
        .then(() => {
            res.status(200).send('Email sent successfully');
        })
        .catch((error) => {
            console.error('Error sending email', error);
            res.status(500).send('An error occured while sending the email');
        });
    });

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});