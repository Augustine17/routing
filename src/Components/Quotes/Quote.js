import React from 'react'

const Quote = (props) => {
  return (
    <div className='quoteContainer'>
        <h1 className='quote'>{props.quote}</h1>
        <p className='author'>{props.author}</p>
    </div>
  )
}

export default Quote