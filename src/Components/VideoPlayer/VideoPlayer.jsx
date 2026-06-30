import React, { useRef, useEffect } from 'react';
import './VideoPlayer.css';
import video from '../../assets/college-video.mp4';

const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);

  const closePlayer = (e) => {
    if (e.target === player.current) {
      setPlayState(false);
    }
  };

  // Ensure body doesn't scroll when modal is open
  useEffect(() => {
    if (playState) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [playState]);

  return (
    <div 
      className={`video-player ${playState ? 'visible' : 'hide'}`} 
      ref={player} 
      onClick={closePlayer}
    >
      <div className="video-container">
        <button 
          className="close-btn" 
          onClick={() => setPlayState(false)}
          aria-label="Close video"
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"></line>
            <line x1="6" y1="6" x2="18" y2="18"></line>
          </svg>
        </button>
        <video src={video} autoPlay={playState} muted controls></video>
      </div>
    </div>
  );
};

export default VideoPlayer;