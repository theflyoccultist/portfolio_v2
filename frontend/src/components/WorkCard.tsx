import React from 'react';
import { Card } from 'react-bootstrap';

interface WorkCardProps {
    imageSrc: string;
    appName: string;
    roles: string;
    description: string;
}

const WorkCard: React.FC<WorkCardProps> = ({ imageSrc, appName, roles, description }) => {
    return (
        <Card className="work-card my-4 mx-auto text-left">
            <Card.Img variant='top' src={imageSrc} alt={`${appName} screenshot`} className="img-fluid rounded-start" />
                <Card.Body className="d-flex flex-column justify-content-center">
                    <Card.Title className="app-name">{appName}</Card.Title>
                    <div className="card-content">
                        <Card.Text className="roles">
                            <strong>{roles}</strong>
                        </Card.Text>
                        <Card.Text>{description}</Card.Text>
                    </div>
                </Card.Body>
        </Card>
    );
};

export default WorkCard;