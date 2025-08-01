import { useState } from 'react';
import './ContactUs.css'
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Select from 'react-select';
import { API_BASE_URL } from '../../config';
import { FaWhatsapp } from "react-icons/fa";

const intedProducts = [
    {
        id: 1,
        giftname: "Premium USB Drive"

    },
    {
        id: 2,
        giftname: "Insulated Drinkware"
    },
    {
        id: 3,
        giftname: "Executive NoteBooks"
    },
    {
        id: 4,
        giftname: "Wireless Charger"
    },
    {
        id: 5,
        giftname: "Power Bank"
    },
    {
        id: 6,
        giftname: "Eco-Friendly Gift Set"
    },
    {
        id: 7,
        giftname: "Bluetooth Speaker"
    },
    {
        id: 8,
        giftname: "Executive Desk Set Charger"
    },
    {
        id: 9,
        giftname: "Travel Gift Set"
    },
    {
        id: 10,
        giftname: "Ramadan Gift Box"
    }
]

const ContactUs = () => {
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [fullname, setfullname] = useState('')
    const [email, setemail] = useState('')
    const [mobileNum, setMobileNum] = useState('');
    const [companyName, setCompName] = useState('')
    const [quantity, setQuantity] = useState('');
    const [info, setinfo] = useState('')

    const customStyles = {
        multiValue: (styles) => ({
            ...styles,
            backgroundColor: '#007BFF', // Bootstrap blue
            color: 'white',
        }),
        multiValueLabel: (styles) => ({
            ...styles,
            color: 'white',
        }),
        multiValueRemove: (styles) => ({
            ...styles,
            color: 'white',
            ':hover': {
                backgroundColor: '#0056b3',
                color: 'white',
            },
        }),
    };


    const productOptions = intedProducts.map(product => ({
        value: product.giftname,
        label: product.giftname
    }));

    const onContactSubmit = async (event) => {
        event.preventDefault()
        
            const selectedGiftNames = selectedOptions.map(option => option.value);
            const details = {
                name: fullname,
                email: email,
                mobileNum: mobileNum,
                companyName: companyName,
                quantity: quantity,
                message: info,
                products: selectedGiftNames
            }
            const options = {
                method: "POST",
                headers: {
                    "Content-Type": 'application/Json'
                },
                body: JSON.stringify(details)
            }
            await fetch(`${API_BASE_URL}/send-inquiry`, options)
        

        setCompName("")
        setMobileNum('')
        setQuantity('')
        setSelectedOptions([])
        setemail('')
        setfullname('')
        setinfo('')
    }
    const phone = "971557443213";
    const message = encodeURIComponent("Hello, I want to order your products");
    const whatsappUrl = `https://wa.me/${phone}?text=${message}`

    return (
        <div className='conta-cont' id="contactus">
            <div className='con-left'>
                <h3>Request a Bulk Quote</h3>
                <p>Fill out the form and our team will get back to you within 24 hours
                    with pricing and customization options.
                </p>
                <h4>Contact Information</h4>
                <p><FiPhone /> +971 4 225 4999</p>
                <a
                    href={whatsappUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <p><FaWhatsapp /> +971 5574 43213</p></a>
                <p><a className="email-ever" href="mailto:info@evergrow.ae"><FiMail /> info@evergrow.ae</a></p>
                <p>

                    <HiOutlineLocationMarker /> Warehouse 2, Al Khabaisi, Deira, Dubai

                </p>
                <h4>Business Hours</h4>
                <p>Monday - Saturday: 9.30 AM - 6.30 PM</p>
                <p>Sunday: Closed</p>
            </div>
            <div className='con-right'>
                <form onSubmit={onContactSubmit}>
                    <label htmlFor='name'>Full Name*</label>
                    <input
                        id='name'
                        type="text"
                        placeholder='Ali Mohmd'
                        value={fullname}
                        onChange={(e) => { setfullname(e.target.value) }} />

                    <label htmlFor='comName'>Company Name*</label>
                    <input
                        id='compName'
                        type="text"
                        placeholder='amazon'
                        value={companyName}
                        onChange={(e) => { setCompName(e.target.value) }}
                    />

                    <label htmlFor='num'>Mobile Number*</label>
                    <input
                        id='num'
                        type="text"
                        placeholder='+971 __ ___ ____'
                        value={mobileNum}
                        onChange={(e) => { setMobileNum(e.target.value) }}
                    />

                    <label htmlFor='email' >Email Address*</label>
                    <input
                        id='eamil'
                        type='text'
                        placeholder='email'
                        value={email}
                        onChange={(e) => { setemail(e.target.value) }}
                    />

                    <label htmlFor='products' >Products Interested in</label>

                    <Select
                        options={productOptions}
                        isMulti
                        styles={customStyles}
                        value={selectedOptions}
                        onChange={setSelectedOptions}
                        placeholder="Choose products..."
                    />

                    <label htmlFor='quatity'>Estimated Quantity</label>
                    <input
                        id='quantity'
                        type='number'
                        placeholder='100'
                        value={quantity}
                        onChange={(e) => { setQuantity(e.target.value) }}
                    />

                    <label htmlFor='info' >Additional Information</label>
                    <textarea
                        id="info"
                        cols="30"
                        rows="4"
                        placeholder='type...'
                        value={info}
                        onChange={(e) => { setinfo(e.target.value) }}
                    ></textarea>

                    <button type='submit'>Submit Inquiry</button>
                </form>


            </div>
        </div>
    )
}

export default ContactUs
