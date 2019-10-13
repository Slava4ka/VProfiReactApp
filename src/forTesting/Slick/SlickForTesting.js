import React from 'react';
import Slider from "react-slick";
import styles from "./Slick.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {getMassOfCategoriesForIndexPage} from "../testtingJS";

export default class SimpleSlider extends React.Component {
    render() {
        const cat = getMassOfCategoriesForIndexPage();

        const settings = {
            infinite: true,
            speed: 500,
            slidesToShow: 5,
            slidesToScroll: 1,
            initialSlide: 0,
            swipeToSlide: true,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 3,
                        infinite: true,
                        swipeToSlide: true
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2,
                        swipeToSlide: true,
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        swipeToSlide: true,
                    }
                }
            ]
        };
        return (
            <div className={styles.bodyOfSlick}>
                <div>
                    <Slider {...settings}>
                        {cat.map(a => (<div className={styles.category}>
                            <h6 style={{color: "white"}}>{a}</h6>
                        </div>))}
                    </Slider>
                </div>
            </div>
        );
    }
}