import React, {useState} from 'react'
import {Carousel} from "react-bootstrap";
import styles from './Carousel.module.css';


function ControlledCarouselTest() {
    const [index, setIndex] = useState(0);
    const [direction, setDirection] = useState(null);

    const handleSelect = (selectedIndex, direction) => {
        console.log("selectedIndex: " + selectedIndex);
        console.log("direction: " + direction);

        setIndex(selectedIndex);
        setDirection(direction);
    };

    return (
        <Carousel activeIndex={index} direction={direction} onSelect={handleSelect}>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="carousel_test/FirstSlide.svg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First slide label</h3>
                    <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="carousel_test/SecondSlide.svg"
                    alt="Second slide"
                />

                <Carousel.Caption>
                    <h3>Second slide label</h3>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="carousel_test/ThirdSlide.svg"
                    alt="Third slide"
                />

                <Carousel.Caption>
                    <h3>Third slide label</h3>
                    <p>
                        Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                    </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ControlledCarouselTest