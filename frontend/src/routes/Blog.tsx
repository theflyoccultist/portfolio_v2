import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import "./Blog.css";
import axios from 'axios';
import DOMPurify from 'dompurify';

interface BlogPost {
    id: number;
    title: string;
    content: string;
    author: string;
    publishedAt: string;
  }

const apiUrl = import.meta.env.VITE_API_URL

export default function Blog() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const convertDate = (x : string) => {
        const dateObject = new Date(x);
        const formattedDate = dateObject.toDateString();
        return formattedDate;
    }

    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${apiUrl}/api/blog`, {
                    headers: {}
                });
                setBlogPosts(response.data);
            } catch (error) {
                setError('Failed to load blog posts.')
                console.error('Error fetching blog posts', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogPosts();
    }, []);

    return (
        <Container id="blog" className="blog-container">
            <div className="text-center">
                <h2>Welcome to the blog</h2>
                {error && <div className="text-danger">{error}</div>} 
                {loading ? (
                    <div>Loading blog posts...</div>
                ) : (
                    blogPosts.length > 0 ? (
                    blogPosts.slice().reverse().map((blog) => (

                            <Card key={blog.id}>
                                <Card.Body>
                                    <Card.Title>{blog.title}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">by {blog.author}</Card.Subtitle>
                                    <Card.Text dangerouslySetInnerHTML={{
                                        __html: DOMPurify.sanitize(blog.content)
                                    }} />
                                </Card.Body>
                                <Card.Footer className="text-muted">{convertDate(blog.publishedAt)}</Card.Footer>
                            </Card>
                        ))
                ) : (
                <div className="text-center">
                  No blog posts found.
                </div>
              )
            )}
           </div> 
        </Container>
    );
}