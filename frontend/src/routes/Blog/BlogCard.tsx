import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import { Link } from "react-router-dom";
import "./BlogCard.css";
import DOMPurify from "dompurify";

interface BlogCardProps {
    id: number;
    title: string;
    thumbnail: string;
    excerpt: string;
}

const BlogCard: React.FC<BlogCardProps> = ({ id, title, thumbnail, excerpt }) => {
    
    return(
        <Card key={id} className='blog-card'>
            <Link to={`/blog/${id}`}>
            <Card.Body className='card-content'>
            <Row xs={2} md={2} lg={2} className="text-left">
                <Col>
                <Card.Img className='card-thumbnail' src={thumbnail} alt={title} />
                </Col>
                <Col>
                <Card.Title className='card-title'>{title}</Card.Title>
                <Card.Text className='card-dezcription' dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(excerpt),
                }}
                />
                </Col>
            </Row>
            </Card.Body>
            </Link>
        </Card>
    );
};

export default BlogCard;