import Entry from './Entry.jsx'

function Section({ sec }) {

  return (
    <>
      <div className='card'>
        <h2>{sec.title}</h2>
        <hr className='divider'></hr>
        <div>
          <ul className={sec.basic && 'basic-list'}>
            {sec.entries.map((entry, index) => (
              <Entry entry={entry} key={index} />
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default Section
