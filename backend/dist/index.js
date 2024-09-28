"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const mail_1 = __importDefault(require("@sendgrid/mail"));
const cors_1 = __importDefault(require("cors"));
const path_1 = __importDefault(require("path"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config({ path: './backend/.env' });
mail_1.default.setApiKey(process.env.SENDGRID_API_KEY);
const app = (0, express_1.default)();
app.use(express_1.default.json());
const PORT = process.env.PORT || 5000;
app.use((0, cors_1.default)({
    origin: ['https://rinkakuworks.com/'],
    methods: ['GET', 'POST', 'OPTIONS'],
    credentials: true
}));
app.options('*', (0, cors_1.default)());
app.use(express_1.default.static('/home/fali8410/public_html'));
app.use('/public', express_1.default.static(path_1.default.join(__dirname, 'public')));
app.get('/backend', (req, res) => {
    res.send('Contact form backend is running');
});
app.post('/send-email', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { to, from, subject, text } = req.body;
    const msg = {
        to,
        from,
        subject,
        text,
    };
    mail_1.default
        .send(msg)
        .then(() => {
        res.status(200).send('Email sent successfully');
    })
        .catch((error) => {
        console.error('Error sending email', error);
        res.status(500).send('An error occured while sending the email');
    });
}));
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
