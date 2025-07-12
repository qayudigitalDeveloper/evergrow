import { useState } from 'react';
import './ContactUs.css'
import { FiPhone } from "react-icons/fi";
import { FiMail } from "react-icons/fi";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Select from 'react-select';
import { API_BASE_URL } from '../../config';

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
    const [info, setinfo]= useState('')

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
        console.log('clicked submit')
        event.preventDefault()
        const selectedGiftNames = selectedOptions.map(option => option.value);
        const details= {
            name: fullname,
            email: email,
            mobileNum: mobileNum,
            companyName: companyName,
            quantity: quantity,
            message: info,
            products: selectedGiftNames
        }
        console.log(JSON.stringify(details))
        const options= {
            method: "POST",
            headers: {
                "Content-Type": 'application/Json'
            },
            body: JSON.stringify(details)
        }
        const response= await fetch(`${API_BASE_URL}/send-inquiry`, options)
        console.log(response)
        setCompName("")
        setMobileNum('')
        setQuantity('')
        setSelectedOptions('')
        setemail('')
        setfullname('')
        setinfo('')
    }

    return (
        <div className='conta-cont' id="contactus">
            <div className='con-left'>
                <h3>Request a Bulk Quote</h3>
                <p>Fill out the form and our team will get back to you within 24 hours
                    with pricing and customization options.
                </p>
                <h4>Contact Information</h4>
                <p><FiPhone /> +971 4 225 4999</p>
                <p><FiMail /> info@evergrow.ae</p>
                <p><HiOutlineLocationMarker /> Warehouse #2 Plot 128-168, Dubai</p>
                <h4>Business Hours</h4>
                <p>Sunday - Thursday: 9:00 AM - 6:00 PM</p>
                <p>Friday - Saturday: Closed</p>
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

                    {/*<div style={{ marginTop: '20px' }}>
                        <strong>Selected:</strong>
                        <ul>
                            {selectedOptions.map(option => (
                                <li key={option.value}>{option.label}</li>
                            ))}
                        </ul>
                    </div>*/}

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
                        cols="40"
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