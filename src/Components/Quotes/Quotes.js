import React from 'react'
import './Quotes.css'
import Quote from './Quote'

import data from '../../json/quotes.json'

export const Quotes = () => {
  return (
    <>
        {
        data.map((dt,index)=>{
          return <Quote quote={dt.quote} author={dt.author} key={index}/>
        })
      }
    </>
  )
}