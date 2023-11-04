import React from 'react'
import img1 from '../images/services/icon1.png';
import img2 from '../images/services/icon2.png';
import img3 from '../images/services/icon3.png';
import img4 from '../images/services/icon4.png';
import img5 from '../images/services/icon5.png';
import img6 from '../images/services/icon6.png';
import '../Styles/Services.css'
const Services = () => {
  return (
    <div className="container-fluid services">
        <h5 className='service-head'>Our Services</h5>
        <h1 className='service-head1'>Digital Marketing<br/>Services that We Offer</h1>
        <div className="row service-row">
            <div className="col-4-lg service-col">
                <img src={img1} alt="" srcset="" />
                <h5>Digital Marketing</h5>
                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet</p>
            </div>
            <div className="col-3-lg service-col">
                <img src={img2} alt="" srcset="" />
                <h5>Internet Marketing</h5>
                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet</p>
            </div>
            <div className="col-4-lg service-col">
                <img src={img3} alt="" srcset="" />
                <h5>Content Marketing</h5>
                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet</p>
            </div>
        </div>
        <div className="row service-row">
            <div className="col-4-lg service-col">
                <img src={img4} alt="" srcset="" />
                <h5>Social Marketing</h5>
                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet</p>
            </div>
            <div className="col-4-lg service-col">
                <img src={img5} alt="" srcset="" />
                <h5>B2B Marketing</h5>
                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet</p>
            </div>
            <div className="col-4-lg service-col">
                <img src={img6} alt="" srcset="" />
                <h5>E-mail Marketing</h5>
                <p>Erat ipsum justo amet duo et elitr dolor, est duo duo eos lorem sed diam stet</p>
            </div>
        </div>
    </div>
  )
}

export default Services