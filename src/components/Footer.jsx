import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import * as Icon from "react-bootstrap-icons";
import logo from "../assets/logos/logo_chain_white.png"
import "../assets/styles/style.css";

function Footer() {
  return (
    <div className="Footer">
      <Container>
        <Row>
          <Col md={3} lg={4} className="ft-1">
            <h3> <img src={logo} alt="news" width={50} height={50} className="custom-logo"/> Berita Kini</h3>
            <p>&copy;  2023 Berita Kini. All Rights Reserved.</p>
            <p className="fw-bold">Ikuti Kami</p>
            <div className="footer-icons mb-5">
              <a href="/"><Icon.Youtube /></a>
              <a href="/"><Icon.Instagram /></a>
              <a href="/"><Icon.Facebook /></a>
            </div>
          </Col>
          <Col md={3} lg={2} className="ft-2 my-3">
            <h5 className="fw-semibold text-white">Telusuri</h5>
            <ul>
              <li className="nav-item"><a href="/">Beranda</a></li>
              <li className="nav-item"><a href="/terbaru">Terbaru</a></li>
              <li className="nav-item"><a href="/hiburan">Hiburan</a></li>
              <li className="nav-item"><a href="/gaya">Gaya Hidup</a></li>
              <li className="nav-item"><a href="/olahraga">Olahraga</a></li>
              <li className="nav-item"><a href="/nasional">Nasional</a></li>
              <li className="nav-item"><a href="/intrnasional">Internasional</a></li>
            </ul>
          </Col>
          <Col md={3} lg={3} className="ft-3 my-3">
            <h5 className="fw-semibold text-white">Bantuan</h5>
            <p>Kontak Kami</p>
            <p>Laporan Pembajakan</p>
            <p>Kebijakan</p>
          </Col>
          <Col md={3} lg={3} className="ft-4 my-3">
            <h5 className="fw-semibold text-white">Berlangganan Berita Baru</h5>
            <Form className="my-3">
              <Form.Group controlId="formNewsletter" className="position-relative">
                <Form.Control
                  type="email"
                  placeholder="Masukkan email"
                  className="mb-5 py-3 "
                />
                <Button 
                  variant="primary" 
                  type="submit" 
                  className="position-absolute end-0 top-0 py-2 m-2"
                >
                  <Icon.SendFill />
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
