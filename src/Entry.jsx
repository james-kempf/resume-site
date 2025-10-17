function Entry({ entry }) {

  return (
    <>
      <li>
        <div className='column-container'>
          <div className='column left'>
            <a href={entry.website} target='_blank'>
              <img src={entry.image} alt={entry.name} className='external-logo'></img>
            </a>
            <h4>{entry.subtitle}</h4>
            <p>{entry.date}</p>
          </div>
          <div className='column right'>
            <p className='code-box'>{entry.description}</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default Entry