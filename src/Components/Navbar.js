import React, { useRef, useState } from 'react'
import {FaBars,FaTimes} from "react-icons/fa"
import '../Styles/navbar.css'
function Navbar(){

    const navRef=useRef();
    
    const showNavbar=()=>{
        navRef.current.classList.toggle("responsive_nav")
    }
    // login popup started
    const [popup,setPops]= useState(false);
    const handleclickOpen=()=>{
        setPops(!popup)
    }
    const closePopup=()=>
    {
        setPops(!popup)
    }
    // login popup closed
    // sign up started
    const [popup2,setPops2]= useState(false);
    const handleclickOpen2=()=>{
        setPops2(!popup)
    }
    const closePopup2=()=>
    {
        setPops2(!popup2)
    }
    //sign up closed
  return (
    <header>
        <h3>GlowMark</h3>
        <nav ref={navRef}>
            <a href="#">Home</a>
            <a href="#">About</a>
            <a href="#">Services</a>
            <a href="#">Our Teams</a>
            <a href="#">Contact</a>
            <a href="#"><button onClick={handleclickOpen}>LOGIN</button></a>
            
                {popup?
                    <div className="popup">
                        <div className="popup-header">
                            <h1>Login</h1>
                            <h1 className="close" onClick={closePopup}>X</h1>
                        </div>
                        <form action="">
                            <label htmlFor="username">Username</label>
                            <input type="text" name="name" id="username" />
                            <label htmlFor="password">Password</label>
                            <input type="password" name="psd" id="password" />
                            <input  id="button" type="button" value="submit" />
                        </form>
                    </div>:""}
              
            <a href="#"><button onClick={handleclickOpen2}>SIGN UP</button></a>
            
                {popup2?
                    <div className="popup2">
                        <div className="popup-header">
                            <h1>Sign up</h1>
                            <h1 className="close" onClick={closePopup2}>X</h1>
                        </div>
                        <form action="">
                            <label htmlFor="username">Create Username</label>
                            <input type="text" name="name" id="username" />
                            <label htmlFor="password">Create Password</label>
                            <input type="password" name="psd" id="password" />
                            <label htmlFor="password">Confirm Password</label>
                            <input type="password" name="psd"   id="password" />
                            <input type="button" id='button' value="submit" />
                        </form>
                    </div>:""}

            <button className='nav-btn nav-close-btn' onClick={showNavbar}>
                <FaTimes/>
            </button>
        </nav>
        <button className='nav-btn nav-close-btn' onClick={showNavbar}><FaBars/></button>
        
    </header>
  )
}


export default Navbar