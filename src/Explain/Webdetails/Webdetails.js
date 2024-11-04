import React, { useState } from 'react';
import YouTube from 'react-youtube';
import './Webdetails.css';

const Webdetails = () => {
  const [videoId, setVideoId] = useState(''); // State to hold video ID

  const handleVideoSubmit = (e) => {
    e.preventDefault();
    const newVideoId = e.target.videoId.value;
    setVideoId(newVideoId); // Set video ID from user input
  };

  const videoOptions = {
    height: '315',
    width: '100%', // Make the width responsive
    playerVars: {
      autoplay: 0,
      modestbranding: 1, // Reduces YouTube branding
      rel: 0, // Prevents showing related videos after playback
    },
  };

  return (
    <div className="details">
      <h1>Details:</h1>
      <p>
        "Explore the world of web development, where creativity meets technology. Learn to build stunning and responsive websites from scratch using HTML, CSS, and JavaScript. Master the art of frontend development by creating interactive user interfaces, while also diving into backend technologies like Node.js, Python (Django, Flask), and databases (SQL/NoSQL) to power your applications. Understand key concepts of web design, UX/UI, and networking to deliver seamless user experiences. This comprehensive journey covers everything from basic static pages to advanced full-stack applications, ensuring you're equipped to build dynamic, modern websites and apps for the real world."
      </p>

      <div className="webdevelopment">
        <div className="Frontend">
          <iframe
            width="100%" // Make the width responsive
            height="315"
            src="https://www.youtube.com/embed/fc2axTKm4ps"
            title="Frontend course"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" // Allow fullscreen
            allowFullScreen
          ></iframe>
          <h2>Frontend course</h2>
        </div>

        <div className="Backend">
          <iframe
            width="100%" // Make the width responsive
            height="315"
            src="https://www.youtube.com/embed/T55Kb8rrH1g"
            title="Backend course"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share; fullscreen" // Allow fullscreen
            allowFullScreen
          ></iframe>
          <h2>Backend course</h2>
        </div>
      </div>

      <div className="custom-video">
        <h2>Insert Your Own YouTube Video</h2>
        <form onSubmit={handleVideoSubmit}>
          <input
            type="text"
            name="videoId"
            placeholder="Enter YouTube Video ID"
            required
          />
          <button type="submit">Load Video</button>
        </form>

        {videoId && (
          <YouTube videoId={videoId} opts={videoOptions} />
        )}
      </div>
    </div>
  );
};

export default Webdetails;
