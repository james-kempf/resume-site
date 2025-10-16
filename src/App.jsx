import { useState } from 'react'
import portrait from './assets/portrait.jpg'
import sections from './data/sections.json'
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
        <img src={portrait} alt="James Kempf" className="profile-image" />
      </div>
      <h1>James Kempf</h1>
      <h2>Full Stack Developer</h2>
      <div className="card">
        <p>Full Stack Developer with 7+ years of experience delivering scalable, client-focused software solutions.
          Proficient in Java, JavaScript, AngularJS, PHP, and Spring Boot, with hands-on work in both SQL and NoSQL databases.
          Experienced in building high-performance APIs and customized applications in Agile teams,
          collaborating with cross-functional groups to troubleshoot, innovate, and deliver impactful features across the full stack.
        </p>
      </div>
      {sections.map((sec, secIndex) =>
        <div key={secIndex}>
          <h2>{sec.title}</h2>
          <hr className="divider"></hr>
          <div className="card">
            <ul>
              {sec.entries.map((entry, entryIndex) => (
                <li key={entryIndex}>
                  <div className="column-container" id={`column-container-${sec.id}-${entry.id}`}>
                    <div className="column left">
                      <a href={entry.website} target="_blank">
                        <img src={entry.image} href={entry.website} target="_blank" className="external-logo"></img>
                      </a>
                      <h4>{entry.subtitle}</h4>
                      <p>{entry.date}</p>
                    </div>
                    <div className="column right">
                      <p className="code-box">{entry.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <p className="read-the-docs">
        This website was built with React
      </p>
    </>
  )
}

export default App
