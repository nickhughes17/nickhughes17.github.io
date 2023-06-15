import React, { useEffect } from 'react';
import anime from 'animejs';
import Me from '../assets/me.jpeg';
import '../styles/About.css';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

const About = () => {

  useEffect(() => {
    const lines = document.querySelectorAll('.textline');

    anime({
      targets: lines,
      opacity: [0, 1],
      translateY: [50, 0],
      easing: 'easeOutExpo',
      duration: 1000,
      delay: anime.stagger(500, { start: 200 }), // Stagger the delay with 200ms interval after 1.5 seconds
    });
  }, []);


  return (
    <div className='about-container'>
        <div className="description">
            <div className="top textline">I like being:</div>
            <div className="line textline"><ChevronRightIcon />in the woods<br /></div>
            <div className="line textline"><ChevronRightIcon />in the gym<br /></div>
            <div className="line textline"><ChevronRightIcon />at my desk<br /></div>
            <div className="line textline"><ChevronRightIcon />on the volleyball court<br /></div>
        </div>
        <img src={Me} alt="Nick Hughes" className='textline'/>
    </div>
  )
}

export default About