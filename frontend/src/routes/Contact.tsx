import React, { useState } from 'react';
import { FormControl, FormGroup, FormLabel, Button, Spinner } from 'react-bootstrap';
import './Contact.css';

export default function ContactPage() {
    const [formData, setFormData] = useState({
        email: '',
        message: ''
    });
    const [statusMessage, setStatusMessage] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await fetch('http://localhost:5000/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatusMessage('Email sent successfully!');
                setFormData({ email: '', message: ''})
            } else {
                setStatusMessage('Failed to send email. Please try again later.')
            }
        } catch (error) {
            console.error('Error', error);
            setStatusMessage('Failed to send email.')
        } finally {
            setIsSubmitting(false);
        }
    };

    return(
            <div id="contact" className="contact-container">
                <div className="text-center">
                    <h1>Let's Connect!</h1>
                    <p>Feel free to contact me using the form below. Messages will be sent to my mailbox.</p>
                </div>
                    <div id="contact-form" className='container mt-5'>
                    <form onSubmit={handleSubmit}>
                        <FormGroup className="mb-3" controlId="exampleForm.ControlInput1">
                            <FormLabel>Email address</FormLabel>
                            <FormControl
                                type='email'
                                placeholder='name@example.com'
                                name='email'
                                value={formData.email}
                                onChange={handleInputChange}
                                required
                            />
                        </FormGroup>
                        <FormGroup className="mb-3" controlId="exampleForm.ControlTextarea1">
                            <FormLabel>Your message here</FormLabel>
                            <FormControl 
                                as="textarea" 
                                rows={10} 
                                name='message'
                                value={formData.message}
                                onChange={handleInputChange}
                                required    
                            />
                        </FormGroup>
                        <div className="d-flex justify-content-center mt-4">
                            <Button variant="secondary" size="lg" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? (
                                    <>
                                        <Spinner animation="border" size="sm" /> Sending...
                                    </>
                                ) : (
                                    'Send e-mail'
                                )}
                            </Button>
                        </div>
                    </form>
                    {statusMessage && (
                        <div className="text-center mt-4">
                            <p>{statusMessage}</p>
                        </div>
                    )}
            </div>
        </div>
    );
}