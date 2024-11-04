import React from 'react';
import './About.css'
import developer from '../../../Images/developer.jpg'
import about_img from '../../../Images/about_img.png'
function About() {
  return (
    <div className="cover">
      <div className="about">
      <div className="about-img">
        <img src={about_img} alt="" />
      </div>
      <div className='ar'>
        <h1>About Page</h1>
        <p>Welcome to the About page!</p>
      </div>
      </div>
      <div className='explain'>

        <div className="frontend">
          <h1>Web developer</h1>
          <p>It's me Bishal Adhikari.A web developer contain both frontend and backend developer. i am a frontend developer specializes in creating the visual and interactive aspects of a website or web application. They work with technologies like HTML, CSS, and JavaScript to build user interfaces, ensuring that websites are aesthetically pleasing, functional, and responsive across different devices. Frontend developers focus on optimizing user experience, implementing design principles, and making sure the site is accessible and easy to navigate.
            They often collaborate with designers and backend developers to bring digital experiences to life.</p>

        </div>
        <div className="deveoper-image">
          <img src={developer} alt="" />
        </div>
      </div>
    </div>
  );
}

export default About;
