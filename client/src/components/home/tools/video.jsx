import React from 'react';
import './video.css';
import myVideo from '../../../image/video-Tax.mov'; // import your video file

function VideoTax() {
  return (
    <div className="Video-container">
      <video autoPlay loop muted className="video-background">
        <source src={myVideo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="video-text-filter"></div>
    </div>
  );
}

export default VideoTax;
