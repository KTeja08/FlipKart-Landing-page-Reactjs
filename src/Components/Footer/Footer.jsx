import React from 'react';
import Styles from './Footer.module.css'; 
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import QuizIcon from '@mui/icons-material/Quiz';
import AssignmentReturnIcon from '@mui/icons-material/AssignmentReturn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
const Footer = () => {
  return (
    <div className={Styles.footer}>
      <div className={Styles.footerContent}>
        <div className={Styles.section}>
          <h4>About Us</h4>
          <p>Learn more about our company, values, and mission.</p>
        </div>
        <div className={Styles.section}>
          <h4>Customer Service</h4>
          <ul>
            <li><a href="#"><ContactPhoneIcon/>Contact Us</a></li>
            <li><a href="#"><QuizIcon/>FAQ</a></li>
            <li><a href="#"><AssignmentReturnIcon/>Returns</a></li>
          </ul>
        </div>
        <div className={Styles.section}>
          <h4>Follow Us</h4>
          <ul>
            <li><a href="#"><FacebookIcon/>Facebook</a></li>
            <li><a href="#"><TwitterIcon/>Twitter</a></li>
            <li><a href="#"><InstagramIcon/>Instagram</a></li>
          </ul>
        </div>
      </div>
      <div className={Styles.footerBottom}>
        <p>&copy; {new Date().getFullYear()} Flipkart Explore plus. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
