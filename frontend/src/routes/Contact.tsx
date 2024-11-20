import { Container } from 'react-bootstrap';
import './Contact.css';
import { useTranslation } from 'react-i18next';

export default function ContactPage() {
    const { t } = useTranslation();

    return(
        <Container id="contact" className="contact-container">
            <div className="text-center">
                <h2>{t('contact')}</h2>
                <h4>{t('contact2')}</h4>
            </div>
            <div className='fartalert text-center'>
                <h5>Portfolio : rinkakuworks.com<br/>
                    Email : rinkakuworks@gmail.com<br/>
                    LinkedIn : <a href='https://www.linkedin.com/in/rin-delahaije-9750aa138/'>@rin-delahaije</a><br/>
                    GitHub : <a href='https://github.com/theflyoccultist'>theflyoccultist</a>
                </h5>
            </div>

        </Container>
    );
}