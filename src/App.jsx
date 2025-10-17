import { useState } from 'react'
import Section from './Section.jsx'
import portrait from './assets/portrait.jpg'
import sections from './data/sections.json'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub, faReact } from '@fortawesome/free-brands-svg-icons'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  window.addEventListener('scroll', () => {
    document.querySelectorAll('.column-container').forEach(container => {
      const rect = container.getBoundingClientRect();
      const inView = rect.top < window.innerHeight * 1 && rect.bottom > 0;

      if (inView) {
        const children = container.querySelectorAll('.column');
        children.forEach(child => child.classList.add('scrolled'));
      }
    });
  });

  return (
    <>
      <div>
        <img src={portrait} alt='James Kempf' className='profile-image' />
      </div>
      <h1>James Kempf</h1>
      <h2>Full Stack Developer</h2>
      <a className="social-link" href='https://www.linkedin.com/in/james-kempf-1bb20a13a/' target='_blank'>
        <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
      </a>
      <a className="social-link" href='https://github.com/james-kempf' target='_blank'>
        <FontAwesomeIcon icon={faGithub} /> GitHub
      </a>
      <div className='card'>
        <p>Full Stack Developer with 7+ years of experience delivering scalable, client-focused software solutions.
          Proficient in Java, JavaScript, AngularJS, PHP, and Spring Boot, with hands-on work in both SQL and NoSQL databases.
          Experienced in building high-performance APIs and customized applications in Agile teams,
          collaborating with cross-functional groups to troubleshoot, innovate, and deliver impactful features across the full stack.
        </p>
      </div>
      {sections.map((sec, index) =>
        <Section sec={sec} key={index} />
      )}
      <p className='read-the-docs'>
        This website was built with <FontAwesomeIcon icon={faReact} /> React
      </p>
    </>
  )
}

export default App
