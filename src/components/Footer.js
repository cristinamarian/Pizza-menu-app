import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css';

function Footer() {
  return (
    <div className="footer">
        <h2>You can find us here!</h2>
        <div className="socialMedia">
            <InstagramIcon/> 
            <TwitterIcon/> 
            <FacebookIcon/> 
        </div>
        
    </div>
  )
}

export default Footer;
