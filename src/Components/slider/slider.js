

import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


import './style.css'

export default class SimpleSlider extends Component {
    render() {
        const settings = {
            dots: true,
            fade: true,
            infinte: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplaySpeed: 2000,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear"
            

        };
        return (
            <>

                <div>

                    <Slider {...settings}>

                        <div className="sliderImgOne" >
                        </div>
                        <div className="sliderImgTwo" >
                        </div>
                        <div className="sliderImgThree" >
                        </div>
                        <div className="sliderImgFour" >
                        </div>
                        <div className="sliderImgFive" >
                        </div>
                        


                    </Slider>


                </div>
            </>
        );
    }
}