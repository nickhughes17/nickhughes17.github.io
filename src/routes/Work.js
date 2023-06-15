import { React, useEffect } from 'react';
import Project from '../components/Project.js';
import '../styles/Work.css';
import anime from "animejs/lib/anime.es.js";



const Work = () => {

    useEffect(() => {
      const sentence = document.querySelector('.title');
      const words = sentence.innerText.split(' ');
  
      sentence.innerHTML = words
        .map((word) => `<span class="word">${word}</span>`)
        .join(' ');
  
      const wordSpans = document.querySelectorAll('.word');
  
      anime({
        targets: wordSpans,
        opacity: [0, 1],
        easing: 'easeOutExpo',
        duration: 2000,
        delay: (el, i) => 150 * i, // Delay each word by 200ms
      });
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

export default Work;