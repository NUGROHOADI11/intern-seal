import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination';
import * as Icon from "react-bootstrap-icons";
import { getNewsList } from "../api";
import "../assets/styles/style.css";

function Internasional() {
    const [rekomNews, setRekomNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const [currentPage, setCurrentPage] = useState(1);
    const [category, setCategory] = useState('internasional');
    const itemsPerPage = 16;

    useEffect(() => {
        const fetchNews = async () => {
            setLoading(true);
            try {
                const response = await getNewsList(category);
                setRekomNews(response.posts); 
            } catch (err) {
                console.error("Error fetching news list:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, [category]);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
    };

    const indexOfLastItem = currentPage * itemsPerPage;
    const indexOfFirstItem = indexOfLastItem - itemsPerPage;
    const currentItems = rekomNews.slice(indexOfFirstItem, indexOfLastItem);

    const RekomNewsList = () => {
        return currentItems.map((news, i) => (
            <Col xs={12} sm={6} md={6} lg={4} xl={3} className="mb-4" key={i}>
                <Card style={{ height: '100%' }}>
                    <Card.Img variant="top" src={news.thumbnail} />
                    <Card.Body>
                        <Card.Title>{news.title}</Card.Title>
                        <Card.Text>{news.description}</Card.Text>
                        <Card.Link href={news.link} target="_blank" className='link-underline link-underline-opacity-0 link-primary fw-semibold'>read more...</Card.Link>
                    </Card.Body>
                </Card>
            </Col>
        ));
    };

    const totalPages = Math.ceil(rekomNews.length / itemsPerPage);
    const paginationItems = [];
    for (let number = 1; number <= totalPages; number++) {
        paginationItems.push(
            <Pagination.Item
                key={number}
                active={number === currentPage}
                onClick={() => handlePageChange(number)}
            >
                {number}
            </Pagination.Item>
        );
    }

    return (
        <Container className="category">
            <h4 className='my-5 fw-semibold label'>Internasional</h4>
            {loading && <p>Loading...</p>}
            {error && <p>Error loading news.</p>}
            <Row>
                <RekomNewsList />
            </Row>
            <div className="d-flex justify-content-center my-4">
                <Pagination>
                    <Pagination.Prev
                        onClick={() => setCurrentPage(currentPage > 1 ? currentPage - 1 : 1)}
                        disabled={currentPage === 1}
                    >
                        <Icon.ArrowLeft /> Previous
                    </Pagination.Prev>
                    {paginationItems}
                    <Pagination.Next
                        onClick={() => setCurrentPage(currentPage < totalPages ? currentPage + 1 : totalPages)}
                        disabled={currentPage === totalPages}
                    >
                        Next <Icon.ArrowRight />
                    </Pagination.Next>
                </Pagination>
            </div>
        </Container>
    );
}

export default Internasional;
