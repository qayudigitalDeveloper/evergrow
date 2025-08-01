import './CorporateGifts.css'

/*const gifts= [
    {
        id: 1,
        giftname: "Premium USB Drive",
        content: "Customized metal USB drives with your logo. Available in 8GB, 16GB, and 32GB.",
        aed: "AED 35 - 75",
        img: ""
    
    },
    {
        id: 2,
        giftname: "Insulated Drinkware",
        content: "Double-walled stainless steel tumblers with laser engraving. Keeps drinks hot/cold for hours.",
        aed: "AED 45 - 95",
        img: "https://evergrow.ae/wp-content/uploads/2025/02/atm-11-stainless-steel-rubber-finish-drinkware_67910a582ca01.jpeg"
    },
    {
        id: 3,
        giftname: "Executive NoteBooks",
        content: "Premium PU leather notebooks with debossed logo. Includes pen and business card holder.",
        aed: "AED 40 - 85",
        img: ''
    },
    {
        id: 4,
        giftname: "Wireless Charger",
        content: "Fast-charging wireless pad with LED logo display. Compatible with all Qi-enabled devices.",
        aed: "AED 55 - 120",
        img: ''
    },
    {
        id: 5,
        giftname: "Power Bank",
        content: "10000mAh capacity with dual USB ports. Sleek aluminum design with engraved logo.",
        aed: "AED 65 - 130",
        img: ''
    },
    {
        id: 6,
        giftname: "Eco-Friendly Gift Set",
        content: "Sustainable bamboo pen, notebook and water bottle in a recyclable gift box.",
        aed: "AED 90 - 180",
        img: ''
    },
    {
        id: 7,
        giftname: "Bluetooth Speaker",
        content: "Compact wireless speaker with superior sound quality. Illuminated logo when in use.",
        aed: "AED 80 - 150",
        img: ''
    },
    {
        id: 8,
        giftname: "Executive Desk Set Charger",
        content: "Premium desk organizer with pen holder, business card stand, and wireless charger.",
        aed: "AED 120 - 250",
        img: ''
    },
    {
        id: 9,
        giftname: "Travel Gift Set",
        content: "Includes neck pillow, eye mask, luggage tag, and travel adapter in a branded pouch.",
        aed: "AED 100 - 200",
        img: ''
    },
    {
        id: 10,
        giftname: "Ramadan Gift Box",
        content: "Elegant gift box with dates, Arabic coffee set, and traditional sweets. Perfect for Ramadan 2025.",
        aed: "AED 150 - 350",
        img: ''
    }
]*/
const gifts= [
    {
        id: 1,
        giftname: "Traditional Arabic Dhow Model Souvenir",
        meterial: "Rosewood and Brass Metal",
        printing: "Metal plate",
        content: "The Traditional Arabic Dhow Model Souvenir, crafted from rosewood and brass, comes in a premium rosewood box with a customizable printed metal plate.",
        aed: "AED 35 - 75",
        img: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120456/WhatsApp_Image_2025-05-05_at_5.22.46_PM__1__j6mrnh.jpg"
    
    },
    {
        id: 2,
        giftname: "Stainless Steel Thermal Water Bottle",
        meterial: "304 Stainless Steel",
        printing: 'Laser Engraving, Screen Printing & UV Printing',
        content: "The Double Wall Stainless Steel Thermal Bottle features a removable base cup and lanyard, made from durable 304 stainless steel, packed in a branded kraft box, with laser engraving, screen, or UV printing options.",
        aed: "AED 45 - 95",
        img: "https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120456/stainless_steel_water_bottle_adho8y.jpg"
    },
    {
        id: 3,
        giftname: "Premium Metal Twist Open Pen with Seemless Light-Up Logo",
        meterial: "Metal Pen With White Light Up Logo",
        printing: 'Screen Printing',
        content: "The Premium Metal Twist-Open Pen features a seamless white light-up logo, crafted from sleek metal, packed in a plastic sheet, and offers screen printing for customization.",
        aed: "AED 40 - 85",
        img: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120691/blue_pen_with_light_up_logo_zqmpxs.jpg'
    },
    {
        id: 4,
        giftname: "Charging Stand",
        meterial: "PVC",
        printing: "Engraving, UV Printing",
        content: "The 3-in-1 Fast Charging Stand efficiently powers your iPhone, Apple Watch, AirPods, and other Qi-enabled devices, made from durable PVC, packed in a gift box, with engraving and UV printing options.",
        aed: "AED 55 - 120",
        img: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120691/charging_stand_czafow.jpg'
    },
    {
        id: 5,
        giftname: "Magsafe Wireless Charging Organizer",
        meterial: "Premium fabric and PU",
        printing: "Screen Printing, Laser Engraving, Embossing & UV DTF",
        content: "The 10,000mAh 3-in-1 Magsafe Charging Organizer with light-up logo and 32GB flash drive is made of premium fabric and PU, packed in a sleek black box, and supports screen, laser, embossing, and UV DTF printing.",
        aed: "AED 65 - 130",
        img: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120455/wireless_charing_organizer_utqndn.jpg'
    },
    {
        id: 6,
        giftname: "Eco-Friendly Gift Set",
        meterial: "Bamboo, Cork, Stainless Steel",
        printing: "Laser Engraving, Screen Printing & UV Printing",
        content: "The Eco Gift Set features a bamboo bottle, powerbank, and cork notebook with pen, made from sustainable materials, packed in an eco box, with laser, screen, and UV printing options.",
        aed: "AED 90 - 180",
        img: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120456/eco-friendly_gift_set_yynfpd.jpg'
    },
    {
        id: 7,
        giftname: "Eco-friendly Natural Jute Bag",
        meterial: "Jute",
        printing: "Screen Printing & UV Printing",
        content: "The Eco-friendly Natural Jute Bag is made from durable jute, with screen and UV printing options.",
        aed: "AED 80 - 150",
        img: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120455/jute_bag_oidgf7.jpg'
    },
    {
        id: 8,
        giftname: "Mug with Black Rim",
        meterial: "Ceramic",
        printing: "Sublimation",
        content: "The 11oz Sublimation Mug with a black rim is made of ceramic, packed in a kraft box, and supports sublimation printing..",
        aed: "AED 120 - 250",
        img: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120455/mug_with_black_rim_nhznii.webp'
    },
    {
        id: 9,
        giftname: "Multi-Tool Kit",
        meterial: "Metal & Plastic",
        printing: "Screen Print",
        content: "Crafted from metal and plastic, packed in a kraft box, with screen printing option.",
        aed: "AED 100 - 200",
        img: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120460/Multi-Tool_Kit_cicidg.jpg'
    },
    {
        id: 10,
        giftname: "Musical Oil Rig Model",
        meterial: "Metal & Rose Wood",
        printing: "Metal plate with screen print logo",
        content: "The Musical Oil Rig Model, made from metal and rosewood with gold-plated brass, comes in a kraft box and features a metal plate with screen-printed logo.",
        aed: "AED 150 - 350",
        img: 'https://res.cloudinary.com/dkvptcm7q/image/upload/v1752120455/musical_oil_rig_joxmzq.jpg'
    }
]

const CorporateGifts = () =>{
    return (
        <div className='corpo-bg-cont' id= "products">
            <h1 className='corpo-h'>Our Top 10 Corporate Gifts</h1>
            <p className='corpo-p'>Discover our best-selling corporate gifts that make a lasting impression</p>
            <ul className='corpo-ul'>
                {gifts.map(each => 
                    <li key={each.id} className='corpo-li'>
                        <div className='gifts-cont'>
                            <img alt={each.giftname} src={each.img} />
                            <div className='gift-sub-cont'>
                                <h1 className='gi-h'>
                                    {each.giftname}
                                </h1>
                                <p className='gi-p'>
                                    {each.content}
                                </p>
                                <div className='aed-cont'>
                                    <div>
                                        <h1 className='aed'>Material: <span>{each.meterial}</span></h1>
                                        <h1 className='aed'>Print: <span>{each.printing}</span></h1>
                                    </div>
                                    
                                    <a href='#contactus'><button type='button' className='enq-btn'>Enquire Now</button></a>
                                </div>
                            </div>
                        </div>
                    </li>
                )}
            </ul>
            <a href='#contactus'><button className='req-btn'>Request Bulk Quote</button></a>
        </div>
    )
}

export default CorporateGifts
