import React from 'react';
import './Appdev.css';

const AppVideo = ({ videoId, title }) => {
  return (
    <div className="avideo">
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

const Appdev = () => {
  // Example video data
  const videos = [
    {
      videoId: 'HyU4vkZ2NB8',
      title: 'How to Become an Android Developer!',
    },
    {
      videoId: 'InigFUSiPl8',
      title: 'Android Development Tutorials',
    },
    {
      videoId: 'tZvjSl9dswg',
      title: 'Android App Development Tutorial',
    },
  ];

  return (
    <>
      <div className='app_details'>
        <h1>App Development Details:</h1>
        <p>
          "Design and develop a mobile app that provides a seamless user experience for booking travel accommodations. The app should allow users to search for hotels, filter results by price, location, and amenities, and complete bookings with secure payment options. The interface should be intuitive, incorporating modern UI/UX practices, and the app should integrate with third-party APIs for real-time updates on availability and prices. Additionally, include a notification system for booking confirmations and reminders, along with user reviews to help guide future travelers."
        </p>
      </div>
      <div className="app_video">
        {videos.map((video, index) => (
          <AppVideo key={index} videoId={video.videoId} title={video.title} />
        ))}
      </div>
    </>
  );
};

export default Appdev;
