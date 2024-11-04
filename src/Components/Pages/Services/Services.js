import React from 'react'
import './Services.css'
import services_img from '../../../Images/services_img.png'
import 'boxicons'
const Services = () => {
  return (
<div className="container_s">
  <div className="s_partition1">
  <div className="bac_pic">
    <img src={services_img} alt="" />
    
  </div>
    <div className='sr'>
        <h1>Services Page</h1>
        <p>Welcome to the Services page!</p>
    </div>
    </div>


<div className="s_partition2">
     {/* <box-icon name='coffee'></box-icon> */}
     <div className="row">
      <div className="service">
        <box-icon name='laptop'></box-icon>
        <a href="/web"><h2>web Design</h2></a>
        <p>
        Web design involves creating visually appealing and user-friendly interfaces for websites, focusing on layout, color, typography, and overall user experience
        </p>
      </div>

      <div className="service">
      <box-icon name='network-chart'></box-icon>
        <a href="/network"><h2>Networking</h2></a>
        <p>Networking involves the exchange of data between computers and devices, enabling communication and resource sharing across connected systems</p>
      </div>

      <div className="service">
      <box-icon name='line-chart'></box-icon>
        <a href="/market"><h2>Digital marketing</h2></a>
        <p>Digital marketing leverages online platforms and technologies to promote products and services, targeting audiences through various digital channels</p>
      </div>

      <div className="service">
      <box-icon name='mobile'></box-icon>
        <a href="/appdev"><h2>App Developer</h2></a>
        <p>An app developer designs, creates, and maintains mobile applications, focusing on functionality, user experience, and platform compatibility</p>
      </div>

      
     </div>
</div>

    </div>
  )
}

export default Services