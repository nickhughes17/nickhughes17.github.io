import React from 'react';
import Project from '../components/Project.js';
import '../styles/Work.css';


const Work = () => {
  

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