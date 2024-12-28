import React from 'react'
import './footer.css'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  const year = new Date().getFullYear()

  const nav = [ 
    {link : "Home", path:"/"},
    {link : "About Us", path:"/about"},
    {link : "Safety", path:"/safety"},
    {link : "Careers", path:"/careers"}
  ]

  return (
    <footer className='footer-container'>
        <div className="footer-wrapper">
           <div className="footer">
             <ul className='footer-menu'>
              {nav.map((nav,index)=>(
                <li key={index} className='footer-nav-link'>{nav.link}</li>
              ))}
             </ul>
           </div>
           <div className="footer">
            <h5>Connect With Us</h5>
            <div className="d-flex justify-content-center align-items-center gap-3 fs-4 my-3">
              <FaFacebookF className='nav-icons'/>
              <FaTwitter className='nav-icons' />
              <FaLinkedinIn className='nav-icons'/>
              <FaInstagram className='nav-icons'/>
            </div>
           </div>
        </div>
        <hr />
        <p className='text-center'>&copy; {year} Taxi Service. All rights reserved.</p>
    </footer>
  )
}

export default Footer