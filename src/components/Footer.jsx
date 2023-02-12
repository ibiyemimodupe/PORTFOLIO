import React from 'react';
import { SocialIcon } from 'react-social-icons';



function Footer() {
  return (
    <>
        <footer className="footer-cont">
          <div className="footer-child">
            <ul className="footer-list">
              <li><SocialIcon url="https://twitter.com/IbiyemiModupe" bgColor="#e7eae7" style={{width: 30, height:30}}/></li>
              <li><SocialIcon url="https://www.linkedin.com/in/oluwamodupe-ibiyemi-495867244"  bgColor="#e7eae7"style={{width: 30, height:30}}/></li>
              <li><SocialIcon url="https://github.com/Deborah423/"  bgColor="#e7eae7"style={{width: 30, height:30}}/></li>
            </ul>
            
            <p>&copy;Copyright {new Date().getFullYear()} || Designed & Built By Oluwamodupe Ibiyemi</p>
          </div>
            
        </footer>
      
    </>
  )
}

export default Footer
