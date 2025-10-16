import { useState } from 'react'
import portrait from './assets/portrait.jpg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const sections = [
    {
      title: "Experience",
      entries: [
        {
          id: 0,
          name: 'Thentia',
          website: 'https://thentia.com',
          image: 'src/assets/thentia.svg',
          subtitle: 'Full Stack Developer',
          date: 'February 2023 - October 2025',
          description: 'As a Full Stack Developer, I worked closely with clients to troubleshoot, customize, and resolve issues in highly specialized software applications. Leveraging JavaScript, AngularJS, PHP, and Java, I developed and implemented creative solutions tailored to unique business requirements. Partnered with cross-functional teams to ensure timely resolution and continuous improvement of client systems, while maintaining strong communication to understand evolving needs and deliver high-impact results.'
        },
        {
          id: 1,
          name: 'Infosys',
          website: 'https://infosys.com',
          image: 'src/assets/infosys.svg',
          subtitle: 'Teachnology Lead',
          date: 'June 2018 - February 2023',
          description: 'As a Java Developer, I worked on an Agile team to design and implement scalable Java APIs for American Express to maintain and enhance their product catalog. Utilizing Vert.x and Couchbase, we were able to achieve high performance and customization, as well as ensure data persistence across multiple data centers. Collaborated with cross-functional teams and departments globally to deliver impactful features and provide ongoing support for these applications.'
        },
        {
          id: 2,
          name: 'Revature',
          website: "https://revature.com",
          image: 'src/assets/revature.png',
          subtitle: 'Software Engineer',
          date: 'February 2018 - August 2023',
          description: 'As a Full-Stack Developer at Revature, I gained experience in various in-demand technologies, including Java, Spring Boot, Kafka and SQL databases for API development, and Angular for front-end. Revature\'s training aims to prepare Developers for job opportunities through full-stack proficiency.'
        }
      ]
    },
    {
      title: "Education",
      entries: [
        {
          id: 0,
          name: 'Gordon College',
          website: 'https://gordon.edu',
          image: 'src/assets/gordon.png',
          subtitle: 'Wenham, MA',
          date: 'August 2013 - May 2017',
          description: 'Bachelor of Science in Methematics with Minor in Computer Science',
        }
      ]
    },
    {
      title: "Certifications",
      entries: [
        {
          id: 0,
          name: "Oracle Certified Associate",
          website: 'https://www.credly.com/badges/e552e4c2-72ca-4042-9782-e40423780e3d/public_url',
          subtitle: 'Oracle Certified Associate, Java SE 8 programmer',
          image: 'src/assets/java-cert.png',
          date: 'April 20, 2018',
          description: 'An Oracle Certified Associate, Java SE 8 Programmer has demonstrated knowledge of object-oriented concepts, the Java programming language and general knowledge of Java platforms and technologies.',
        }
      ]
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
      {sections.map((sec) =>
        <div>
          <h2>{sec.title}</h2>
          <hr className="divider"></hr>
          <div className="card">
            <ul>
              {sec.entries.map((entry) => (
                <li key={entry.id}>
                  <div className="column-container">
                    <div className="column">
                      <a href={entry.website} target="_blank">
                        <img src={entry.image} href={entry.website} target="_blank" className="external-logo"></img>
                      </a>
                      <h4>{entry.subtitle}</h4>
                      <p>{entry.date}</p>
                    </div>
                    <div className="column">
                      <p className="code-box">{entry.description}</p>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  )
}

export default App
