import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.css';

const Header = () => {
  return (
    <div className='header'>
        <div className="work">
            <Link to={'/'}>
                WORK
            </Link>
        </div>
        <div className="logo">
            NICK HUGHES
        </div>
        <div className="link-container">
            <div className="about">
            <Link to={'/about'}>
                ABOUT
            </Link>
            </div>
            <div className="contact-link">
            <Link to={'/contact'}>
                CONTACT
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Header