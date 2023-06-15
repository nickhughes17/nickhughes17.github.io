import React, { useEffect } from 'react';
import anime from 'animejs';
import '../styles/Contact.css';


const Contact = () => {
  useEffect(() => {
    const textLine = document.querySelector('.contact');

    anime({
      targets: textLine,
      opacity: [0, 1],
      easing: 'easeOutExpo',
      duration: 2000,
    });
  }, []);


  return (
    <div className='contact-container'>
        <div className="contact">Reach out.<br />
            <a href="mailto:nickhughes1796@gmail.com">NickHughes1796@gmail.com</a>
        </div>
    </div>
  )
}

export default Contact;