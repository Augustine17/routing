import React, { useState } from 'react'

import { Card } from '../Card/Card'

import data from '../../json/data'

import './Filter.css'

export const Filter = () => {
    const [hotels,setHotels] = useState(data);
    const [name,setName] = useState("");
    const [rating,setrating] = useState(0);

    const handleName = (e) =>{
        const newName = e.target.value;
        setName(newName);
        const filteredData = data.filter((dta)=>{
            return (dta.name.toLowerCase().includes(newName.toLowerCase()) && dta.rating>=rating)
          })

        setHotels(filteredData)
    }

    const handleRatingChange = (e) =>{
        const newRating = e.target.value;
        setrating(newRating);
        const filteredData = data.filter((dta)=>{
            return (dta.name.toLowerCase().includes(name.toLowerCase()) && dta.rating>=newRating)
          })
        setHotels(filteredData)  
    }
  return (
    <>
    <div class="flex justify-between items-center mb-4">
        <div class="mb-4 mt-24 mx-8">
            <input type="text" placeholder="Search restaurants..." class="border rounded p-2" value={name} onChange={handleName}/>
        </div>
        <div class="mb-4 mt-24 mx-8">
            <label for="minRating" class="mr-2">Minimum Rating:</label>
            <input type="number" id="minRating" min="0" max="5" step="1" class="border rounded p-2" value={rating} onChange={handleRatingChange}/>
        </div>
    </div>
    <div className='cardContainer'>
        {hotels.map((item) => (
          <Card key={item._id.$oid} item={item} />
        ))}
    </div>
    </>
  )
}