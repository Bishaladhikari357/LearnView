import React from 'react';
import './Market.css';

const MarketVideo = ({ videoId, title }) => {
  return (
    <div className="mvideo">
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

const Market = () => {
  // Example video data
  const videos = [
    {
      videoId: '3WI9RZODuag',
      title: 'Learn Stock Market',
    },
    {
      videoId: 'fBhZ1xz5rIw',
      title: 'Share Market Class',
    },
    {
      videoId: 'Xn7KWR9EOGQ',
      title: 'Basics of Stock Market For Beginners',
    },
  ];

  return (
    <>
      <div className='market_details'>
        <h1>Market Details:</h1>
        <p>
          "Analyze the latest stock market trends, focusing on key sectors such as technology, healthcare, and energy. Provide insights on recent market movements, highlighting significant stock price changes, trading volumes, and the impact of global economic factors. Discuss the performance of major indices like the S&P 500, NASDAQ, and Dow Jones, and offer projections on how market trends may evolve in the coming months based on current economic indicators, geopolitical events, and investor sentiment."
        </p>
      </div>
      <div className="market_video">
        {videos.map((video, index) => (
          <MarketVideo key={index} videoId={video.videoId} title={video.title} />
        ))}
      </div>
    </>
  );
};

export default Market;
