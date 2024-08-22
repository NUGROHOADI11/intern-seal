import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { getNewsList } from '../api';
import '../assets/styles/style.css';
import img3 from "../assets/logos/logo_chain.png";
import banner1 from "../assets/images/banner1.png";

function Detail() {
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
      <Col key={i} className="mb-4">
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

  const RekomNewsList2 = () => {
    return currentItems.map((news, i) => (
      <Col key={i} xs={24} sm={12} md={10} lg={6} xl={4} className="mb-4">
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

  return (
    <Container className="detail-container">
      <Row>
        <Col xs={24} sm={16} md={12} lg={12} xl={9} className="main-content">
          <h1>Detail Page Title</h1>
          <section id="section1">
            <p>This is the content for Section 1.</p>
            <img
              style={{ height: '50vh', width: '70vh' }}
              className="d-block w-100 "
              src={banner1}
              alt="Third slide"
              
            />
            <p>This is the content for Section 1.</p>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum quia quae quam unde ea voluptatem accusamus vitae repellendus molestiae maxime temporibus sunt recusandae labore rerum, totam quaerat at ab optio ipsum consectetur dolorem laborum? Veniam mollitia quos recusandae perspiciatis. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores sint culpa in, corporis, labore a voluptate sed consequuntur officiis voluptates ratione velit! Nostrum voluptate explicabo velit nesciunt dignissimos. Nesciunt, inventore?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum quia quae quam unde ea voluptatem accusamus vitae repellendus molestiae maxime temporibus sunt recusandae labore rerum, totam quaerat at ab optio ipsum consectetur dolorem laborum? Veniam mollitia quos recusandae perspiciatis.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe nostrum quia quae quam unde ea voluptatem accusamus vitae repellendus molestiae maxime temporibus sunt recusandae labore rerum, totam quaerat at ab optio ipsum consectetur dolorem laborum? Veniam mollitia quos recusandae perspiciatis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam asperiores nobis ducimus et repellat delectus pariatur aperiam, omnis cum culpa voluptas corporis quis tempora, blanditiis expedita nihil! Recusandae amet aspernatur adipisci fugit consequatur temporibus, facere laudantium laboriosam assumenda earum quaerat!</p>
            <div>
              <h2 className='label mb-5'>Komentar</h2>
              <Row className='komen'>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}><img src={img3} alt="Profile Photo" className="img-fluid " style={{ maxWidth: '40px' }} /></Col>
                <Col xs={11}><Form>
                  <Form.Group className="mb-4" controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={6} placeholder="Apa yang ingin anda tanyakan?" />
                  </Form.Group>
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
                </Form></Col>
              </Row>
              <Row >
                <Col xs={1} sm={1} md={1} lg={1} xl={1}><img src={img3} alt="Profile Photo" className="img-fluid " style={{ maxWidth: '40px' }} /></Col>
                <Col xs={11}>
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quas, ipsam reprehenderit veniam aspernatur illo facilis atque animi. Ipsum, quod?</p>
                </Col>
              </Row>
              <Row className='komen px-5'>
                <Col xs={1} sm={1} md={1} lg={1} xl={1}><img src={img3} alt="Profile Photo" className="img-fluid " style={{ maxWidth: '40px' }} /></Col>
                <Col xs={8}>
                  <h4>Lorem, ipsum dolor.</h4>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sit quas, ipsam reprehenderit veniam aspernatur illo facilis atque animi. Ipsum, quod?</p>
                </Col>
              </Row>
            </div>
          </section>
          <Row>
          <h2 className='label my-5'>Berita Terkait</h2>
            <RekomNewsList2 />
          </Row>
        </Col>
        <Col xs={24} sm={12} md={8} lg={6} xl={3} className="sidebar">
          <h2 className='label my-5'>Berita Terpopuler</h2>
          <RekomNewsList />
        </Col>
      </Row>
    </Container>
  );
}

export default Detail;
