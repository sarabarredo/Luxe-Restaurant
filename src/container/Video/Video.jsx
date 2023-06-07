import React, { useRef, useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { video } from '../../constants';
import './Video.css';

const Video = () => {

  const [playVideo, setPlayVideo] = useState(false);
  const videoRef = useRef();

  const handleVideo = () => {
    setPlayVideo((prevPlayVideo) => !prevPlayVideo);

    if (playVideo) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
  }

  return (
    <div className='video'>
      <video 
        src={video}
        ref={videoRef}
        type='video/mp4'
        loop
        controls={false}
        muted 
      />
      <div className='video-overlay flex-center'>
        <div 
          className='video-overlay-circle flex-center'
          onClick={handleVideo}
        >
          {playVideo 
            ? <BsPauseFill color='#bc8e47' fontSize={30} />
            : <BsFillPlayFill color='#bc8e47' fontSize={30} /> 
          }
        </div>
      </div>
    </div>
  )
  
};

export default Video;
