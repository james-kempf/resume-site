function Entry({ entry }) {

  return (
    <>
      <li>
        <div className='column-container'>
          <div className='column left'>
            {entry.website && entry.image &&
              <a href={entry.website} target='_blank'>
                <img src={entry.image} alt={entry.name} className='external-logo'></img>
              </a>
            }
            <h4>{entry.subtitle}</h4>
            <p>{entry.date}</p>
          </div>
          <div className='column right'>
            <p className='code-box'>{
              entry.points ? entry.points.map((point) => "// " + point).join('\n\n') :
                "/*\n" + entry.description + "\n*/"
            }</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default Entry