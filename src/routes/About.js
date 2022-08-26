import React from 'react';
import Me from '../assets/me.jpeg';
import '../styles/About.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const About = () => {
  return (
    <div className='about-container'>
        <div className="description">
            <div className="top">I like being:</div>
            <div className="line"><ChevronRightIcon />in the woods<br /></div>
            <div className="line"><ChevronRightIcon />in the gym<br /></div>
            <div className="line"><ChevronRightIcon />at my desk<br /></div>
            <div className="line"><ChevronRightIcon />on the volleyball court<br /></div>
        </div>
        <img src={Me} alt="Nick Hughes" />
    </div>
  )
}

export default About