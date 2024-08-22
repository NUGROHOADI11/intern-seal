import React, { useState, useEffect } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import "../assets/styles/style.css";
import { getNewsList } from '../api'; 

function Hero() {
    const [index, setIndex] = useState(0);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const category = 'olahraga'; 
    const postLimit = 5; 

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const data = await getNewsList(category);
                setPosts(data.posts.slice(0, postLimit)); 
            } catch (err) {
                console.error("Error fetching posts:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, [category]);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading posts.</p>;

    return (
        <Container>
            <Carousel activeIndex={index} onSelect={handleSelect} style={{ marginTop: '5rem'  }} >
                {posts.map((post, idx) => (
                    <Carousel.Item key={idx}>
                        <img
                            style={{ height: '50vh', objectFit: 'cover' }}
                            className="d-block w-100"
                            src={post.thumbnail} 
                            alt={`Slide ${idx + 1}`}
                        />
                        <Carousel.Caption>
                            <h3>{post.title || `Slide ${idx + 1}`}</h3>
                            <p>{post.description || 'Description here.'}</p>
                            <a href="/detail" target="_blank" rel="noopener noreferrer" className='link-light link-offset-2 link-underline-opacity-50 link-underline-opacity-100-hover fw-medium' >Read more</a>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
}

export default Hero;
