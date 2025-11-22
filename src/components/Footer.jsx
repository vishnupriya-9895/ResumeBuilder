import React from 'react'
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
function Footer() {
  return (
    <div style={{ paddingTop: "34px" }} className='footeri'>
        <h4 style={{marginBottom:"19px"}}>Contact us</h4>
     <h6>   <MdEmail />rbuilder@gmail.com</h6>
     <h6><FaPhoneAlt />9898989898</h6>
     <h4 style={{marginTop:"20PX"}}>Connect with Us</h4>
    <h5> <FaInstagram />
     <FaFacebookF />
     <FaLinkedin /></h5>
     <p>Designed & built with ❤️ using React</p>

    </div>
  )
}

export default Footer