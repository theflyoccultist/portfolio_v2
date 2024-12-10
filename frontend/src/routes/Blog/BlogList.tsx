import { useEffect, useState } from "react";
import Container from 'react-bootstrap/Container';
import BlogCard from "./BlogCard";
import Pagination from "../../components/Pagination";
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
    const [currentPage, setCurrentPage] = useState<number>(1);
    const [totalPages, setTotalPages] = useState<number>(0);
    const itemsPerPage = 10;

    useEffect(() => {
        const fetchBlogPosts = async () => {
            setLoading(true);
            setError(null);
            try {
                const response = await axios.get(`${apiUrl}/api/blog`, {
                    headers: {}
                });
                const posts = response.data.reverse();
                setBlogPosts(posts);
                setTotalPages(Math.ceil(response.data.length / itemsPerPage));
            } catch (error) {
                setError('Failed to load blog posts.')
                console.error('Error fetching blog posts', error);
            } finally {
                setLoading(false);
            }
        };
        fetchBlogPosts();
    }, []);

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    }

    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = blogPosts.slice(startIndex, startIndex + itemsPerPage);

    const truncate = (text: string, length: number): string => {
        if (text.length <= length) return text;
        return text.substring(0, length).trimEnd() + '...';
    };
    

    return (
        <Container id="blog" className="blog-container">
            <div>
                <h2 className="text-center">Welcome to the blog</h2>
                {error && <div className="text-danger">{error}</div>} 
                {loading ? (
                    <div>Loading blog posts...</div>
                ) : (
                    currentItems.length > 0 ? (
                    currentItems.map((blog) => (
                        <BlogCard 
                            key={blog.id}
                            id={blog.id}
                            title={blog.title}
                            thumbnail={blog.thumbnail}
                            excerpt={truncate(blog.content, 60)}
                        />

                    ))
                ) : (
                <div className="text-center">
                  No blog posts found.
                </div>
              )
            )}
           </div>
            <div style={{ bottom:'0px'}}>
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    onPageChange={handlePageChange}
                />
            </div>
        </Container>
    );
}