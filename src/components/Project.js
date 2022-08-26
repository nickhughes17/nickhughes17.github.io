import React from 'react'
import works from '../data/works.json';
import '../styles/Project.css';


const Project = () => {
  
  return (
    <div className='project-container'>
      { works.map((data) => {
        return (data.link.length ? (
          <div key={data.title} className="project">
            <a href={data.link} target={data.target} rel="noreferrer" className='link'>
              <img src={require(`../assets/${data.image.url}`)} alt={data.title} className="image" />
              <div className="overlay">
                <div className="title">
                  {data.title}
                </div>
                <div className="date">{data.date}</div>
                <div className="summary">{data.summary}</div>
                <div className="tech">{data.techUsed}</div>
              </div>
            </a>
          </div>
        ) : (
          <div key={data.title} className="project">
              <img src={require(`../assets/${data.image.url}`)} alt={data.title} className="image" />
              <div className="overlay">
                <div className="title">
                  {data.title}
                </div>
                <div className="date">{data.date}</div>
                <div className="summary">{data.summary}</div>
                <div className="tech">{data.techUsed}</div>
              </div>
          </div>
        ))
      })}
    </div>
  )
}

export default Project;