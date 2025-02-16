import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import ReactMarkdown from "react-markdown";
import rehypePrism from "rehype-prism";
import remarkGfm from "remark-gfm";
import Prism from "prismjs";

import "./Blog.css";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";

const apiUrl = import.meta.env.VITE_API_URL

interface BlogPost {
    id: number;
    title: string;
    thumbnail: string;
    author: string;    
    content: string;
    publishedAt: string;
  }


export default function ArticlePage() {
    const { id } = useParams<{ id: string }>();
    const [blogPost, setBlogPost] = useState<BlogPost | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    const convertDate = (x : string) => {
        const dateObject = new Date(x);
        const formattedDate = dateObject.toDateString();
        return formattedDate;
    }

    useEffect(() => {
        const fetchPostData = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${apiUrl}/api/blog/${id}`);
                if (response.data) {
                    setBlogPost(response.data);
                } else {
                    setError("Blog post not found.")
                }
            } catch (error) {
                setError('Failed to load blog post.')
                console.error('Error fetching blog post:', error);
            } finally {
                setLoading(false);
            }
        };
        if (id) fetchPostData();
    }, [id]);

    useEffect(() => {
        Prism.highlightAll();
        }, [blogPost?.content])
    
    if (loading) {
        return (
            <Container id="blog" className="blog-container">
                <div className="hero-title">Loading blog post...</div>
            </Container>
        );
    }

    if (error) {
        return (
            <Container id="blog" className="blog-container">
                <div className="hero-title">{error}</div>
            </Container>
        );
    }

    if (!blogPost) {
        return (
            <Container id="blog" className="blog-container">
                <h1 className="hero-title">No blog post available.</h1>
            </Container>
        );
    }

    return (
        <Container id="blog" className="blog-container">
            <div>
                <h1 className="hero-title" >{blogPost.title}</h1>
                <div className="card-text">     
                    <p className="author text-muted">by {blogPost.author}</p>
                    <img
                         src={blogPost.thumbnail} 
                        alt={blogPost.title} 
                        className="hero-image"
                    />
                    <ReactMarkdown
                        children={blogPost.content}
                        remarkPlugins={[remarkGfm]}
                        rehypePlugins={[rehypePrism]}
                    />
                    <p  className="mb-2 text-muted">{convertDate(blogPost.publishedAt)}</p>                
                </div>
            </div>
        </Container>
    );
};