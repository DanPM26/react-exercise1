import React from 'react'

const Cardquote = ({info}) => {
  return (
      <div>
      <h1>
        {info.quote}
      </h1>
      <h3>
        {info.author}
      </h3>
      <p>
        {info.series}
      </p>

      </div>
    
  )
}

export default Cardquote