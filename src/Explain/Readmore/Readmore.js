import React from 'react'
import './Readmore.css'
import web_dev from '../../Images/web_dev.png'
import network from '../../Images/network.png'
const Readmore = () => {
  return (
    <div className='ny'>
      <h1>Our Course</h1>
      <div className="wrapper">
        <div className="detail1">
          <p>Welcome to <strong>Web Development!</strong> Whether you’re building
             a blog, a social media platform, or an e-commerce 
             site, web development is the process that makes it
              all possible. In this video, we’ll dive into the 
              world of web development, covering how websites 
              are created, the tools used, and how the internet
               brings your favorite sites to life.
          </p>
         <img src={web_dev} alt="web development picture" />
         <a href="/web"><h1>Web Development</h1></a>
        </div>
        <div className="detail2">
          <p> <strong>Networking</strong> is the practice of linking two or more
            computers together to share resources and communicate
            with each other. This connection can be through physical
            wires, like Ethernet cables, or wireless signals, like
            Wi-Fi.
          </p>
<img src={network} alt="" />
<a href="/network"><h1>Networking</h1></a>
        </div>
      </div>
    </div>
  )
}

export default Readmore