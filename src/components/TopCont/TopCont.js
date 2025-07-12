import './TopCont.css'
import { GoDash } from "react-icons/go";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const TopCont = () => {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000

    };

    return (
        <div className='top-bg-cont'>
            {/* Desktop Slider */}
            <div className='slider-desktop'>
                <Slider {...settings}>
                    <div><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752132641/banner3_vukufm.png" alt="banner1" /></div>
                    <div><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752133107/banner2_dm88be.png" alt="banner2" /></div>
                    <div><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752132794/banner1_x90d5b.png" alt="banner3" /></div>
                    <div><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752132446/topdis1_ptyqun.png" alt="banner4" /></div>
                </Slider>
            </div>

            {/* Mobile Slider */}
            <div className='slider-mobile'>
                <Slider {...settings}>
                    <div><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752126018/bannermobile2_o9ucag.png" alt="banner1" /></div>
                    <div><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752125980/bannermobile3_wcquob.png" alt="banner2" /></div>
                    <div><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752125979/bannermobile4_qj6ej1.png" alt="banner3" /></div>
                </Slider>
            </div>
        </div>
    )
}

export default TopCont