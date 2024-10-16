// export default Card;
import React from "react";
import "./Card.css";

const MainSection = () => {
  const videos = []; // empty array
  // Generate 100 more video objects
  for (let i = 1; i <= 52; i++) {
    videos.push({
      id: i,
      title: `Video ${i}`,
      description: `Description for Video ${i}`,
    });
  }

  return (
    <>
      <h1>Recommended for you</h1>
      <div className="main-section">
        {videos.map((video) => (
          <div key={video.id} className="first-card">
            <h2>{video.title}</h2>
            <p>{video.description}</p>
          </div>
        ))}
      </div>
    </>
  );
};

export default MainSection;
