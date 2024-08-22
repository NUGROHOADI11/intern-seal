import React, { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Pagination from 'react-bootstrap/Pagination'; // Import Pagination
import { getNewsList } from '../api';
import '../assets/styles/style.css';

function Popular() {
  const [rekomNews, setRekomNews] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [category, setCategory] = useState('nasional'); 
  const itemsPerPage = 3;

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      try {
        const response = await getNewsList(category);
        setRekomNews(response.posts);
      } catch (err) {
        console.error('Error fetching news list:', err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = rekomNews.slice(indexOfFirstItem, indexOfLastItem);

  const RekomNewsList = () => {
    return currentItems.map((news, i) => (
      <Col key={i} xs={24} sm={12} md={8} lg={6} xl={4} className="mb-4">
        <Card style={{ display: 'flex', flexDirection: 'row', height: '100%' }}>
          <Card.Img variant="top" src={news.thumbnail} style={{ width: '40%', objectFit: 'cover' }} />
          <Card.Body style={{ flex: '1', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Card.Title>{news.title}</Card.Title>
            <Card.Link href="/detail" target="_blank" className='link-underline link-underline-opacity-0 link-primary'>read more</Card.Link>
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
    <Container className="my-5">
      <h4 className="my-5 fw-semibold label">Berita Terpopuler</h4>
      {loading && <p>Loading...</p>}
      {error && <p>Error loading news.</p>}
      <Row>
        <RekomNewsList />
      </Row>
    </Container>
  );
}

export default Popular;
