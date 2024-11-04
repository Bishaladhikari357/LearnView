import React from 'react';
import './Contact.css'
import contact_img from '../../../Images/contact_img.png'
function Contact() {
  return (
    <div className="c_container">
      <div className='c_partition1'>
        <h1>Contact Page</h1>
        <p>"We welcome any questions or feedback you may have.
          Feel free to reach out to us through the contact form on our website or via email.
          We value your interest and look forward to connecting with you."</p>
        <div className="information">
          <label For="email">Email:</label><br />
          <span>bishaladhikari728@gmai.com</span><br />
        </div>
        <div className="information">
          <label For="phone">Phone:</label> <br />
          <span>+977 9867330928</span><br />
        </div>
        <div className="information">
          <label For="address">Address:</label><br />
          <span>Butwal,Nepal</span>
        </div>

      </div>

<div className="contact_img">
<img src={contact_img} alt="" />
</div>

    </div>
  );
}

export default Contact;
