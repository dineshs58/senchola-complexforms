import React from 'react'
import '../Styles/Homenext.css'
import icon1 from '../images/homenext/icon-1.png'
import icon2 from '../images/homenext/icon-2.png'
import icon3 from '../images/homenext/icon-3.png'
import icon4 from '../images/homenext/icon-4.png'
const Homenext = () => {
  return (
    <div className="container-fluid homenext ">
        {/* <div className="row"> */}
            <div className="col-3 card">
                <img src={icon1} alt="" srcset="" />
                <h4>Award Wining</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto odit, labore id non cum quae?</p>
            </div>
            <div className="col-3 card">
                <img src={icon2} alt="" srcset="" />
                <h4>Professional Staff</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto odit, labore id non cum quae?</p>

            </div>
            <div className="col-3 card">
                <img src={icon3} alt="" srcset="" />
                <h4>Fair Prices</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto odit, labore id non cum quae?</p>
            </div>
            <div className="col-3 card">
                <img src={icon4} alt="" srcset="" />
                <h4>24/7 Support</h4>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto odit, labore id non cum quae?</p>
            </div>
      
        
    </div>
  )
}

export default Homenext