import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { Container } from "react-bootstrap";
import DOMPurify from "dompurify";
import "./Blog.css";

import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-typescript";
import "prismjs/components/prism-javascript";
import "prismjs/components/prism-bash";
import "prismjs/components/prism-rust";
import "prismjs/components/prism-python";

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
        const adjustCodeBlocks = () => {
            const preElements = document.querySelectorAll<HTMLPreElement>("pre.ql-syntax");
            preElements.forEach((pre) => {
                const textContent = pre.textContent || '';
                const lines = textContent.split('\n');
                const firstLine = lines[0]?.trim().toLowerCase() || 'typescript';
                const language = ['typescript', 'javascript', 'bash', 'rust', 'python'].includes(firstLine)
                    ? firstLine
                    : "typescript";

                if (!pre.querySelector("code")) {
                    const codeElement = document.createElement("code");
                    codeElement.className = `language-${language}`;
                    codeElement.innerHTML = DOMPurify.sanitize(pre.innerHTML);
                    pre.innerHTML = "";
                    pre.appendChild(codeElement);
                }
            });
            Prism.highlightAll();
        };
        if (blogPost?.content) adjustCodeBlocks();
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
                    <img src={blogPost.thumbnail} alt={blogPost.title} className="hero-image"/>
                    <p dangerouslySetInnerHTML={{
                        __html: DOMPurify.sanitize(blogPost.content),
                    }}
                    />
                    <p  className="mb-2 text-muted">{convertDate(blogPost.publishedAt)}</p>                
                </div>
            </div>
        </Container>
    );
};