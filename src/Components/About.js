import React from 'react'
import '../Styles/about.css'
import img1 from '../images/about/icon-5.png'
import img2 from '../images/about/icon-6.png'
const About = () => {
  return (
    <div className="container-fluid about">
        <div className="row">
        <div className="col-6-lg "></div>
        <div className="col-6-sm  col about-col">
            <h5>About us</h5>
            <h2>
                The Best Marketing <br />
                Agency to Improve Your <br />
                Business
                
            </h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                 In labore vitae consequuntur ullam ducimus laboriosam aspernatur dolores delectus veniam earum.</p>
            <div className='about-icon'>
                <div className="col-3 ">
                        <img src={img1} alt="" srcset="" />
                        <h4>Managed Services</h4>
                        <p>Clita erat ipsum et lorem et sit sed stet lorem</p>
                </div>
                <div className="col-3">
                    <img src={img2} alt="" srcset="" />
                    <h4>Dedicated Experts</h4>
                    <p>Clita erat ipsum et lorem et sit sed stet lorem</p>
                </div>
                
                 
            </div>
            <div className='button'>Explore</div>
        </div>
        </div>
    </div>
  )
}

export default About