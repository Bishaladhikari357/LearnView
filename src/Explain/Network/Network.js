import React from 'react';
import './Network.css';

const NetworkVideo = ({ videoId, title }) => {
  return (
    <div className="nvideo">
      <iframe
        width="560"
        height="315"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen"
        allowFullScreen
      ></iframe>
      <h2>{title}</h2>
    </div>
  );
};

const Network = () => {
  // Example video data
  const videos = [
    {
      videoId: 'JFF2vJaN0Cw',
      title: 'Network Course',
    },
    {
      videoId: 'jExP6TBZUOk',
      title: 'Basics of Computer Networking',
    },
    {
      videoId: '0AcpUwnc12E',
      title: 'Introduction to Computer Networks',
    },
  ];

  return (
    <div className='network_details'>
      <h1>Details</h1>
      <p>
        "Create an in-depth explanation of how computer networks operate,
        covering essential concepts such as IP addressing, DNS, routing,
        and network protocols like TCP/IP. Include a breakdown of the OSI
        model, with a focus on how data is transmitted between devices
        across different layers. Additionally, explain the role of firewalls,
        VPNs, and wireless networks, highlighting their impact on security
        and connectivity in modern networking."
      </p>

      <div className="network_video">
        {videos.map((video, index) => (
          <NetworkVideo key={index} videoId={video.videoId} title={video.title} />
        ))}
      </div>
    </div>
  );
};

export default Network;
