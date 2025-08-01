import './Footer.css'
import { GoDash } from "react-icons/go";
import { FaWhatsapp } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
    const phone = "971557443213";
    const message = encodeURIComponent("Hello, I want to order your products");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`
    return (
        <div className='Footer-bg-cont' id="footer">
            <div className='footer-top-cont'>
                <h1 className='footerh1'>Order Now <GoDash /> Bulk Discounts Available for May to July</h1>
                <h1 className='year'>2025!</h1>
                <p className='footerp'>Don't miss out on our special corporate pricing. Get your customized gifts delivered across UAE.</p>
                <div className='footer-btns-cont'>
                    <a href='#contactus'><button className='reqq-btn'>Request a Quote</button></a>
                    <a
                        href={whatsappUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <button className='whats-btn'><FaWhatsapp className='FaWhatsapp' /> Order on WhatsApp</button>
                    </a>
                </div>
            </div>
            <div className='footer-botm-cont'>
                <h2 className='footerbotmh2'>Evergrow</h2>
                <p className='footerbotmp'>Trusted by businesses across<br />
                    U.A.E since 1990 with <br />
                    expertise in custom-made <br/>corporate gifts.
                    
                </p>
                <div className='footer-icons-cont'>
                    <a href="https://www.facebook.com/evergrowuae" target="_blank" rel="noopener noreferrer">
                        <FaFacebook className='icon-foot' />
                    </a>
                    <a href="https://www.instagram.com/evergrow.ae" target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='icon-foot' />
                    </a>
                    {/*<FaTwitter className='icon-foot' />
                    <h4 className='icon-foot'>n</h4>*/}
                </div>
            </div>
        </div>
    )
}

export default Footer