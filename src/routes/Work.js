import { React, useEffect } from 'react';
import Project from '../components/Project.js';
import '../styles/Work.css';
import anime from "animejs/lib/anime.es.js"



const Work = () => {
  
  useEffect(() => {
    const textWrapper = document.querySelector('.title');
    if (textWrapper) {
      textWrapper.innerHTML = textWrapper.textContent.replace(
        /\S/g,
        "<span class='letter'>$&</span>"
      );

      // Your anime.js animation code here
      anime.timeline().add({
        targets: '.title .letter',
        opacity: [0, 1],
        easing: 'easeInOutQuad',
        duration: 500,
        delay: (el, i) => 50 * (i + 1)
      });
    }
  }, []);

  return (
    <div>
        <div className="title-container">
            <div className="title">Hi, my name is Nick and I am a web developer from Vancouver.</div>
        </div>
        <div className="works-container">
            <Project />
        </div>
    </div>
  )
}

export default Work