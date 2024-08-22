import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import "../assets/styles/style.css";
import logo from "../assets/logos/logo_chain.png";
import logo2 from "../assets/logos/logo_chain_white.png";

function NavigationBar() {
  const [scrolling, setScrolling] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) { 
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <Navbar
      collapseOnSelect
      fixed="top"
      expand="lg"
      bg={scrolling ? 'primary' : 'light'}
      data-bs-theme={scrolling ? 'dark' : 'light'}
      className={`mb-6 ${scrolling ? 'scrolled-navbar' : ''}`}
    >
      <Container>
        <Navbar.Brand href="/" className='fw-bold custom-text-logo'>
        <img
            src={scrolling ? logo2 : logo}
            alt="news"
            width={50}
            height={50}
          />
          {' '} Berita Kini
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav className='text-warning fs-6 fw-semibold'>
            <Nav.Link href="/">Beranda</Nav.Link>
            <Nav.Link href="/terbaru">Terbaru</Nav.Link>
            <Nav.Link href="/hiburan">Hiburan</Nav.Link>
            <Nav.Link href="/gaya">Gaya Hidup</Nav.Link>
            <Nav.Link href="/olahraga">Olahraga</Nav.Link>
            <Nav.Link href="/nasional">Nasional</Nav.Link>
            <Nav.Link href="/intrnasional">Internasional</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
