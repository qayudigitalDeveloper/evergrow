import './TopCont.css'
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
                    
                    <div><a href='#products'><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752574985/Banner-3_evmbw5.jpg" alt="banner2" /></a></div>
                    <div><a href='#products'><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752574060/Banner-1-1_zcelud.jpg" alt="banner3" /></a></div>
                    <div><a href='#products'><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752573933/Banner-2_amjsex.jpg" alt="banner4" /></a></div>
                    <div><a href='#products'><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752573780/Banner-4_ukrqph.jpg" alt="banner4" /></a></div>
                </Slider>
            </div>

            {/* Mobile Slider */}
            <div className='slider-mobile'>
                <Slider {...settings}>
                    <div><a href='#products'><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752576554/Banner-6_psyink.jpg" alt="banner2" /></a></div>
                    <div><a href='#products'><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752576733/Banner-5-1_sxtbfa.jpg" alt="banner1" /></a></div>
                    <div><a href='#products'><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752576911/Banner-8_qbpq24.jpg" alt="banner2" /></a></div>
                    <div><a href='#products'><img className='banner' src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752577621/Banner-9-1_waf0yk.jpg" alt="banner3" /></a></div>
                </Slider>
            </div>
        </div>
    )
}

export default TopCont
