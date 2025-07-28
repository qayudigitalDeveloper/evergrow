import './Testimonials.css'
import { FaStar } from "react-icons/fa";

const testimonialsList = [
    {
        id: 1,
        name: "Abdul Ajmal",
        department: "Enotions Events",
        desc: "We've been working with Poorti for our corporate gifting needs, and she’s hands-down one of the best in Dubai! Whether it’s customised bags, bulk branded items, or sustainable corporate gifts, the quality and professionalism are top-notch. Her team ensures high-quality printing, timely delivery, and excellent attention to detail. If you're looking for a trusted vendor for corporate gifting in Dubai, Poorti is the one to go to. Highly recommended!",
    },
    {
        id: 2,
        name: "Agish Kavithil",
        department: "Movementor",
        desc: "I had an amazing experience getting a custom t-shirt printed from Poorti's company. I wanted a gold gradient design, and so many companies told me it was either impossible to print or wouldn’t last long even if they managed it. Poorti, however, was confident it could be done exactly as I envisioned and assured me the print would be long-lasting. The result was perfect! The gradient came out beautifully, and the quality feels incredibly durable. I’m super happy with the outcome and will definitely be printing many more of my company's merchandise with them. Highly recommend to anyone looking for top-quality custom printing!",
    },
    {
        id: 3,
        name: "Israa Javed",
        department: "Writer Relocation's",
        desc: "Good corporate items with personalised service. Would recommend Evergrow!",
    }
]

const Testimonials = () => {
    return (
        <div className='bg-testi-cont' id="testimonials">
            <h1 className='corpo-h'>What Our Clients Say</h1>
            <p className='corpo-p'>Trusted by leading companies acress UAE</p>
            <ul className='corpo-ul'>
                {testimonialsList.map(each =>
                    <li className='testi-li' key={each.id}>
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
                    <div className='tr-card-cont'>
                        <img className='comp-logos'
                        src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752569983/emirates-seeklogo_r8asyd.png" alt='comp-logo' />
                        <p>Emirates</p></div>
                    <div className='tr-card-cont'>
                        <img className='comp-logos' 
                        src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752569837/etisalat-new-2022-seeklogo_twr7ko.png" alt='comp-logo'/>
                        <p>Etisalat</p>
                        </div>
                    <div className='tr-card-cont'>
                        <img className='comp-logos' 
                        src="https://res.cloudinary.com/dkvptcm7q/image/upload/v1752570131/emaar-seeklogo_vdcdri.png" alt='comp-logo' />
                        <p>Emaar</p></div>
                    <div className='tr-card-cont'>
                        <img className='comp-logos' src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1752570353/abu-dhabi-national-oil-company-adnoc-seeklogo_p4mt5d.png' alt='comp-logo' />
                        <p>ADNOC</p></div>
                    <div className='tr-card-cont'>
                        <img className='comp-logos' src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1752570524/dewa-seeklogo_mvpenw.png' alt='comp-logo' />
                        <p>DEWA</p></div>
                    <div className='tr-card-cont'>
                        <img className='comp-logos' src='https://res.cloudinary.com/dkvptcm7q/image/upload/v1752570714/idqok-k7lS_1752570686181_rsdstg.jpg' alt='comp-logo' />
                        <p>Jumeirah</p></div>
            </div>
        </div>
    )
}

export default Testimonials