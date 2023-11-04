import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../Styles/Home.css';
import  '../images/home/homeimg.jpg'
const Home = () => {
  const navigate=useNavigate()
  return (
    <div className="container-fluid home p-1">
        <div className="row">
            <div className="col home-col">
                <h2>Welcome to <span className="bold fs-3 fw-bold   ">GlowMark</span></h2>
                <h1>Ready to Grow <br />Your Business</h1>
          <button className='btn btn-lg bg-warning ' onClick={()=>navigate("/details")}>Get Started your business</button>
            </div>
        </div>
    </div>
  )
}

export default Home