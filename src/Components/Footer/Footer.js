import React from 'react'
import './Footer.css'
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer class="footer">
  <div class="container">
    <div class="row">
      <div class="footer-col">
        <h4>About Us</h4>
        <p>It's me bishal Adhikari. I am frontend developer </p>
      </div>

      <div class="footer-col">
        <h4>Quick Links</h4>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/services">Services</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact Us</a></li>
        </ul>
      </div>

      <div class="footer-col">
        <h4>Follow Us</h4>
        <div class="social-links">
          <a href='https://www.facebook.com/bishal.adhikari.94695?mibextid=ZbWKwL'>
        <FaFacebook />
          </a>
          <a href='www.instagram.com'>
        <FaInstagram/>
          </a>
          <a href='www.twitter.com'>
        <FaTwitter/>
          </a>
          <a href='www.linkedin.com'>
<FaLinkedin/>
         </a>

        </div>
      </div>

      <div class="footer-col">
        <h4>Subscribe</h4>
        <form class="newsletter-form">
          <input type="email" placeholder="Enter your email" required/>
          <button type="submit">Subscribe</button>
        </form>
      </div>
    </div>

    
  </div>
</footer>

  )
}

export default Footer