import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import BlogCard from "./BlogCard";
import "./Blog.css";
import axios from 'axios';


interface BlogPost {
    id: number;
    title: string;
    author: string;
    thumbnail: string;        
    content: string;
    publishedAt: string;
  }

const apiUrl = import.meta.env.VITE_API_URL

export default function BlogList() {
    const [blogPosts, setBlogPosts] = useState<BlogPost[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

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
            <div>
                <h2 className="text-center">Welcome to the blog</h2>
                {error && <div className="text-danger">{error}</div>} 
                {loading ? (
                    <div>Loading blog posts...</div>
                ) : (
                    blogPosts.length > 0 ? (
                    blogPosts.slice().reverse().map((blog) => (
                        <BlogCard 
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            thumbnail={blog.thumbnail}
                            excerpt={blog.content.substring(0, 60) + '...'}
                        />

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