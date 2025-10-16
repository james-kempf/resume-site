import { useState } from 'react'
import portrait from './assets/portrait.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const experience = [
    {
      id: 0,
      company: 'Thentia',
      website: 'https://thentia.com',
      image: 'src/assets/thentia.svg',
      title: 'Full Stack Developer',
      date: 'February 2023 - October 2025',
      description: 'As a Full Stack Developer, I worked closely with clients to troubleshoot, customize, and resolve issues in highly specialized software applications. Leveraging JavaScript, AngularJS, PHP, and Java, I developed and implemented creative solutions tailored to unique business requirements. Partnered with cross-functional teams to ensure timely resolution and continuous improvement of client systems, while maintaining strong communication to understand evolving needs and deliver high-impact results.'
    },
    {
      id: 1,
      company: 'Infosys',
      website: 'https://infosys.com',
      image: 'src/assets/infosys.svg',
      title: 'Teachnology Lead',
      date: 'June 2018 - February 2023',
      description: 'As a Java Developer, I worked on an Agile team to design and implement scalable Java APIs for American Express to maintain and enhance their product catalog. Utilizing Vert.x and Couchbase, we were able to achieve high performance and customization, as well as ensure data persistence across multiple data centers. Collaborated with cross-functional teams and departments globally to deliver impactful features and provide ongoing support for these applications.'
    },
    {
      id: 2,
      company: 'Revature',
      website: "https://revature.com",
      image: 'src/assets/revature.png',
      title: 'Software Engineer',
      date: 'February 2018 - August 2023',
      description: 'As a Full-Stack Developer at Revature, I gained experience in various in-demand technologies, including Java, Spring Boot, Kafka and SQL databases for API development, and Angular for front-end. Revature\'s training aims to prepare Developers for job opportunities through full-stack proficiency.'
    }
  ]

  const education = [
    {
      id: 0,
      school: 'Gordon College',
      website: 'https://gordon.edu',
      image: 'src/assets/gordon.png',
      location: 'Wenham, MA',
      degree: 'Bachelor of Science in Methematics with Minor in Computer Science',
      date: 'August 2013 - May 2017',
    }
  ]

  const certifications = [
    {
      id: 0,
      name: 'Oracle Certified Associate, Java SE 8 programmer',
      website: 'https://www.credly.com/badges/e552e4c2-72ca-4042-9782-e40423780e3d/public_url',
      image: 'src/assets/java-cert.png',
      description: 'An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of object-oriented concepts, the Java programming language and general knowledge of Java platforms and technologies.',
      date: 'April 20, 2018',
    }
  ]

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
      <h2>Experience</h2>
      <hr className="divider"></hr>
      <div className="card">
        <ul>
          {experience.map((exp) => (
            <li key={exp.id}>
              <div className="column-container">
                <div className="column">
                  {/* <h3><a href={exp.website} target="_blank">{exp.company}</a></h3> */}
                  <a href={exp.website} target="_blank">
                    <img src={exp.image} href={exp.website} target="_blank" className="external-logo"></img>
                  </a>
                  <h4>{exp.title}</h4>
                  <p>{exp.date}</p>
                </div>
                <div className="column">
                  <p className="code-box">{exp.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h2>Education</h2>
      <hr className="divider"></hr>
      <div className="card">
        <ul>
          {education.map((edu) => (
            <li key={edu.id}>
              <div className='column-container'>
                <div className='column'>
                  <a href={edu.website} target="_blank">
                    <img src={edu.image} href={edu.website} target="_blank" className="external-logo"></img>
                  </a>
                  <h4>{edu.location}</h4>
                  <p>{edu.date}</p>
                </div>
                <div className='column'>
                  <p>{edu.degree}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <h2>Certifications</h2>
      <hr className="divider"></hr>
      <div className="card">
        <ul>
          {certifications.map((cert) => (
            <li key={cert.id}>
              <div className='column-container'>
                <div className='column'>
                  <a href={cert.website} target="_blank">
                    <img src={cert.image} href={cert.website} target="_blank" className="external-logo-lrg"></img>
                  </a>
                  <h3>{cert.name}</h3>
                  <p>{cert.date}</p>
                </div>
                <div className='column'>
                  <p>{cert.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <p className="read-the-docs">
        This website was built with React
      </p>
    </>
  )
}

export default App
