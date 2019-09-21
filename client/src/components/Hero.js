import React, { Component } from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import '../css/hero.css'
import slide1 from '../images/slideshows/slideshow-hero-1.jpg'
import slide2 from '../images/slideshows/slideshow-hero-2.jpg'
import slide3 from '../images/slideshows/slideshow-hero-3.jpg'

class Hero extends Component {
    render() {
        const settings = {
            dots: false,
            infinite: true,
            fade: true,
            speed: 3500,
            slidestoShow: 1,
            slidestoScroll: 1,
            autoplay: true,
            pauseOnHover: true,
            cssEase: "ease"
        }
        return(
            <div>
                <Slider {...settings}>
                <div className="hero-slide">
                    <img src={slide1} alt="slideshow gallery showing Dwyan Alford"/>
                </div>
    
                <div className="hero-slide">
                    <img src={slide3} alt="slideshow gallery showing Dwyan Alford"/>
                </div>
            
                <div className="hero-slide">
                    <img src={slide2} alt="slideshow gallery showing Dwyan Alford"/>
                </div>
                </Slider>
            </div>
        )
    }
  }

export default Hero

