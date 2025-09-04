import React, { useState } from 'react';
import '../App.css';

function PlayControl() {
  const [isPlaying, setIsPlaying] = useState(false);

  const playIcon = "src/images/Controles/play-button.png";
  const pauseIcon = "src/images/Controles/video-pause-button.png";
  const nextIcon = "src/images/Controles/next-track.png";
  const prevIcon = "src/images/Controles/previous-track.png";

  const handlePlay = () => setIsPlaying(true);
  const handlePause = () => setIsPlaying(false);
  const handleNext = () => alert('Siguiente pista');
  const handlePrev = () => alert('Pista anterior');

  return (
    <div className="play-control">
      <button onClick={handlePrev} className="control-btn">
        <img src={prevIcon} alt="Previous" />
      </button>
      {isPlaying ? (
        <button onClick={handlePause} className="control-btn">
          <img src={pauseIcon} alt="Pause" />
        </button>
      ) : (
        <button onClick={handlePlay} className="control-btn">
          <img src={playIcon} alt="Play" />
        </button>
      )}
      <button onClick={handleNext} className="control-btn">
        <img src={nextIcon} alt="Next" />
      </button>
    </div>
  );
}

export default PlayControl;
