import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "../assets/images/banner1.png";
import img2 from "../assets/images/banner2.png";
import img3 from "../assets/images/banner3.png";
import "../assets/styles/style.css";
import { Container } from 'react-bootstrap';

function Adds() {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };

    return (
        <Container>
            <div>
                <Carousel activeIndex={index} onSelect={handleSelect}>
                    <Carousel.Item>
                        <img
                            style={{ height: '50vh' }}
                            className="d-block w-100"
                            src={img1}
                            alt="First slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '50vh', width: '70vh' }}
                            className="d-block w-100"
                            src={img2}
                            alt="Second slide"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            style={{ height: '50vh', width: '70vh' }}
                            className="d-block w-100"
                            src={img3}
                            alt="Third slide"
                        />
                    </Carousel.Item>
                </Carousel>
            </div>
        </Container>
    );
}

export default Adds;
