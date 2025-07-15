import './WhyChooseEvergrow.css'
import { FiClock } from "react-icons/fi";
import { IoIosPeople } from "react-icons/io";
import { SlNote } from "react-icons/sl";
import { MdEventNote } from "react-icons/md";

const WhyChooseEvergrow = () => {
    return (
        <div className='why' id="about">
            <h1 className='why-h'>Why Choose Evergrow</h1>
            <div className='corpo-ul'>
                <div className='choose-card'>
                    <div className='bg-why'>
                        <FiClock className='why-icon' />
                    </div>
                    <h1 className='choose-sub'>
                        30+ Years Experience
                    </h1>
                    <p className='choose-p'>
                        Trusted by businesses across U.A.E since 1990 with expertise in custom-made corporate gifts.
                    </p>
                </div>
                <div className='choose-card'>
                    <div className='bg-why'>
                        <IoIosPeople className='why-icon' />
                    </div>
                    <h1 className='choose-sub'>
                        1000+ Corporate clients
                    </h1>
                    <p className='choose-p'>
                        Serving major companies across banking, hospitality, tech, and government sectors in UAE.
                    </p>
                </div>
                <div className='choose-card'>
                    <div className='bg-why'>
                        <SlNote className='why-icon' />
                    </div>
                    <h1 className='choose-sub'>
                        Custom Branding
                    </h1>
                    <p className='choose-p'>
                        Premium customization options including laser engraving, embossing, and full-color printing.
                    </p>
                </div>
                <div className='choose-card'>
                    <div className='bg-why'>
                        <MdEventNote className='why-icon' />
                    </div>
                    <h1 className='choose-sub'>
                        Fast UAE Delivery
                    </h1>
                    <p className='choose-p'>
                        Ready stock available with 3-5 day delivery acress UAE. Express options available.
                    </p>
                </div>

            </div>
        </div>
    )
}

export default WhyChooseEvergrow