import React from 'react'
import '../Styles/Contact.css';
const Contact = () => {
  return (
    <div className="container-fluid contact pt-5   " id="contact">
        <div className="row conatctrow ">
          <div className="col-lg-3 ccol1 ">
            <h4 className="ch">Company--</h4>
            <p>&rsaquo; About Us</p>
            <p>&rsaquo; Contact Us</p>
            <p>&rsaquo; Reservation</p>
            <p>&rsaquo; Privacy Policy</p>
            <p>&rsaquo; Terms &#38; Conditions</p>
          </div>
          <div className="col-lg-3 ccol2">
            <h4 className="ch">Contact--</h4>
            
            <p><i className="fa-solid fa-location-dot"></i> 123 street,New York,USA</p>
            <p><i className="fa-solid fa-phone"></i> +01234567890</p>
            <p><i className="fa-solid fa-envelope"></i> mail@domain.com</p>
            <p></p>
            
          </div>
          <div className="col-lg-3 ccol3">
            <h4 className="ch">Openning--</h4>
           
            <p>Monday - Saturday</p>
            <p>9AM - 10PM</p>
            
            <p>Sunday</p>
            <p>10AM - 8PM</p>
          </div>
          <div className="col-lg-3 ccol4">
            <h4 className="ch">Newsletter--</h4>
           
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut, vero.</p>
            <input type="email" style={{width:190}}/>
              <button type="button" className="btn btn-primary ms-1 p-1" >singup</button>

          </div>
          </div>
        </div>
  )
}

export default Contact