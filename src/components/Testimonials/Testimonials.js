import './Testimonials.css'
import { FaStar } from "react-icons/fa";

const testimonialsList = [
    {
        id: 1,
        name: "Ahmed Hassan",
        department: "HR Director, Emirates Bank",
        desc: "Evergrow delivered exceptional quality USB drives for our annual conference. The customization was perfect and delivery was ahead of schedule.",
    },
    {
        id: 2,
        name: "Sarah AI Maktoum",
        department: "Marketing Manager, Dubai Properties",
        desc: "We've been ordering our Ramadan gift boxes from Evergrow for 3 years now. Their attention to detail and quality is unmatched in the UAE.",
    },
    {
        id: 3,
        name: "Rajesh Kumar",
        department: "CEO, Tech Solutions UAE",
        desc: "The power banks we ordered were a hit with our clients. Great quality, competitive pricing, and excellent customer service.",
    }
]

const Testimonials = () => {
    return (
        <div className='bg-testi-cont' id="testimonials">
            <h1 className='corpo-h'>What Our Clients Say</h1>
            <p className='corpo-p'>Trusted by leading companies acress UAE</p>
            <ul className='corpo-ul'>
                {testimonialsList.map(each =>
                    <li key={each.id}>
                        <div className='testi-card'>
                            <div className='name-cont'>
                                <div className='name-bg-cont'>
                                    <h2>{each.name[0]}</h2>
                                </div>
                                <div className='name-posi-cont'>
                                    <h3>{each.name}</h3>
                                    <p>{each.department}</p>
                                </div>
                            </div>
                            <p className='desc'>
                                "{each.desc}"
                            </p>
                            <div className='stars-cont'>
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                                <FaStar className='star' />
                            </div>

                        </div>
                    </li>
                )}
            </ul>
            <h1 className='corpo-h'>Trusted By</h1>
            <div className='tr-cont'>
                    <div className='tr-card-cont'><p>Emirates</p></div>
                    <div className='tr-card-cont'><p>Etisalat</p></div>
                    <div className='tr-card-cont'><p>Emaar</p></div>
                    <div className='tr-card-cont'><p>ADNOC</p></div>
                    <div className='tr-card-cont'><p>DEWA</p></div>
                    <div className='tr-card-cont'><p>Jumeirah</p></div>
            </div>
        </div>
    )
}

export default Testimonials