import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer'>
       <div className="social-icon">
         <a href="#" target='_blank'><i class="ri-instagram-line"></i></a>
         <a href="#" target='_blank'><i class="ri-linkedin-line"></i></a>
         <a href="#" target='_blank'><i class="ri-github-line"></i></a>
       </div>
       <div className="line">
        <p>Made With <span><i class="ri-heart-fill"></i></span> </p>
       </div>
    </div>
  )
}

export default Footer
